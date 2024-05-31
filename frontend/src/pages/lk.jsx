import "../CSS/normalize.css";
import "../CSS/style_1.css"
import "../CSS/style_lk.css"
import React from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    alert(data.success || data.error);
  };

  return (
    <div className="container">
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

      <h1>Вход в личный кабинет</h1>
      <form id="login-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="email" className="form-label">Электронная почта</label>
          <input
            type="email"
            id="email"
            placeholder="Введите электронную почту"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="password" className="form-label">Пароль:</label>
          <input
            type="password"
            id="password"
            placeholder="Введите пароль"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn">Войти</button>
      </form>
      <button onClick={() => window.location.href = '/register'} type="submit" className="btn">Зарегистрироваться</button>
    </div>
  );
};

export default Login;
