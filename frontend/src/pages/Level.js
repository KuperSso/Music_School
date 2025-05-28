import styles from "./css/Level.module.css";
import { Link } from "react-router-dom";

const Level = () => {
  return (
    <div className={`${styles.level}`}>
      <div className={`${styles.title}`}>Начальный уровень</div>
      <div className={`${styles.desc}`}>
        <Link to="/office/phono/level/teory" className={`${styles.card}`}>
          <img src="/image/office/levels/teory.svg" />
          <div className={`${styles.imgfone}`}>
            <img
              src="/image/office/levels/next.svg"
              className={`${styles.imgnext}`}
            />
            <img src="/image/office/line.svg" />
          </div>
          <div className={`${styles.text}`}>
            <div className={`${styles.topic}`}>Тема 4. Нотная грамота</div>
            <div className={`${styles.topicDesc}`}>Нотный стан</div>
          </div>
        </Link>
        <div className={`${styles.card}`}>
          <img src="/image/office/levels/praktik.svg" />
          <div className={`${styles.imgfone}`}>
            <img
              src="/image/office/levels/going.svg"
              className={`${styles.imgnext}`}
            />
            <img src="/image/office/levels/line.svg" />
          </div>
          <div className={`${styles.text}`}>
            <div className={`${styles.topic}`}></div>
            <div className={`${styles.topicDesc}`}></div>
          </div>
        </div>
        <div className={`${styles.card}`}>
          <img src="/image/office/levels/melody.svg" />
          <div className={`${styles.imgfone}`}>
            <img
              src="/image/office/levels/going.svg"
              className={`${styles.imgnext}`}
            />
            <img src="/image/office/levels/line.svg" />
          </div>
          <div className={`${styles.text}`}>
            <div className={`${styles.topic}`}></div>
            <div className={`${styles.topicDesc}`}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Level;
