import React from "react";
import "./AboutCarousel.scss";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import quote from "../../assets/About/quote.svg";
import { userArray } from "./data";
function AboutCarousel() {
  return (
    <div className="about-carousel">
      <div className="container">
        <Swiper
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            615: {
              slidesPerView: 2,
            },
            834: {
              slidesPerView: 3,
            },
          }}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={30}
          slidesPerView={3}
          loop={true}
          navigation
        >
          {userArray.map((user) => (
            <SwiperSlide key={user.id}>
              <div className="about-carousel-item">
                <img src={quote} alt="quote" className="quote" />
                <h5>{user.id}.Title here</h5>
                <p className="text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pretium consectetur egestas.
                </p>
                <img src={user.src} alt={user.name} />
                <h6>{user.name}</h6>
                <div>{user.job}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default AboutCarousel;
