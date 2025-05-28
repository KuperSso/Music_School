import styles from "./css/Phono.module.css";
import { Link } from "react-router-dom";

const Phono = () => {
  return (
    <div className={`${styles.phono}`}>
      <div className={`${styles.title}`}>Фортепиано</div>
      <div className={`${styles.levels}`}>
        <Link to="/office/phono/level" className={`${styles.level}`}>
          <div className={`${styles.levelTitle}`}>
            <img src="/image/office/1.svg" className={`${styles.logoLinks}`} />
            <div className={`${styles.levelDesc}`}>Начальный уровень </div>
          </div>
          <img src="/image/office/right.svg" />
        </Link>
        <div className={`${styles.level}`}>
          <div className={`${styles.levelTitle}`}>
            <img src="/image/office/2.svg" className={`${styles.logoLinks}`} />
            <div className={`${styles.levelDesc}`}>Начальный уровень </div>
          </div>
          <img src="/image/office/right.svg" />
        </div>
        <div className={`${styles.level}`}>
          <div className={`${styles.levelTitle}`}>
            <img src="/image/office/3.svg" className={`${styles.logoLinks}`} />
            <div className={`${styles.levelDesc}`}>Начальный уровень </div>
          </div>
          <img src="/image/office/right.svg" />
        </div>
        <div className={`${styles.level}`}>
          <div className={`${styles.levelTitle}`}>
            <img src="/image/office/4.svg" className={`${styles.logoLinks}`} />
            <div className={`${styles.levelDesc}`}>Начальный уровень </div>
          </div>
          <img src="/image/office/right.svg" />
        </div>
        <div className={`${styles.level}`}>
          <div className={`${styles.levelTitle}`}>
            <img src="/image/office/5.svg" className={`${styles.logoLinks}`} />
            <div className={`${styles.levelDesc}`}>Начальный уровень </div>
          </div>
          <img src="/image/office/right.svg" />
        </div>
      </div>
    </div>
  );
};

export default Phono;
