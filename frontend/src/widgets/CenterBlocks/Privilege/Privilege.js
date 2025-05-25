import styles from "./Privilege.module.css";

const Privilege = () => {
  return (
    <div id="privilege" className={`${styles.privillegeBlock}`}>
      <div className={`${styles.privillegeTitle}`}>
        <div className={`${styles.title}`}>
          <span className={`${styles.titleColor}`}>
            Современные <br />
            проблемы требуют
          </span>{" "}
          <br />
          современных <br />
          решений!
        </div>
        <div className={`${styles.description}`}>Поэтому мы предлагаем...</div>
      </div>
      <div className={`${styles.privilleges}`}>
        <div className={`${styles.privillegeColumn}`}>
          <div className={`${styles.privillege}`}>
            <div className={`${styles.privillegeLogo}`}>
              <img
                className={`${styles.imageLogo}`}
                src="image/privilege/price.svg"
                alt="Доступная цена"
              ></img>
            </div>
            <div className={`${styles.privillegeDescription}`}>
              Доступная цена
            </div>
          </div>
          <div className={`${styles.privillege}`}>
            <div className={`${styles.privillegeLogo}`}>
              <img
                className={`${styles.imageLogo}`}
                src="image/privilege/support.svg"
                alt="Индивидуальная поддержка от педагога"
              ></img>
            </div>
            <div className={`${styles.privillegeDescription}`}>
              Индивидуальная поддержка <br />
              от педагога
            </div>
          </div>
          <div className={`${styles.privillege}`}>
            <div className={`${styles.privillegeLogo}`}>
              <img
                className={`${styles.imageLogo}`}
                src="image/privilege/graph.svg"
                alt="Гибкий график обучения"
              ></img>
            </div>
            <div className={`${styles.privillegeDescription}`}>
              Гибкий график обучения
            </div>
          </div>
        </div>
        <div className={`${styles.privillegeColumn}`}>
          <div className={`${styles.privillege}`}>
            <div className={`${styles.privillegeLogo}`}>
              <img
                className={`${styles.imageLogo}`}
                src="image/privilege/community.svg"
                alt="Сообщество единомышленников"
              ></img>
            </div>
            <div className={`${styles.privillegeDescription}`}>
              Сообщество единомышленников
            </div>
          </div>
          <div className={`${styles.privillege}`}>
            <div className={`${styles.privillegeLogo}`}>
              <img
                className={`${styles.imageLogo}`}
                src="image/privilege/metodology.svg"
                alt="Проверенная и эффективная методика"
              ></img>
            </div>
            <div className={`${styles.privillegeDescription}`}>
              Проверенная и эффективная методика
            </div>
          </div>
          <div className={`${styles.privillege}`}>
            <div className={`${styles.privillegeLogo}`}>
              <img
                className={`${styles.imageLogo}`}
                src="image/privilege/time.svg"
                alt="Доступ к материалам 24/7"
              ></img>
            </div>
            <div className={`${styles.privillegeDescription}`}>
              Доступ к материалам 24/7
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privilege;
