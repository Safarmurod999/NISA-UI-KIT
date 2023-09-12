import React from "react";
import "./CustomersCarousel.scss";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import star from "../../assets/Home/Star.svg";
import profile from "../../assets/Home/Profil.svg";
function CustomersCarousel() {
  return (
    <section className="customers-carousel">
      <div className="container">
        <Swiper
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            // when window width is >= 576px
            450: {
              slidesPerView: 2,
            },
            // when window width is >= 768px
            834: {
              spaceBetween: 24,
              slidesPerView: 3,
            },
          }}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={40}
          slidesPerView={3}
          loop={true}
          navigation
        >
          <SwiperSlide>
            <div className="customers-carousel-card">
              <div className="customers-carousel-card__top">
                <img src={profile} alt="profile" />
                <h6>
                  Albert Flores <br /> <span>Graphic Designer</span>
                </h6>
              </div>
              <div className="customers-carousel-card__content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  luctus venenatis mi aliquet cras interdum. Lectus cons ectetur
                  fermentum lorem aliquam.
                </p>
              </div>
              <img
                className="customers-carousel-card__img"
                src={star}
                alt="star"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="customers-carousel-card">
              <div className="customers-carousel-card__top">
                <img src={profile} alt="profile" />
                <h6>
                  Albert Flores <br /> <span>Graphic Designer</span>
                </h6>
              </div>
              <div className="customers-carousel-card__content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  luctus venenatis mi aliquet cras interdum. Lectus cons ectetur
                  fermentum lorem aliquam.
                </p>
              </div>
              <img
                className="customers-carousel-card__img"
                src={star}
                alt="star"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="customers-carousel-card">
              <div className="customers-carousel-card__top">
                <img src={profile} alt="profile" />
                <h6>
                  Albert Flores <br /> <span>Graphic Designer</span>
                </h6>
              </div>
              <div className="customers-carousel-card__content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  luctus venenatis mi aliquet cras interdum. Lectus cons ectetur
                  fermentum lorem aliquam.
                </p>
              </div>
              <img
                className="customers-carousel-card__img"
                src={star}
                alt="star"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="customers-carousel-card">
              <div className="customers-carousel-card__top">
                <img src={profile} alt="profile" />
                <h6>
                  Albert Flores <br /> <span>Graphic Designer</span>
                </h6>
              </div>
              <div className="customers-carousel-card__content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  luctus venenatis mi aliquet cras interdum. Lectus cons ectetur
                  fermentum lorem aliquam.
                </p>
              </div>
              <img
                className="customers-carousel-card__img"
                src={star}
                alt="star"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="customers-carousel-card">
              <div className="customers-carousel-card__top">
                <img src={profile} alt="profile" />
                <h6>
                  Albert Flores <br /> <span>Graphic Designer</span>
                </h6>
              </div>
              <div className="customers-carousel-card__content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  luctus venenatis mi aliquet cras interdum. Lectus cons ectetur
                  fermentum lorem aliquam.
                </p>
              </div>
              <img
                className="customers-carousel-card__img"
                src={star}
                alt="star"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="customers-carousel-card">
              <div className="customers-carousel-card__top">
                <img src={profile} alt="profile" />
                <h6>
                  Albert Flores <br /> <span>Graphic Designer</span>
                </h6>
              </div>
              <div className="customers-carousel-card__content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  luctus venenatis mi aliquet cras interdum. Lectus cons ectetur
                  fermentum lorem aliquam.
                </p>
              </div>
              <img
                className="customers-carousel-card__img"
                src={star}
                alt="star"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
export default CustomersCarousel;
