import styles from "./css/Login.module.css";
import { useState } from "react";
import { InputMask } from "primereact/inputmask";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [phone, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await fetch("http://127.0.0.1:8000/api/login/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("access", data.access);
        localStorage.setItem("refresh", data.refresh);
        navigate("/office");
      } else {
        setError(data.detail || "Ошибка входа");
      }
    } catch (err) {
      setError("Ошибка соединения с сервером");
    }
  };

  return (
    <div className={`${styles.login}`}>
      <form onSubmit={handleSubmit} className={`${styles.form}`}>
        <div className={`${styles.title}`}>Вход в кабинет</div>
        <div className={`${styles.description}`}>
          <div className={`${styles.phone}`}>
            <label htmlFor="phone" className="font-bold block mb-2">
              Логин
            </label>
            <InputMask
              className={`${styles.customInput}`}
              id="phone"
              mask="+7 (999) 999-99-99"
              value={phone}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="+7 (999) 000-00-00"
              autoClear={false}
              alwaysShowMask={true}
            ></InputMask>
          </div>
          <div className={`${styles.password}`}>
            <label htmlFor="name" className="font-bold block mb-2">
              Пароль
            </label>
            <InputText
              className={`${styles.customInput}`}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <a href="#" className={`${styles.buttonPassword}`}>
          Забыли пароль?
        </a>
        <Button type="submit" className={`${styles.buttonPut}`} label="Войти" />
        <div className={`${styles.registation}`}>
          У вас еще нет аккаунта?{" "}
          <a
            className={`${styles.registationButton}`}
            onClick={() => navigate("/register")}
          >
            Регистрация
          </a>
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    </div>
  );
}
