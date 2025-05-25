import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div id="footer" className={`${styles.footer}`}>
      <div className={`${styles.footerLeft}`}>
        <a href="/" className={`${styles.logo}`}>
          <img src="image/footer/logo.svg" alt="nsk" />
        </a>
        <div className={`${styles.discription}`}>
          Авторское право © 2025 Не школа Kids <br />
          Все права защищены
        </div>
        <div className={`${styles.linksMessengers}`}>
          <a
            href="https://t.me/ne_shkola_kids"
            target="_blank"
            className={`${styles.linksTg}`}
          >
            <img src="image/footer/tg.svg" alt="TG" />
          </a>
          <a
            href="https://vk.com/neshkolakids"
            target="_blank"
            className={`${styles.linksVk}`}
          >
            <img src="image/footer/Vk.svg" alt="VK" />
          </a>
        </div>
      </div>
      <div className={`${styles.footerRight}`}>
        <div className={`${styles.company}`}>
          <div className={`${styles.title}`}>Компания</div>
          <div className={`${styles.linksSite}`}>
            <a href="/" className={`${styles.links}`}>
              Методика
            </a>
            <a href="/" className={`${styles.links}`}>
              Направления
            </a>
            <a href="/" className={`${styles.links}`}>
              Преимущество
            </a>
            <a href="/" className={`${styles.links}`}>
              Отзывы
            </a>
            <a href="/" className={`${styles.links}`}>
              Контакты
            </a>
          </div>
        </div>
        <div className={`${styles.support}`}>
          <div className={`${styles.title}`}>Поддержка</div>
          <div className={`${styles.linksSite}`}>
            <a href="/" className={`${styles.links}`}>
              Центр помощи
            </a>
            <a href="/" className={`${styles.links}`}>
              Условия <br /> использования
            </a>
            <a href="/" className={`${styles.links}`}>
              Юридическая
              <br /> информация
            </a>
            <a href="/" className={`${styles.links}`}>
              Политика <br />
              конфеденциальности
            </a>
          </div>
        </div>
        <div className={`${styles.contacts}`}>
          <div className={`${styles.title}`}>Контакты</div>
          <div className={`${styles.linksSite}`}>
            <a href="tel:+79999969898" className={`${styles.linksContact}`}>
              Телефон: +7 (999) 996-98-98
            </a>
            <a
              href="mailto:Kumpan2003@yandex.ru"
              className={`${styles.linksContact}`}
            >
              Email: support@musicforkids.com{" "}
            </a>
            <a
              href="https://yandex.ru/maps/213/moscow/house/ulitsa_novatorov_40k16/Z04YcwZpS0MGQFtvfXp3cnhgYg==/?indoorLevel=1&ll=37.519261%2C55.663436&z=17.09"
              className={`${styles.linksContact}`}
            >
              Адрес: г. Москва, ул. Новаторов, д. 40к16
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
