import "../CSS/normalize.css";
import "../CSS/style_1.css"
import "../CSS/style_lk.css"
import React from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Reg = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Пароли не совпадают, попробуйте еще раз.");
      return;
    }

    fetch("http://localhost:3000/Reg", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((json) => alert(json.success ? json.success : json.error))
      .catch((err) => console.error("Error:", err));
  };

  return (
    <div className="container">
      <h1>Регистрация</h1>
      <form id="Reg-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label for="email" className="form-label">
            Электронная почта
          </label>
          <input
            type="email"
            id="email"
            placeholder="Введите электронную почту"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label for="create-password" className="form-label">
            Создать пароль:
          </label>
          <input
            type="password"
            id="create-password"
            placeholder="Введите пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label for="confirm-password" className="form-label">
            Повторить пароль:
          </label>
          <input
            type="password"
            id="confirm-password"
            placeholder="Повторите пароль"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn">
          Зарегистрироваться
        </button>
        <a className="href" href="/login">
          <button type="submit" className="btn">
            Войти
          </button>
        </a>
      </form>
    </div>
  );
};

export default Reg;