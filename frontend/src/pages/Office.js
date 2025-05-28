import styles from "./css/Office.module.css";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Office = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    setIsAuthenticated(false);
    navigate("/");
  };
  return (
    <div className={`${styles.office}`}>
      <div className={`${styles.userProfile}`}>
        <div className={`${styles.userPhoto}`}>
          <img
            src="image/office/profile.png"
            className={`${styles.logoLinks}`}
          />
        </div>
        <div className={`${styles.userFullname}`}>
          <div className={`${styles.userName}`}>Иванов Иван Иванович</div>
          <div className={`${styles.userStatus}`}>Ученик</div>
        </div>
        <div className={`${styles.userDescription}`}>
          <div className={`${styles.contact}`}>
            <div className={`${styles.mail}`}>Почта</div>
            <div className={`${styles.desc}`}>IvanNeAlkash@kusaka.vodka</div>
          </div>
          <div className={`${styles.contact}`}>
            <div className={`${styles.phone}`}>Телефон</div>
            <div className={`${styles.desc}`}>+7 (999) 999-99-99</div>
          </div>
          <div className={`${styles.contact}`}>
            <div className={`${styles.status}`}>Статус подписки</div>
            <div className={`${styles.desc}`}>активный</div>
          </div>
        </div>
      </div>
      <div className={`${styles.time}`}>
        <div className={`${styles.timeBlock}`}>
          <div className={`${styles.timeImage}`}>
            <img src="image/office/btn.svg" className={`${styles.logoLinks}`} />
          </div>
          <div className={`${styles.timeDesc}`}>
            <div className={`${styles.data}`}>06.05.2025</div>
            <div className={`${styles.dataDesc}`}>Последняя сессия</div>
          </div>
        </div>
        <div className={`${styles.timeBlock}`}>
          <div className={`${styles.timeImage}`}>
            <img src="image/office/btn.svg" className={`${styles.logoLinks}`} />
          </div>
          <div className={`${styles.timeDesc}`}>
            <div className={`${styles.data}`}>20.05.2025</div>
            <div className={`${styles.dataDesc}`}>Следущая сессия</div>
          </div>
        </div>
        <div className={`${styles.timeBlock}`}>
          <div className={`${styles.timeImage}`}>
            <img src="image/office/btn.svg" className={`${styles.logoLinks}`} />
          </div>
          <div className={`${styles.timeDesc}`}>
            <div className={`${styles.data}`}>03.05.2025</div>
            <div className={`${styles.dataDesc}`}>Посещение занятий</div>
          </div>
        </div>
      </div>
      <div className={`${styles.directions}`}>
        <div className={`${styles.directionsTitle}`}>Направления</div>
        <div className={`${styles.directionsCards}`}>
          <Link to="/office/phono" className={`${styles.card}`}>
            <div className={`${styles.cardIn}`}>
              <img
                src="image/office/piano.png"
                className={`${styles.logoLinks}`}
              />
              <img
                src="image/office/pianotext.svg"
                className={`${styles.nameMusic}`}
              />
              <div className={`${styles.level}`}>1 Уровень</div>
              <img
                src="image/office/line.svg"
                className={`${styles.logoLinks}`}
              />
              <div className={`${styles.topic}`}>
                <div className={`${styles.topicTitle}`}>
                  Тема 4. Нотная грамота
                </div>
                <div className={`${styles.topicDesc}`}>Нотный стан</div>
              </div>
            </div>
          </Link>
          <div className={`${styles.card}`}>
            <div className={`${styles.cardIn}`}>
              <img
                src="image/office/micro.png"
                className={`${styles.logoLinks}`}
              />
              <img
                src="image/office/microtext.svg"
                className={`${styles.nameMusic}`}
              />
              <div className={`${styles.level}`}>2 Уровень</div>
              <img
                src="image/office/line.svg"
                className={`${styles.logoLinks}`}
              />
              <div className={`${styles.topic}`}>
                <div className={`${styles.topicTitle}`}>Тема 6. Мелизмы</div>
                <div className={`${styles.topicDesc}`}>
                  Стилистическая разновидность мелизмов
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Office;
