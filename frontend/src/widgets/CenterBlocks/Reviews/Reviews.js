import styles from "./Reviews.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Rating } from "primereact/rating";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "swiper/css";
import "swiper/css/navigation";

const ReviewsSwiper = [
  {
    name: "Сергей",
    text: "Онлайн-музыка по этой методике - 5/5! Дочка в восторге, индивидуальный подход и прогресс налицо. Рекомендую!",
  },
  {
    name: "Анна",
    text: "Сначала сомневалась в онлайн-обучении, но авторская методика этой школы просто огонь! Занимаюсь всего месяц, а уже играю свою любимую мелодию! 🔥",
  },
  {
    name: "Елизавета",
    text: "Удобный формат, гибкий график, а главное - супер понятные уроки! Спасибо, что вдохновляете на занятия музыкой! 💖",
  },
  {
    name: "Александра",
    text: "Искала школу, где действительно научат, а не просто 'отбудут' занятия. Эта школа - то, что нужно! Авторская методика работает на все 100%!",
  },
  {
    name: "Иван",
    text: "Авторская методика - это правда что-то новое! Все объясняют очень доступно и интересно. Чувствую, как быстро расту в музыкальном плане!",
  },
  {
    name: "Виктория",
    text: "Никогда не думала, что учиться музыке онлайн может быть так эффективно! Педагоги - профессионалы, всегда готовы помочь и поддержать.",
  },
];

const Reviews = () => {
  return (
    <div>
      <div id="reviews" className={`${styles.reviews}`}>
        <div className={`${styles.reviewsBlock}`}>
          <Swiper
            modules={[Navigation]}
            navigation={true}
            className={`${styles.reviewsSwiper}`}
            slidesPerGroup={1}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 3,
              },
            }}
          >
            {ReviewsSwiper.map((review, index) => (
              <SwiperSlide key={index}>
                <div className={`${styles.сards}`}>
                  <div className={`${styles.cardsAvatar}`}>
                    <img
                      src="image/reviews/reviews.jpg"
                      className={`${styles.avatar}`}
                      alt="Avatar"
                    />
                  </div>
                  <div className={`${styles.cardsDescription}`}>
                    <Rating value={5} readOnly cancel={false} />
                    <div className={`${styles.cardName}`}>{review.name}</div>
                    <div className={`${styles.cardsText}`}>{review.text}</div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className={`${styles.downBlock}`}></div>
    </div>
  );
};

export default Reviews;
