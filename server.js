// server.js (Finale, korrigierte Version)

// --- IMPORTE ---
require('dotenv').config();
const express = require('express');
const { Pool } = require('pg');
const bcrypt = require('bcrypt');
const path = require('path');
// GEÄNDERT: Korrekte Reihenfolge
const session = require('express-session');
const pgSession = require('connect-pg-simple')(session);

// --- APP KONFIGURATION ---
const app = express();
// HINZUGEFÜGT: Wichtiger Fix für den Login auf Render
app.set('trust proxy', 1);
const port = process.env.PORT || 3000; // Port für Render angepasst

// --- DATENBANK VERBINDUNG ---
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
                account_type VARCHAR(255) DEFAULT 'free' NOT NULL,
                username VARCHAR(255) -- HINZUGEFÜGT: Spalte für den Benutzernamen
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

// --- MIDDLEWARE ---
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '')));

// GEÄNDERT: Session-Speicher mit PostgreSQL
app.use(session({
    store: new pgSession({
        pool: pool,
        tableName: 'session'
    }),
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: process.env.NODE_ENV === 'production',
        maxAge: 30 * 24 * 60 * 60 * 1000 // 30 Tage
    }
}));

// Middleware zur Überprüfung, ob der Nutzer eingeloggt ist
function isLoggedIn(req, res, next) {
    if (req.session.user) {
        next();
    } else {
        res.status(401).json({ error: 'Nicht authentifiziert' });
    }
}

// --- ROUTEN ---
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));
app.get('/login', (req, res) => res.sendFile(path.join(__dirname, 'login.html')));

// GEÄNDERT: /register Route speichert jetzt auch den Benutzernamen
app.post('/register', async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const userSql = `INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING id`;
        const userResult = await pool.query(userSql, [username, email, hashedPassword]);
        const newUserId = userResult.rows[0].id;

        const progressSql = `INSERT INTO user_progress (user_id) VALUES ($1)`;
        await pool.query(progressSql, [newUserId]);

        console.log(`Neuer Benutzer '${username}' wurde mit der ID ${newUserId} erstellt.`);
        res.redirect('/login');
    } catch (err) {
        console.error("Registrierungsfehler:", err.message);
        res.status(500).send('Fehler bei der Registrierung. E-Mail oder Benutzername eventuell schon vergeben.');
    }
});

// GEÄNDERT: /login Route fügt den Benutzernamen zur Session hinzu
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const result = await pool.query(`SELECT * FROM users WHERE email = $1`, [email]);
        const user = result.rows[0];

        if (user && await bcrypt.compare(password, user.password)) {
            req.session.user = {
                id: user.id,
                email: user.email,
                account_type: user.account_type,
                username: user.username // HINZUGEFÜGT
            };
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

// --- API ROUTEN ---

// GEÄNDERT: /api/session-status sendet jetzt auch den Benutzernamen
app.get('/api/session-status', (req, res) => {
    if (req.session.user) {
        res.json({
            loggedIn: true,
            email: req.session.user.email,
            username: req.session.user.username // HINZUGEFÜGT
        });
    } else {
        res.json({ loggedIn: false });
    }
});

app.get('/api/progress', isLoggedIn, async (req, res) => {
    res.setHeader('Cache-Control', 'no-store'); // Vereinfachter Cache-Header
    try {
        const result = await pool.query(`SELECT * FROM user_progress WHERE user_id = $1`, [req.session.user.id]);
        res.json(result.rows[0] || {});
    } catch (err) {
        res.status(500).json({ error: 'Fortschritt konnte nicht geladen werden.' });
    }
});

app.post('/api/progress', isLoggedIn, async (req, res) => {
    const { completed_lessons, xp, hearts, streak } = req.body;
    const userId = req.session.user.id;
    try {
        const sql = `
            INSERT INTO user_progress (user_id, completed_lessons, xp, hearts, streak)
            VALUES ($1, $2, $3, $4, $5)
            ON CONFLICT (user_id) DO UPDATE SET
                completed_lessons = EXCLUDED.completed_lessons,
                xp = EXCLUDED.xp,
                hearts = EXCLUDED.hearts,
                streak = EXCLUDED.streak;
        `;
        await pool.query(sql, [userId, completed_lessons, xp, hearts, streak]);
        res.json({ success: true, message: 'Fortschritt gespeichert.' });
    } catch (err) {
        console.error("Fehler beim Speichern des Fortschritts:", err);
        res.status(500).json({ error: 'Fortschritt konnte nicht gespeichert werden.' });
    }
});

// --- SERVER START ---
app.listen(port, () => console.log(`Server läuft auf http://localhost:${port}`));