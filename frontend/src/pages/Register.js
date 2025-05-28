import styles from "./css/Register.module.css";
import { useState } from "react";
import { InputMask } from "primereact/inputmask";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await fetch("http://127.0.0.1:8000/api/register/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone, password, full_name: fullName, email }),
      });

      const data = await response.json();

      if (response.ok) {
        navigate("/office");
      } else {
        setError(data.detail || "Ошибка регистрации");
      }
    } catch (err) {
      setError("Ошибка соединения с сервером");
    }
  };

  return (
    <div className={`${styles.register}`}>
      <form onSubmit={handleSubmit} className={`${styles.form}`}>
        <div className={`${styles.title}`}>Регистрация</div>
        <div className={`${styles.description}`}>
          <div className={`${styles.fullname}`}>
            <label htmlFor="fullname" className="font-bold block mb-2">
              ФИО
            </label>
            <InputText
              className={`${styles.customInput}`}
              id="fullname"
              value={fullName}
              placeholder="Иванов Иван Иванович"
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div className={`${styles.phone}`}>
            <label htmlFor="phone" className="font-bold block mb-2">
              Телефон
            </label>
            <InputMask
              className={`${styles.customInput}`}
              id="phone"
              mask="+7 (999) 999-99-99"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+7 (999) 000-00-00"
              autoClear={false}
              alwaysShowMask={true}
            ></InputMask>
          </div>
          <div className={`${styles.email}`}>
            <label htmlFor="email" className="font-bold block mb-2">
              Почта
            </label>
            <InputText
              className={`${styles.customInput}`}
              id="email"
              value={email}
              placeholder="IvanNeAlkash@kusaka.vodka"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={`${styles.password}`}>
            <label htmlFor="password" className="font-bold block mb-2">
              Придумайте пароль
            </label>
            <InputText
              className={`${styles.customInput}`}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <Button type="submit" className={`${styles.buttonPut}`} label="Войти" />
        <div className={`${styles.registation}`}>
          У вас уже есть аккаунт?{" "}
          <a
            className={`${styles.loginButton}`}
            onClick={() => navigate("/login")}
          >
            Войти
          </a>
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    </div>
  );
}
