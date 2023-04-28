import React from "react";
import "./About.scss";
import AboutCarousel from "../../components/AboutCarousel/AboutCarousel";
import Navbar from "../../components/Navbar/Navbar";
import fokus1 from "../../assets/About/tinified/fokus1.png";
import fokus2 from "../../assets/About/tinified/fokus2.png";
import fokus3 from "../../assets/About/tinified/fokus3.png";
import fokus4 from "../../assets/About/tinified/fokus4.png";
import fokus5 from "../../assets/About/tinified/fokus5.png";
import Bluebtn from "../../components/blueBtn/blueBtn";
import { ourTeam } from "./data";"./data";

function About() {
  return (
    <>
      <Navbar />
      <main className="main">
        <button>MEET OUR COMPANY</button>
        <h1>
          We’re a people focused <br /> organisation
        </h1>
        <div className="main__wrap">
          <img src={fokus1} alt="fokus1" />
          <img src={fokus2} alt="fokus2" />
          <img src={fokus3} alt="fokus3" />
          <img src={fokus4} alt="fokus4" />
          <img src={fokus5} alt="fokus5" />
        </div>
        <div className="container">
          <div className="main__content">
            <div className="main__content_item">
              <h2>
                98<span className="pink">% </span>
              </h2>
              <p>Customer satisfaction</p>
            </div>
            <div className="main__content_item">
              <h2>
                120M<span className="yellow">+</span>
              </h2>
              <p>CLIENT RETENTION</p>
            </div>
            <div className="main__content_item">
              <h2>
                32K<span className="blue">+ </span>
              </h2>
              <p>EMAILS PER MONTH</p>
            </div>
            <div className="main__content_item">
              <h2>48M+</h2>
              <p>MONTHLY CAMAIGNS</p>
            </div>
          </div>
        </div>
      </main>
      <AboutCarousel />
      <div className="ourTeam">
        <div className="container">
          <Bluebtn data={"Our Team"} />
          <h1>
            People with all the skills you need <br /> are in Nisa!{" "}
          </h1>
          <div className="ourTeam__grid">
            {ourTeam.map((data, index) => {
              return (
                <div key={index} className="ourTeam__grid_item">
                  <div className="ourTeam__grid_item-img">
                    <img src={data.img} alt="ourTeam" />
                    <button style={{ backgroundColor: data.color }}>{data.btn}</button>
                  </div>
                  <h3>{data.title}</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consec -tetur adipiscing elit.{" "}
                  </p>
                  <div className="ourTeam__grid_item-icons">
                    <i className="uil uil-twitter"></i>
                    <i class="fa-brands fa-facebook"></i>
                    <i className="uil uil-instagram-alt"></i>
                    <i className="uil uil-linkedin"></i>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
