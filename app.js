const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const jsonParser = express.json();

app.use(express.static(__dirname + "/public/img"));
app.use(express.static(__dirname + "/public"));

app.use("/main",function (_, response) {
  response.redirect("/")
});

let users = [];

app.get("/", function(request, response){
  response.sendFile(__dirname + "/public/index.html");
});

app.get("/login", function(request, response){
  response.sendFile(__dirname + "/public/lk.html");
});
app.post('/login', jsonParser, (req, res) => {
  let userEmail = req.body.email;
  let userPassword = req.body.password;

  let user = users.find(user => user.email === userEmail && user.password === userPassword);

  if (user) {
    res.send({ success: 'Успешный вход!' });
  } else {
    res.status(400).send({ error: 'Некорректно введен email или пароль.' });
    return;
  }
});

app.get("/about", function(request, response){
  response.sendFile(__dirname + "/public/aboutus.html")
})

app.get("/register", function(request, response){
  response.sendFile(__dirname + "/public/reg.html");
});
app.post('/register', jsonParser, (req, res) => {
  // Проверяем, существует ли пользователь с таким электронной почтой
  const existingUser = users.find(u => u.email === req.body.email);

  // Если такой пользователь уже существует, возвращаем ошибку
  if(existingUser) {
    res.status(400).send({ error: 'Пользователь с таким email уже существует.' });
    return;
  }

  // Если все в порядке, добавляем пользователя в "базу данных"
  users.push({ email: req.body.email, password: req.body.password });
  res.send({ success: 'Пользователь успешно зарегистрирован!' });
  console.log(users);
});

app.use((request, response, next) => {
  response.status(404).sendFile(__dirname + "/public/error404.html");
});

app.listen(3000, () => console.log('The server is running on http://localhost:3000'));