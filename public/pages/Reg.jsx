import "../CSS/normalize.css";
import "../CSS/style_1.css"
import React from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function Reg() {
  document.title = "Новости";
  return (
    <div className="Reg">
      <header className="header">
        <Link to="/home" className="header-logo">
          <img src="img/LOGO.svg" className="logo" alt="Logo" /> //лого
        </Link>
        <ul className="header-menu"> //навигация и вход
          <Link to="/home" className="button">Новости</Link>
          <div className="button">База подкастов</div>
          <Link to="/aboutus" className="button">О проекте</Link>
          <Link to="/lk" className="button_lk">Вход</Link>
        </ul>
      </header>

      <Route path="/home" component={Index.jsx} />
      <Route path="/aboutus" component={AboutUs.jsx} />
      <Route path="/lk" component={lk.jsx} />
      
      <body> 
        <div className="container">
            <h1>Регистрация</h1>
            <form id="register-form">
              <div className="input-group">
                <label for="email" className="form-label">Электронная почта</label>
                <input type="email" id="email" placeholder="Введите электронную почту" required />
              </div>
              <div className="input-group">
                <label for="create-password" className="form-label">Создать пароль:</label>
                <input type="password" id="create-password" placeholder="Введите пароль" required />
              </div>
              <div className="input-group">
                <label for="confirm-password" className="form-label">Повторить пароль:</label>
                <input type="password" id="confirm-password" placeholder="Повторите пароль" required />
              </div>
              <button type="submit" className="btn">Зарегистрироваться</button>
            </form>
            <a className="href" href = "/login">
                <button type="submit" className="btn">Войти</button>
            </a>
        </div>
        <script>
          document.getElementById('register-form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            const password = document.getElementById('create-password').value;
            const confirmPassword = document.getElementById('confirm-password').value;
            
            if(password !== confirmPassword) {
              alert('Пароли не совпадают, попробуйте еще раз.');
              return;
            }
            
            fetch('http://localhost:3000/register', {
              method: 'POST',
              body: JSON.stringify({ email: email, password: password }),
              headers: { 'Content-Type': 'application/json' }
            })
            .then(response => response.json())
            .then(json => alert(json.success ? json.success : json.error))
            .catch(err => console.error('Error:', err));
          });
        </script>
      </body>

    </div>
  );
}