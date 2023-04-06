import React from "react";
import "./AboutCarousel.scss";
import just from "../../assets/About/tinified/qoshtirnoq.svg";
import left from "../../assets/About/tinified/arrow-left.svg";
import right from "../../assets/About/tinified/arrow-right.svg";

function AboutCarousel() {
  const data = [
    {
      img: "../../assets/About/tinified/Profil1.png",
      id: 1,
    },
    {
      img: "../../assets/About/tinified/Profil2.png",
      id: 2,
    },
    {
      img: "../../assets/About/tinified/Profil3.png",
      id: 3,
    },
  ];

  const sliderLeft = ()=>{
    
  }
  const sliderRight = ()=>{

  }
  return (
    <>
      <section className="carusel">
        <div className="container">
          <button>Testimonial </button>
          <h1>What our client says</h1>
          <div className="carusel__wrap">
            {data.map((data, index) => {
              return (
                <div key={index} className="carusel__wrap-content">
                  <div className="carusel__wrap-content_top">
                    <img src={just} alt="" />
                  </div>
                  <h3>{data.id}.TITLE HERE</h3>
                  <p>
                    Lorem ipsum dolor sit amet,
                    <br />
                    consectetur adipiscing elit. Pretium <br />
                    consectetur egestas.
                  </p>
                  <img src={data.img} alt="" />
                  <h4>Alex Mex</h4>
                  <span>CEO/DIRECTOR</span>
                </div>
              );
            })}
          </div>
          <div className="carusel__btn">
            <button onClick={sliderLeft}>
              <img src={left} alt="left" />
            </button>
            <button onClick={sliderRight}>
              <img src={right} alt="right" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutCarousel;
