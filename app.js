const express = require('express');
const bodyParser = require('body-parser');
const pool = require('./db');

const app = express();
const jsonParser = express.json();

app.use(jsonParser);

// API для главной страницы
app.get("/", (req, res) => {
  res.json({ message: "Это API Главной Страницы" });
});

// API для страницы входа
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const result = await pool.query('SELECT * FROM Users WHERE user_email = $1 AND user_password = $2', [email, password]);
    if (result.rows.length > 0) {
      res.send({ success: 'Успешный вход!' });
    } else {
      res.status(400).send({ error: 'Некорректно введен email или пароль.' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: 'Ошибка сервера. Попробуйте еще раз позже.' });
  }
});

// API для страницы регистрации
app.post('/register', async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await pool.query('SELECT * FROM Users WHERE user_email = $1', [email]);

    if (existingUser.rows.length > 0) {
      res.status(400).send({ error: 'Пользователь с таким email уже существует.' });
    } else {
      await pool.query('INSERT INTO Users (user_email, user_password) VALUES ($1, $2)', [email, password]);
      res.send({ success: 'Пользователь успешно зарегистрирован!' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: 'Ошибка сервера. Попробуйте еще раз позже.' });
  }
});

// Обработчик 404
app.use((req, res) => {
  res.status(404).json({ error: 'Ресурс не найден' });
});

app.listen(3000, () => console.log('The server is running on http://localhost:3000'));