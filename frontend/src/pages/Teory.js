import styles from "./css/Teory.module.css";
import { Link } from "react-router-dom";

const Teory = () => {
  return (
    <div className={`${styles.phono}`}>
      <div className={`${styles.title}`}>Теория</div>
      <div className={`${styles.levels}`}>
        <div className={`${styles.level}`}>
          <div className={`${styles.levelTitle}`}>
            <div className={`${styles.levelDesc}`}>
              Тема 1: Посадка и постановка рук
            </div>
          </div>
          <img src="/image/office/right.svg" />
        </div>
        <div className={`${styles.level}`}>
          <div className={`${styles.levelTitle}`}>
            <div className={`${styles.levelDesc}`}>Тема 2: Номера пальцев </div>
          </div>
          <img src="/image/office/right.svg" />
        </div>
        <div className={`${styles.level}`}>
          <div className={`${styles.levelTitle}`}>
            <div className={`${styles.levelDesc}`}>Тема 3: Длительности </div>
          </div>
          <img src="/image/office/right.svg" />
        </div>
        <div className={`${styles.level}`}>
          <div className={`${styles.levelTitle}`}>
            <div className={`${styles.levelDesc}`}>Тема 3: Длительности </div>
          </div>
          <img src="/image/office/right.svg" />
        </div>
      </div>
    </div>
  );
};

export default Teory;
