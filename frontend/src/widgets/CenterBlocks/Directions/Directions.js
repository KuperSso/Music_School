import styles from "./Directions.module.css";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";

const Directions = () => {
  const navigate = useNavigate();
  return (
    <div id="directions">
      <div className={`${styles.directions}`}>
        <div className={`${styles.piano}`}>
          <img
            className={`${styles.image}`}
            src="image/directions/piano.svg"
            alt="ФОРТЕПИАНО"
          ></img>
          <div className={`${styles.pianoDescription}`}>
            <div className={`${styles.titleCard}`}>ФОРТЕПИАНО</div>
            <div className={`${styles.descriptionCard}`}>
              Стань виртуозом фортепиано. Выступи на настоящем концерте и порази
              всех своим талантом!
            </div>
            <Button
              className={`${styles.buttonCard}`}
              label="Подробнее"
              onClick={() => navigate("/piano")}
              icon="pi pi-arrow-right"
              iconPos="right"
            />
          </div>
        </div>
        <div className={`${styles.vocals}`}>
          <img
            className={`${styles.image}`}
            src="image/directions/vocals.svg"
            alt="ВОКАЛ"
          ></img>
          <div className={`${styles.vocalsDescription}`}>
            <div className={`${styles.titleCard}`}>ВОКАЛ</div>
            <div className={`${styles.descriptionCard}`}>
              Стань звездой школьной сцены! Прими участие в профессиональной
              записи вокала.
            </div>
            <Button
              className={`${styles.buttonCard}`}
              label="Подробнее"
              icon="pi pi-arrow-right"
              iconPos="right"
            />
          </div>
        </div>
        <div className={`${styles.piano}`}>
          <img
            className={`${styles.image}`}
            src="image/directions/drum.svg"
            alt="БАРАБАНЫ"
          ></img>
          <div className={`${styles.pianoDescription}`}>
            <div className={`${styles.titleCard}`}>БАРАБАНЫ</div>
            <div className={`${styles.descriptionCard}`}>
              Стань королем ритма! Создай свою первую барабанную партию и зажги
              на сцене вместе с друзьями!
            </div>
            <Button
              className={`${styles.buttonCard}`}
              label="Подробнее"
              icon="pi pi-arrow-right"
              iconPos="right"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Directions;
