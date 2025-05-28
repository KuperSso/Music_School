import styles from "./css/Office.module.css";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

const Sidebar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    setIsAuthenticated(false);
    navigate("/");
  };
  return (
    <div className={`${styles.menu}`}>
      <div className={`${styles.navbar}`}>
        <div className={`${styles.logo}`}>
          <a href="/" className={`${styles.navbarLogo}`}>
            <img src="image/office/logo.svg" alt="nsk" />
          </a>
        </div>
        <div className={`${styles.centerblock}`}>
          <div className={`${styles.title}`}>МЕНЮ</div>
          <div className={`${styles.links}`}>
            <div className={`${styles.linksNavbar}`}>
              <img
                src="image/office/Home.svg"
                className={`${styles.logoLinks}`}
              />
              <a href="/" className={`${styles.linksButton} cursor-pointer`}>
                Главная
              </a>
            </div>
            <div className={`${styles.linksNavbar}`}>
              <img
                src="image/office/lib.svg"
                className={`${styles.logoLinks}`}
              />
              <a className={`${styles.linksButton} cursor-pointer`}>Обучение</a>
            </div>
            <div className={`${styles.linksNavbar}`}>
              <img
                src="image/office/web.svg"
                className={`${styles.logoLinks}`}
              />
              <a className={`${styles.linksButton} cursor-pointer`}>
                Интерактив
              </a>
            </div>
            <div className={`${styles.linksNavbar}`}>
              <img
                src="image/office/server.svg"
                className={`${styles.logoLinks}`}
              />
              <a className={`${styles.linksButton} cursor-pointer`}>
                Библиотека
              </a>
            </div>
            <div className={`${styles.linksNavbar}`}>
              <img
                src="image/office/speak.svg"
                className={`${styles.logoLinks}`}
              />
              <a className={`${styles.linksButton} cursor-pointer`}>Общение</a>
            </div>
          </div>
        </div>
        <div className={`${styles.links}`}>
          <div className={`${styles.linksNavbar}`}>
            <img
              src="image/office/settings.svg"
              className={`${styles.logoLinks}`}
            />
            <a className={`${styles.linksButton} cursor-pointer`}>Настройки</a>
          </div>
          <div className={`${styles.linksNavbar}`}>
            <img
              src="image/office/supp.svg"
              className={`${styles.logoLinks}`}
            />
            <a className={`${styles.linksButton} cursor-pointer`}>Поддержка</a>
          </div>
          <div className={`${styles.linksNavbar}`}>
            <img
              src="image/office/logout.svg"
              className={`${styles.logoLinks}`}
            />
            <a
              onClick={handleLogout}
              className={`${styles.logout} cursor-pointer`}
            >
              Выйти
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
