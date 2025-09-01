// server.js (Final version with robust UPSERT logic)
// In server.js, ganz oben
// In server.js, ganz oben
require('dotenv').config();
const express = require('express');
const { Pool } = require('pg');
const bcrypt = require('bcrypt');
const path = require('path');
const session = require('express-session'); // ZUERST 'session' definieren
const pgSession = require('connect-pg-simple')(session); // DANN an pgSession übergeben

const app = express();
app.set('trust proxy', 1); // <-- DIESE ZEILE HINZUFÜGEN
const port = 3000;

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});

async function setupDatabase() {
    try {
        await pool.query(`
            CREATE TABLE IF NOT EXISTS users (
                id SERIAL PRIMARY KEY,
                email TEXT UNIQUE NOT NULL,
                password TEXT NOT NULL,
                account_type VARCHAR(255) DEFAULT 'free' NOT NULL
            )
        `);
        await pool.query(`
            CREATE TABLE IF NOT EXISTS user_progress (
                user_id INTEGER PRIMARY KEY,
                completed_lessons TEXT[] DEFAULT ARRAY[]::TEXT[],
                xp INTEGER DEFAULT 0,
                streak INTEGER DEFAULT 0,
                hearts INTEGER DEFAULT 5,
                CONSTRAINT fk_user FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE
            )
        `);
        console.log('Erfolgreich mit der PostgreSQL-Datenbank verbunden und Tabellen sind bereit.');
    } catch (err) {
        console.error('Fehler beim Einrichten der Datenbank:', err);
    }
}
setupDatabase();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '')));
// NEUER CODE in server.js
app.use(session({
    store: new pgSession({
        pool: pool, // Ihre bestehende Datenbankverbindung
        tableName: 'session' // Name der Tabelle, die automatisch erstellt wird
    }),
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { 
        secure: process.env.NODE_ENV === 'production', // Wichtig für den Live-Betrieb
        maxAge: 24 * 60 * 60 * 1000 // 1 Tag
    }
}));
// === Routen ===

function isLoggedIn(req, res, next) {
    if (req.session.user) {
        next();
    } else {
        res.status(401).json({ error: 'Nicht authentifiziert' });
    }
}

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));
app.get('/login', (req, res) => res.sendFile(path.join(__dirname, 'login.html')));

app.post('/register', async (req, res) => {
    const { email, password } = req.body;
    try {
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const userSql = `INSERT INTO users (email, password) VALUES ($1, $2) RETURNING id`;
        const userResult = await pool.query(userSql, [email, hashedPassword]);
        const newUserId = userResult.rows[0].id;

        const progressSql = `INSERT INTO user_progress (user_id) VALUES ($1)`;
        await pool.query(progressSql, [newUserId]);
        
        console.log(`Ein neuer Benutzer wurde mit der ID ${newUserId} und initialem Fortschritt erstellt.`);
        res.redirect('/login');
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Fehler bei der Registrierung. Vielleicht ist die E-Mail schon vergeben?');
    }
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const result = await pool.query(`SELECT * FROM users WHERE email = $1`, [email]);
        const user = result.rows[0];

        if (user && await bcrypt.compare(password, user.password)) {
            req.session.user = { id: user.id, email: user.email, account_type: user.account_type };
            console.log(`Benutzer ${user.email} erfolgreich angemeldet.`);
            res.redirect('/');
        } else {
            res.status(401).send('Falsche E-Mail oder falsches Passwort. <a href="/login">Erneut versuchen</a>');
        }
    } catch (err) {
        res.status(500).send('Serverfehler');
    }
});

app.get('/logout', (req, res) => {
    req.session.destroy(() => res.redirect('/login'));
});

// === API Routen für das Frontend ===

app.get('/api/session-status', (req, res) => {
    if (req.session.user) {
        res.json({ loggedIn: true, email: req.session.user.email });
    } else {
        res.json({ loggedIn: false });
    }
});

app.get('/api/progress', isLoggedIn, async (req, res) => {
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');
    res.setHeader('Surrogate-Control', 'no-store');
    
    try {
        const result = await pool.query(`SELECT * FROM user_progress WHERE user_id = $1`, [req.session.user.id]);
        res.json(result.rows[0] || {});
    } catch (err) {
        res.status(500).json({ error: 'Fortschritt konnte nicht geladen werden.' });
    }
});

// =====================================================================================
// API zum Speichern des Benutzerfortschritts (FINALE, ROBUSTE VERSION)
// =====================================================================================
app.post('/api/progress', isLoggedIn, async (req, res) => {
    const { completed_lessons, xp, hearts, streak } = req.body;
    const userId = req.session.user.id;

    try {
        // Dieser SQL-Befehl ist ein "UPSERT".
        // Er versucht einzufügen, und wenn ein Konflikt bei user_id auftritt,
        // aktualisiert er stattdessen die vorhandene Zeile.
        const sql = `
            INSERT INTO user_progress (user_id, completed_lessons, xp, hearts, streak)
            VALUES ($1, $2, $3, $4, $5)
            ON CONFLICT (user_id) DO UPDATE SET
                completed_lessons = EXCLUDED.completed_lessons,
                xp = EXCLUDED.xp,
                hearts = EXCLUDED.hearts,
                streak = EXCLUDED.streak;
        `;
        
        // Beachte die geänderte Reihenfolge der Parameter, passend zum SQL-Befehl
        await pool.query(sql, [userId, completed_lessons, xp, hearts, streak]);
        
        res.json({ success: true, message: 'Fortschritt robust gespeichert.' });

    } catch (err) {
        console.error("Fehler beim robusten Speichern:", err);
        res.status(500).json({ error: 'Fortschritt konnte nicht gespeichert werden.' });
    }
});


app.listen(port, () => console.log(`Server läuft auf http://localhost:${port}`));