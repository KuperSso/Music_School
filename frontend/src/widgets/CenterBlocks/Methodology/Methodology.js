import styles from "./Methodology.module.css";

const Methodology = () => {
  return (
    <div id="methodology" className={`${styles.methodologyBlock}`}>
      <div className={`${styles.titleQuestion}`}>
        <div className={`${styles.titleTop}`}>В чем заключается наша</div>
        <div className={`${styles.titleTop}`}>авторская методика?</div>
      </div>
      <div className={`${styles.cardsBlock}`}>
        <div className={`${styles.card}`}>
          <div className={`${styles.logo}`}>
            <img
              className={`${styles.imageBanner}`}
              src="image/methodology/wish.svg"
              alt="Желание"
            ></img>
          </div>
          <div className={`${styles.title}`}>
            <b> Желание </b>
          </div>
          <div className={`${styles.description}`}>
            Желание ребенка – главный двигатель обучения. Мы пробуждаем
            любопытство и поддерживаем его стремление к знаниям, веря, что
            только так рождается настоящая увлеченность и эффективность.
            Увлеченный ребенок – это успешный ребенок!
          </div>
        </div>
        <div className={`${styles.card}`}>
          <div className={`${styles.logo}`}>
            <img
              className={`${styles.imageBanner}`}
              src="image/methodology/personality.svg"
              alt="Личность"
            ></img>
          </div>
          <div className={`${styles.title}`}>
            <b>Личность</b>
          </div>
          <div className={`${styles.description}`}>
            Мы строим персональную программу, учитывая его интересы и
            темперамент, чтобы музыка стала не просто навыком, а способом
            самовыражения. Вместе мы раскроем уникальный музыкальный потенциал
            вашего ребенка!
          </div>
        </div>
        <div className={`${styles.card}`}>
          <div className={`${styles.logo}`}>
            <img
              className={`${styles.imageBanner}`}
              src="image/methodology/opportunities.svg"
              alt="Возможности"
            ></img>
          </div>
          <div className={`${styles.title}`}>
            <b>Возможности</b>
          </div>
          <div className={`${styles.description}`}>
            Методика учитывает физические способности ребенка, создавая
            комфортную среду для обучения музыке. Это позволяет ребенку раскрыть
            свой музыкальный талант без физического дискомфорта.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Methodology;
