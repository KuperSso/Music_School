import React, { useState, useRef } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { InputMask } from "primereact/inputmask";
import { InputText } from "primereact/inputtext";
import styles from "./Banner.module.css";

const Banner = () => {
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [visible, setVisible] = useState(false);
  return (
    <header className={`${styles.header}`}>
      <div className={`${styles.banner}`}>
        <div className={`${styles.text}`}>
          <div className={`${styles.title}`}>
            <span className={`${styles.titleText}`}>
              Раскрой свой музыкальный талант
            </span>
            <br />
            инновационная методика и индивидуальный подход!
          </div>
          <div className={`${styles.discription}`}>
            Устали от скучных уроков музыки? Наша авторская методика предлагает
            уникальный гуманный подход к обучению вокалу и игре на инструментах.
            Мы ставим во главу угла вашу личность, ваш темп обучения и ваши
            мечты. Забудьте о строгих правилах – мы поощряем творчество,
            импровизацию и самовыражение. Присоединяйтесь к нашему сообществу и
            откройте для себя мир музыки по-новому!
          </div>
          <Button
            className={`${styles.button}`}
            onClick={() => setVisible(true)}
            label="Узнать больше"
          />
          <Dialog
            className={`${styles.feedback}`}
            header="Оставьте свои контактные данные, чтобы наш менеджер мог Вас подробнее проконсультировать!"
            visible={visible}
            style={{ maxWidth: "700px" }}
            onHide={() => {
              if (!visible) return;
              setVisible(false);
            }}
          >
            <div className={`${styles.freeConsultationFormText}`}>
              <div className={`${styles.name}`}>
                <label htmlFor="name" className="font-bold block mb-2">
                  Имя
                </label>
                <InputText
                  className={`${styles.customInput}`}
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Иван"
                />
              </div>
              <div className={`${styles.phone}`}>
                <label htmlFor="phone" className="font-bold block mb-2">
                  Номер телефона
                </label>

                <InputMask
                  className={`${styles.customInput}`}
                  id="phone"
                  mask="+7 (999) 999-99-99"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+7 (999) 000-00-00"
                  autoClear={false}
                  alwaysShowMask={true}
                ></InputMask>
              </div>
              <Button
                className={`${styles.buttonPut}`}
                onClick={() => setVisible(true)}
                label="Отправить"
              />
            </div>
          </Dialog>
        </div>
        <div className={`${styles.image}`}>
          <img
            className={`${styles.imageBanner}`}
            src="image/banner/banner.png"
            alt="Барабан"
          ></img>
        </div>
      </div>
    </header>
  );
};

export default Banner;
