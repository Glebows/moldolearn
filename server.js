// server.js (Finale, produktionsreife Version für Netlify)

// --- IMPORTE ---
require('dotenv').config();
const express = require('express');
const { Pool } = require('pg');
const bcrypt = require('bcrypt');
const session = require('express-session');
const pgSession = require('connect-pg-simple')(session);

// --- APP KONFIGURATION ---
const app = express();
app.set('trust proxy', 1); // Notwendig für Proxies wie Netlify/Render

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
                username VARCHAR(255)
            )
        `);
        
        await pool.query(`
            CREATE TABLE IF NOT EXISTS user_progress (
                user_id INTEGER PRIMARY KEY,
                completed_lessons TEXT[] DEFAULT ARRAY[]::TEXT[],
                xp INTEGER DEFAULT 0,
                streak INTEGER DEFAULT 0,
                hearts INTEGER DEFAULT 5,
                difficult_words TEXT[] DEFAULT ARRAY[]::TEXT[],
                daily_goal JSONB DEFAULT '{"completed": false, "date": null}',
                badges JSONB DEFAULT '[]',
                favorite_words TEXT[] DEFAULT ARRAY[]::TEXT[],
                CONSTRAINT fk_user FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE
            )
        `);
        
        console.log('Erfolgreich mit der PostgreSQL-Datenbank verbunden, Tabellen sind bereit.');
    } catch (err) {
        console.error('Fehler beim Einrichten der Datenbank:', err);
    }
}
setupDatabase();

// --- MIDDLEWARE ---
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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
        httpOnly: true,
        sameSite: 'lax',
        maxAge: 30 * 24 * 60 * 60 * 1000 // 30 Tage
    }
}));

function isLoggedIn(req, res, next) {
    if (req.session.user) {
        next();
    } else {
        res.status(401).json({ error: 'Nicht authentifiziert' });
    }
}

// --- ROUTEN FÜR LOGIK & FORMULARE ---
// HINZUGEFÜGT: Eine "Sicherheits"-Route, die falsche Anfragen an /login korrekt umleitet
app.get('/login', (req, res) => {
    res.redirect('/login.html');
});
app.post('/register', async (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        return res.status(400).send('Bitte füllen Sie alle Felder aus.');
    }
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const userSql = `INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING id, email, username`;
        const userResult = await pool.query(userSql, [username, email, hashedPassword]);
        const newUser = userResult.rows[0];

        const progressSql = `INSERT INTO user_progress (user_id) VALUES ($1)`;
        await pool.query(progressSql, [newUser.id]);

        // Automatisch einloggen nach Registrierung
        req.session.user = {
            id: newUser.id,
            email: newUser.email,
            username: newUser.username
        };

        console.log(`Neuer Benutzer '${username}' mit ID ${newUser.id} erstellt und eingeloggt.`);
        res.redirect('/index.html');
    } catch (err) {
        console.error("Registrierungsfehler:", err.message);
        res.status(500).send('Fehler bei der Registrierung. E-Mail oder Benutzername eventuell schon vergeben.');
    }
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const result = await pool.query(`SELECT * FROM users WHERE email = $1`, [email]);
        const user = result.rows[0];

        if (user && await bcrypt.compare(password, user.password)) {
            req.session.user = {
                id: user.id,
                email: user.email,
                username: user.username
            };
            console.log(`Benutzer ${user.email} erfolgreich angemeldet.`);
            res.redirect('/index.html');
        } else {
            res.status(401).send('Falsche E-Mail oder falsches Passwort. <a href="/login.html">Erneut versuchen</a>');
        }
    } catch (err) {
        console.error("Login-Fehler:", err);
        res.status(500).send('Serverfehler');
    }
});

app.get('/logout', (req, res) => {
    req.session.destroy(() => res.redirect('/login.html'));
});

// --- API ROUTEN ---

app.get('/api/session-status', (req, res) => {
    if (req.session.user) {
        res.json({
            loggedIn: true,
            email: req.session.user.email,
            username: req.session.user.username
        });
    } else {
        res.json({ loggedIn: false });
    }
});

app.get('/api/progress', isLoggedIn, async (req, res) => {
    res.setHeader('Cache-Control', 'no-store');
    try {
        const result = await pool.query(`SELECT * FROM user_progress WHERE user_id = $1`, [req.session.user.id]);
        let row = result.rows[0] || {};
        // Default-Werte für alle Felder, die null sein könnten
        row.completed_lessons = row.completed_lessons || [];
        row.xp = row.xp || 0;
        row.streak = row.streak || 0;
        row.hearts = row.hearts == null ? 5 : row.hearts;
        row.difficult_words = row.difficult_words || [];
        row.daily_goal = row.daily_goal || { completed: false, date: null };
        row.badges = row.badges || [];
        row.favorite_words = row.favorite_words || [];
        res.json(row);
    } catch (err) {
        res.status(500).json({ error: 'Fortschritt konnte nicht geladen werden.' });
    }
});

app.post('/api/progress', isLoggedIn, async (req, res) => {
    const { 
        completed_lessons, xp, hearts, streak, 
        difficult_words, daily_goal, badges, favorite_words 
    } = req.body;
    const userId = req.session.user.id;

    try {
        const sql = `
            INSERT INTO user_progress (
                user_id, completed_lessons, xp, hearts, streak, 
                difficult_words, daily_goal, badges, favorite_words
            )
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
            ON CONFLICT (user_id) DO UPDATE SET
                completed_lessons = EXCLUDED.completed_lessons,
                xp = EXCLUDED.xp,
                hearts = EXCLUDED.hearts,
                streak = EXCLUDED.streak,
                difficult_words = EXCLUDED.difficult_words,
                daily_goal = EXCLUDED.daily_goal,
                badges = EXCLUDED.badges,
                favorite_words = EXCLUDED.favorite_words;
        `;
        
        await pool.query(sql, [
            userId, completed_lessons, xp, hearts, streak,
            difficult_words, daily_goal, badges, favorite_words
        ]);
        
        res.json({ success: true, message: 'Fortschritt gespeichert.' });
    } catch (err) {
        console.error("Fehler beim Speichern des Fortschritts:", err);
        res.status(500).json({ error: 'Fortschritt konnte nicht gespeichert werden.' });
    }
});

// --- EXPORT FÜR NETLIFY ---
module.exports = { app };