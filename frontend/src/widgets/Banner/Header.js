import styles from "./Banner.module.css";
import { useEffect, useState } from "react";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("access");
    setIsAuthenticated(!!token);
  }, []);

  const handleScrollAndCloseSidebar = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({ top: element.offsetTop, behavior: "smooth" });
    }
  };

  return (
    <div className={`${styles.toolbar}`}>
      <div className={`${styles.toolbarIn}`}>
        <a href="/" className={`${styles.toolbarLogo}`}>
          <img
            src="image/banner/Logo.svg"
            className={`${styles.logo}`}
            alt="nsk"
          />
        </a>

        <div className={`${styles.links}`}>
          <a
            onClick={() => handleScrollAndCloseSidebar("methodology")}
            className={`${styles.linksButton} cursor-pointer`}
          >
            Методика
          </a>
          <a
            onClick={() => handleScrollAndCloseSidebar("privilege")}
            className={`${styles.linksButton} cursor-pointer`}
          >
            Преимущества
          </a>
          <a
            onClick={() => handleScrollAndCloseSidebar("directions")}
            className={`${styles.linksButton} cursor-pointer`}
          >
            Направления
          </a>
          <a
            onClick={() => handleScrollAndCloseSidebar("reviews")}
            className={`${styles.linksButton} cursor-pointer`}
          >
            Отзывы
          </a>
          <a
            onClick={() => handleScrollAndCloseSidebar("footer")}
            className={`${styles.linksButton} cursor-pointer`}
          >
            Контакты
          </a>
          {isAuthenticated ? (
            <>
              <Button
                className={`${styles.linksButtonAutorization}`}
                onClick={() => navigate("/office")}
                label="Личный Кабинет"
                icon="pi pi-arrow-right"
                iconPos="right"
              />
            </>
          ) : (
            <Button
              className={`${styles.linksButtonAutorization}`}
              onClick={() => navigate("/login")}
              label="Войти"
              icon="pi pi-arrow-right"
              iconPos="right"
            />
          )}
        </div>
      </div>
    </div>
  );
}
