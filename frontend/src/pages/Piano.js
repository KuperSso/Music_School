import styles from "./css/Piano.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Button } from "primereact/button";
import { ArrowIcon } from "./Arrow";

const PianoTeacher = [
  {
    name: "Небуришвили Анна",
    gender: "female",
    direction: "Вокал, фортепиано, барабаны",
    univer: "Московская государственная консерватория имени П. И. Чайковского",
    nav: "Эстрадная вокалистка, музыкальный продюсер",
    text: "Выступает под псевдонимом “ANNA MARIA” с авторскими песнями, участник группы “Flear”",
  },
  {
    name: "Бардуева Даяна",
    gender: "female",
    direction: "Вокал, фортепиано",
    univer: "Российская академия музыки имени Гнесиных",
    nav: "Солистка оперы, арт-менеджер",
    text: "Регулярные выступления в ведущих театрах России, гастроли по всему миру",
  },
  {
    name: "Козлов Егор",
    gender: "male",
    direction: "Вокал, фортепиано, барабаны",
    univer: "Ростовская государственная консерватория имени С. В. Рахманинова",
    nav: "Соло-инструменталист, композитор",
    text: "Выступает под псевдонимом “Козлов Егор” с авторскими сочинениями, участник группы “Flear”",
  },
  {
    name: "Сергеев Алексей",
    gender: "male",
    direction: "Вокал, фортепиано, барабаны",
    univer: "Московская государственная консерватория имени П. И. Чайковского",
    nav: "Народный вокалист, звукорежиссер",
    text: "Выступает с авторским проектом “ALEX & BAND“ и участвует в фестивалях, таких как “Солнечный звук“",
  },
  {
    name: "Петрова Марина",
    gender: "female",
    direction: "Вокал, фортепиано",
    univer:
      "Петербургская государственная консерватория имени Н. А. Римского-Корсакова",
    nav: "Соло певица, хоровой дерижер",
    text: "Лауреат международного конкурса “Звезды классической музыки“ и участник гастрольного тура с молодежным хором",
  },
  {
    name: "Кузнецов Дмитрий",
    gender: "male",
    direction: "Вокал, фортепиано, барабаны",
    univer: "Государственный музыкальный колледж имени Гнесиных",
    nav: "Импровизатор, аранжировщик",
    text: "Выступал на международных джазовых фестивалях и сотрудничал с известными музыкантами в жанре фьюжн",
  },
];

const Piano = () => {
  return (
    <div className={`${styles.piano}`}>
      <div className={`${styles.pianoBlock}`}>
        <div className={`${styles.pianoImage}`}>
          <img src="image/piano/piano.png" className={`${styles.logoLinks}`} />
        </div>
        <div className={`${styles.pianoText}`}>
          <div className={`${styles.pianoTitle}`}>ФОРТЕПИАНО</div>
          <div className={`${styles.pianoDesc}`}>
            Обучение игре на фортепиано – это не только освоение музыкального
            инструмента, но и мощный стимул для развития когнитивных
            способностей ребенка. Занятия развивают мелкую моторику, координацию
            движений, внимание, память, логическое мышление и пространственное
            воображение. Наша программа включает изучение нотной грамоты,
            развитие техники игры, знакомство с произведениями различных эпох и
            стилей, а также развитие навыков импровизации и аккомпанемента.
          </div>
        </div>
      </div>
      <div className={`${styles.levelsBlock}`}>
        <div className={`${styles.levelsText}`}>
          <div className={`${styles.levelsTitle}`}>Уровни обучения</div>
          <div className={`${styles.levelsDesc}`}>
            Моя авторская методика обучения музыке построена на четкой системе
            уровней, которая обеспечивает максимально эффективное и комфортное
            развитие каждого ученика. Вместо безликого общего подхода, мы
            предлагаем индивидуальный маршрут к музыкальным вершинам.
          </div>
        </div>
        <div className={`${styles.levels}`}>
          <div className={`${styles.level}`}>
            <div className={`${styles.step}`}>
              <img src="image/piano/1.svg" className={`${styles.levelImg}`} />
              <div className={`${styles.stepLevel}`}>Уровень</div>
            </div>
            <div className={`${styles.levelDesc}`}>
              Основы - правильная посадка и постановка руки, пальцевая
              гимнастика, нумерация пальцев, знакомство с нотами. Играем простые
              мелодии правой рукой в диапазоне от “До” до “Соль”.
            </div>
          </div>
          <div className={`${styles.level}`}>
            <div className={`${styles.step}`}>
              <img src="image/piano/2.svg" className={`${styles.levelImg}`} />
              <div className={`${styles.stepLevel}`}>Уровень</div>
            </div>
            <div className={`${styles.levelDesc}`}>
              Расширение навыков - гаммы, ноты басового ключа, развитие нотной
              грамоты, постановка левой руки. Играем этюды и песни обеими руками
              в первой и малой октавах.
            </div>
          </div>
          <div className={`${styles.level}`}>
            <div className={`${styles.step}`}>
              <img src="image/piano/3.svg" className={`${styles.levelImg}`} />
              <div className={`${styles.stepLevel}`}>Уровень</div>
            </div>
            <div className={`${styles.levelDesc}`}>
              Углубление знаний - продвинутая нотная грамота, освоение нот в
              разных октавах, знаки альтерации. Развиваем технику: подкладывание
              пальцев, игра на чёрных клавишах. Изучаем аккорды и играем песни
              обеими руками, где левая рука ведет гармонию, а правая - мелодию.
            </div>
          </div>
          <div className={`${styles.level}`}>
            <div className={`${styles.step}`}>
              <img src="image/piano/4.svg" className={`${styles.levelImg}`} />
              <div className={`${styles.stepLevel}`}>Уровень</div>
            </div>
            <div className={`${styles.levelDesc}`}>
              Совершенствование техники - хроматические гаммы, размеры 3/4 и
              6/8, использование педали. Изучаем обращения аккордов и технику
              легато, осваиваем аккомпанемент, исполняем песни повышенной
              сложности.
            </div>
          </div>
          <div className={`${styles.level}`}>
            <div className={`${styles.step}`}>
              <img src="image/piano/5.svg" className={`${styles.levelImg}`} />
              <div className={`${styles.stepLevel}`}>Уровень</div>
            </div>
            <div className={`${styles.levelDesc}`}>
              Мастерство - оттачиваем стаккато, изучаем музыкальные "фишки",
              динамику (форте и пиано), пентатонику, знакомимся с музыкальными
              жанрами (джаз, блюз, регги), ладами. Свободно исполняем
              произведения с листа.
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.teacherBlock}`}>
        <div className={styles.swiperWrapper}>
          <div className={`${styles.customPrev} customPrev`}></div>
          <div className={`${styles.customNext} customNext`}></div>

          <Swiper
            modules={[Navigation]}
            navigation={{ prevEl: ".customPrev", nextEl: ".customNext" }}
            className={`${styles.pianoSwiper}`}
            slidesPerGroup={1}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 3,
              },
            }}
          >
            {PianoTeacher.map((review, index) => (
              <SwiperSlide key={index}>
                <div className={`${styles.сards}`}>
                  <div
                    className={`${styles.cardName} ${
                      review.gender === "male"
                        ? styles.maleName
                        : styles.femaleName
                    }`}
                  >
                    {review.name}
                  </div>
                  <div className={`${styles.cardsAvatar}`}>
                    <img
                      src="image/piano/avatar.svg"
                      className={`${styles.avatar}`}
                      alt="Avatar"
                    />
                  </div>
                  <div className={`${styles.cardsDescription}`}>
                    <div className={`${styles.cardsText}`}>
                      <div className={`${styles.titleCard}`}>НАПРАВЛЕНИЕ</div>
                      <div className={`${styles.cardLinks}`}>
                        {review.direction}
                      </div>
                    </div>
                    <div className={`${styles.cardsText}`}>
                      <div className={`${styles.titleCard}`}>ОБРАЗОВАНИЕ</div>
                      <div className={`${styles.cardLinks}`}>
                        {review.univer}
                      </div>
                    </div>
                    <div className={`${styles.cardsText}`}>
                      <div className={`${styles.titleCard}`}>ОСОБЫЕ НАВЫКИ</div>
                      <div className={`${styles.cardLinks}`}>{review.nav}</div>
                    </div>
                    <div className={`${styles.cardsText}`}>
                      <div className={`${styles.titleCard}`}>ДОСТИЖЕНИЯ</div>
                      <div className={`${styles.cardLinks}`}>{review.text}</div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <style>
            {`
      .swiper-button-prev::after,
      .swiper-button-next::after {
        display: none !important;
      }
    `}
          </style>
        </div>
      </div>
      <div className={`${styles.kursBlock}`}>
        <div className={`${styles.cardsKurs}`}>
          <div className={`${styles.cardOne}`}>
            <div className={`${styles.cardUp}`}>
              <div className={`${styles.titleKurs}`}>Пробный</div>
              <img
                src="image/piano/0.svg"
                className={`${styles.pricesZiro}`}
                alt="price"
              />
              <img
                src="image/piano/line.svg"
                className={`${styles.line}`}
                alt="line"
              />
              <div className={`${styles.descKurs}`}>
                Откройте для себя основы нашей авторской методики. Почувствуйте
                вдохновение и сделайте первые шаги к музыкальной мечте!
              </div>
            </div>
            <div className={`${styles.cardCenter}`}>
              <div className={`${styles.cardCenterTitle}`}>
                Что входит в тариф
              </div>
              <div className={`${styles.cardCenterDesc}`}>
                <div className={`${styles.cardCenterTitle}`}>
                  <img
                    src="image/piano/arrow.svg"
                    className={`${styles.line}`}
                    alt="arrow"
                  />
                  <div className={`${styles.cardCenterArrow}`}>
                    Оценка уровня тестом
                  </div>
                </div>
                <div className={`${styles.cardCenterTitle}`}>
                  <img
                    src="image/piano/arrow.svg"
                    className={`${styles.line}`}
                    alt="arrow"
                  />
                  <div className={`${styles.cardCenterArrow}`}>
                    Ограниченный доступ к материалам 1 уровня
                  </div>
                </div>
                <div className={`${styles.cardCenterTitle}`}>
                  <img
                    src="image/piano/arrow.svg"
                    className={`${styles.line}`}
                    alt="arrow"
                  />
                  <div className={`${styles.cardCenterArrow}`}>
                    1 сессия с педагогом
                  </div>
                </div>
                <div className={`${styles.cardCenterTitle}`}>
                  <img
                    src="image/piano/arrow.svg"
                    className={`${styles.line}`}
                    alt="arrow"
                  />
                  <div className={`${styles.cardCenterArrow}`}>
                    Бесплатный доступ на 14 дней
                  </div>
                </div>
              </div>
            </div>
            <div className={`${styles.cardDown}`}>
              <Button className={`${styles.linksButtonGo}`} label="Начать">
                <ArrowIcon />
              </Button>
            </div>
          </div>
          <div className={`${styles.cardTwo}`}>
            <div className={`${styles.cardUp}`}>
              <div className={`${styles.titleKurs}`}>Мини</div>
              <img
                src="image/piano/24999.svg"
                className={`${styles.prices}`}
                alt="price"
              />
              <img
                src="image/piano/line.svg"
                className={`${styles.line}`}
                alt="line"
              />
              <div className={`${styles.descKurs}`}>
                Расширенный курс по авторской методике. Раскройте свой
                музыкальный потенциал и начните создавать музыку уже сегодня!
              </div>
            </div>
            <div className={`${styles.cardCenter}`}>
              <div className={`${styles.cardCenterTitle}`}>
                Что входит в тариф
              </div>
              <div className={`${styles.cardCenterDesc}`}>
                <div className={`${styles.cardCenterTitle}`}>
                  <img
                    src="image/piano/arrow.svg"
                    className={`${styles.line}`}
                    alt="arrow"
                  />
                  <div className={`${styles.cardCenterArrow}`}>
                    Оценка уровня тестом + индивидуальный подбор курса
                  </div>
                </div>
                <div className={`${styles.cardCenterTitle}`}>
                  <img
                    src="image/piano/arrow.svg"
                    className={`${styles.line}`}
                    alt="arrow"
                  />
                  <div className={`${styles.cardCenterArrow}`}>
                    Полный доступ к материалам
                  </div>
                </div>
                <div className={`${styles.cardCenterTitle}`}>
                  <img
                    src="image/piano/arrow.svg"
                    className={`${styles.line}`}
                    alt="arrow"
                  />
                  <div className={`${styles.cardCenterArrow}`}>
                    Нет ограничений по уровням
                  </div>
                </div>
                <div className={`${styles.cardCenterTitle}`}>
                  <img
                    src="image/piano/arrow.svg"
                    className={`${styles.line}`}
                    alt="arrow"
                  />
                  <div className={`${styles.cardCenterArrow}`}>
                    Регулярные сессии с педагогом
                  </div>
                </div>
              </div>
            </div>
            <div className={`${styles.cardDown}`}>
              <Button className={`${styles.linksButtonGo}`} label="Начать">
                <ArrowIcon />
              </Button>
            </div>
          </div>
          <div className={`${styles.cardThree}`}>
            <div className={`${styles.cardUp}`}>
              <div className={`${styles.titleKurs}`}>Старт</div>
              <img
                src="image/piano/44999.svg"
                className={`${styles.prices}`}
                alt="price"
              />
              <img
                src="image/piano/line.svg"
                className={`${styles.line}`}
                alt="line"
              />
              <div className={`${styles.descKurs}`}>
                Полный курс по авторской методике. Станьте профессиональным
                музыкантом под руководством опытных преподавателей!
              </div>
            </div>
            <div className={`${styles.cardCenter}`}>
              <div className={`${styles.cardCenterTitle}`}>
                Что входит в тариф
              </div>
              <div className={`${styles.cardCenterDesc}`}>
                <div className={`${styles.cardCenterTitle}`}>
                  <img
                    src="image/piano/arrow.svg"
                    className={`${styles.line}`}
                    alt="arrow"
                  />
                  <div className={`${styles.cardCenterArrow}`}>
                    Тестирование уровня с нэйро
                  </div>
                </div>
                <div className={`${styles.cardCenterTitle}`}>
                  <img
                    src="image/piano/arrow.svg"
                    className={`${styles.line}`}
                    alt="arrow"
                  />
                  <div className={`${styles.cardCenterArrow}`}>
                    Полный доступ к материалам
                  </div>
                </div>
                <div className={`${styles.cardCenterTitle}`}>
                  <img
                    src="image/piano/arrow.svg"
                    className={`${styles.line}`}
                    alt="arrow"
                  />
                  <div className={`${styles.cardCenterArrow}`}>
                    Назначение доп. сессий с педагогом
                  </div>
                </div>
                <div className={`${styles.cardCenterTitle}`}>
                  <img
                    src="image/piano/arrow.svg"
                    className={`${styles.line}`}
                    alt="arrow"
                  />
                  <div className={`${styles.cardCenterArrow}`}>
                    Возможность изучения нескольких направлений
                  </div>
                </div>
              </div>
            </div>
            <div className={`${styles.cardDown}`}>
              <Button className={`${styles.linksButtonGo}`} label="Начать">
                <ArrowIcon />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.video}`}>
        <video
          controls
          poster="/image/piano/back.png"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        >
          <source src="/image/piano/piano.mp4" type="video/mp4" />
          Ваш браузер не поддерживает воспроизведение видео.
        </video>
      </div>
    </div>
  );
};

export default Piano;
