// server.js (Полностью исправленная версия)

// --- ИМПОРТЫ ---
require('dotenv').config();
const express = require('express');
const { Pool } = require('pg');
const bcrypt = require('bcrypt');
const path = require('path');
const session = require('express-session');
const pgSession = require('connect-pg-simple')(session);

// --- КОНФИГУРАЦИЯ ПРИЛОЖЕНИЯ ---
const app = express();
app.set('trust proxy', 1);
const port = process.env.PORT || 3000;

// --- ПОДКЛЮЧЕНИЕ К БАЗЕ ДАННЫХ ---
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});

// ИЗМЕНЕНО: Обновлена функция настройки базы данных
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
        
        // ИЗМЕНЕНО: Добавлены новые колонки в user_progress
        // Мы используем тип JSONB для хранения объектов и массивов, что очень удобно.
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

        // Таблица для сессий (необходима для connect-pg-simple)
        await pool.query(`
            CREATE TABLE IF NOT EXISTS "session" (
              "sid" varchar NOT NULL COLLATE "default",
              "sess" json NOT NULL,
              "expire" timestamp(6) NOT NULL
            )
            WITH (OIDS=FALSE);
            ALTER TABLE "session" ADD CONSTRAINT "session_pkey" PRIMARY KEY ("sid") NOT DEFERRABLE INITIALLY IMMEDIATE;
        `);
        
        console.log('Успешное подключение к PostgreSQL, таблицы готовы.');
    } catch (err) {
        console.error('Ошибка при настройке базы данных:', err);
    }
}
setupDatabase();

// --- ПРОМЕЖУТОЧНОЕ ПО (MIDDLEWARE) ---
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '')));

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
        httpOnly: true, // Рекомендуется для безопасности
        sameSite: 'lax', // Рекомендуется для безопасности
        maxAge: 30 * 24 * 60 * 60 * 1000 // 30 дней
    }
}));

function isLoggedIn(req, res, next) {
    if (req.session.user) {
        next();
    } else {
        res.status(401).json({ error: 'Не аутентифицирован' });
    }
}

// --- МАРШРУТЫ ---
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));
app.get('/login', (req, res) => res.sendFile(path.join(__dirname, 'login.html')));

app.post('/register', async (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        return res.status(400).send('Пожалуйста, заполните все поля.');
    }
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const userSql = `INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING id`;
        const userResult = await pool.query(userSql, [username, email, hashedPassword]);
        const newUserId = userResult.rows[0].id;

        // Создаем начальный прогресс для нового пользователя
        const progressSql = `INSERT INTO user_progress (user_id) VALUES ($1)`;
        await pool.query(progressSql, [newUserId]);

        console.log(`Новый пользователь '${username}' с ID ${newUserId} создан.`);
        res.redirect('/login');
    } catch (err) {
        console.error("Ошибка регистрации:", err.message);
        res.status(500).send('Ошибка при регистрации. Возможно, email или имя пользователя уже заняты.');
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
            console.log(`Пользователь ${user.email} успешно вошел в систему.`);
            res.redirect('/');
        } else {
            res.status(401).send('Неверный email или пароль. <a href="/login">Попробовать снова</a>');
        }
    } catch (err) {
        console.error("Ошибка входа:", err);
        res.status(500).send('Ошибка сервера');
    }
});

app.get('/logout', (req, res) => {
    req.session.destroy(() => res.redirect('/login'));
});

// --- API МАРШРУТЫ ---

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
        res.json(result.rows[0] || {});
    } catch (err) {
        res.status(500).json({ error: 'Не удалось загрузить прогресс.' });
    }
});

// ИЗМЕНЕНО: Обновлен маршрут для сохранения полного прогресса
app.post('/api/progress', isLoggedIn, async (req, res) => {
    const { 
        completed_lessons, 
        xp, 
        hearts, 
        streak, 
        difficult_words, 
        daily_goal, 
        badges, 
        favorite_words 
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
        
        // Передаем все 9 параметров в запрос
        await pool.query(sql, [
            userId, completed_lessons, xp, hearts, streak,
            difficult_words, daily_goal, badges, favorite_words
        ]);
        
        res.json({ success: true, message: 'Прогресс сохранен.' });
    } catch (err) {
        console.error("Ошибка сохранения прогресса:", err);
        res.status(500).json({ error: 'Не удалось сохранить прогресс.' });
    }
});

// --- ЗАПУСК СЕРВЕРА ---
// server.js (am Ende der Datei)
// Entfernen oder auskommentieren Sie die app.listen-Zeile:
// app.listen(port, () => console.log(`Server läuft auf http://localhost:${port}`));

// Fügen Sie stattdessen diese Zeile hinzu, um Ihre App zu exportieren:
module.exports = { app, pool };