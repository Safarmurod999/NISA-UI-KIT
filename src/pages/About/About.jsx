import React from "react";
import "./About.scss";
import AboutCarousel from "../../components/AboutCarousel/AboutCarousel";
import Navbar from "../../components/Navbar/Navbar";
import fokus1 from "../../assets/About/tinified/fokus1.png";
import fokus2 from "../../assets/About/tinified/fokus2.png";
import fokus3 from "../../assets/About/tinified/fokus3.png";
import fokus4 from "../../assets/About/tinified/fokus4.png";
import fokus5 from "../../assets/About/tinified/fokus5.png";
import ourTeam1 from "../../assets/About/tinified/ourTeam1.png";
import ourTeam2 from "../../assets/About/tinified/ourTeam2.png";
import ourTeam3 from "../../assets/About/tinified/ourTeam3.png";
import ourTeam4 from "../../assets/About/tinified/ourTeam4.png";
import ourTeam5 from "../../assets/About/tinified/ourTeam5.png";
import ourTeam6 from "../../assets/About/tinified/ourTeam6.png";

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
          <button>Our team</button>
          <h1>
            People with all the skills you need <br /> are in Nisa!{" "}
          </h1>
          <div className="ourTeam__grid">
            <div className="ourTeam__grid_item">
              <div className="ourTeam__grid_item-img1">
                <img src={ourTeam1} alt="ourTeam1" />
                <button>CEO & FOUNDER</button>
              </div>
              <h3>Katie Smith</h3>
              <p>Lorem ipsum dolor sit amet, consec -tetur adipiscing elit. </p>
              <div className="ourTeam__grid_item-icons">
                <i className="uil uil-twitter"></i>
            
                <i className="uil uil-instagram-alt"></i>
                <i className="uil uil-linkedin"></i>
              </div>
            </div>
            <div className="ourTeam__grid_item">
              <div className="ourTeam__grid_item-img1">
                <img src={ourTeam2} alt="ourTeam2" />
                <button>CEO & FOUNDER</button>
              </div>
              <h3>Borkat Ali</h3>
              <p>Lorem ipsum dolor sit amet, consec -tetur adipiscing elit. </p>
              <div className="ourTeam__grid_item-icons">
                <i className="uil uil-twitter"></i>
            
                <i className="uil uil-instagram-alt"></i>
                <i className="uil uil-linkedin"></i>
              </div>
            </div>
            <div className="ourTeam__grid_item">
              <div className="ourTeam__grid_item-img1">
                <img src={ourTeam3} alt="ourTeam3" />
                <button>CTO & Co- Founder</button>
              </div>
              <h3>Alex Mex</h3>
              <p>Lorem ipsum dolor sit amet, consec -tetur adipiscing elit. </p>
              <div className="ourTeam__grid_item-icons">
                <i className="uil uil-twitter"></i>
            
                <i className="uil uil-instagram-alt"></i>
                <i className="uil uil-linkedin"></i>
              </div>
            </div>
            <div className="ourTeam__grid_item">
              <div className="ourTeam__grid_item-img1">
                <img src={ourTeam4} alt="ourTeam4" />
                <button>VP of Marketing</button>
              </div>
              <h3>Tahn Lane</h3>
              <p>Lorem ipsum dolor sit amet, consec -tetur adipiscing elit. </p>
              <div className="ourTeam__grid_item-icons">
                <i className="uil uil-twitter"></i>
            
                <i className="uil uil-instagram-alt"></i>
                <i className="uil uil-linkedin"></i>
              </div>
            </div>
            <div className="ourTeam__grid_item">
              <div className="ourTeam__grid_item-img1">
                <img src={ourTeam5} alt="ourTeam5" />
                <button>VP of product</button>
              </div>
              <h3>Maruf Mia</h3>
              <p>Lorem ipsum dolor sit amet, consec -tetur adipiscing elit. </p>
              <div className="ourTeam__grid_item-icons">
                <i className="uil uil-twitter"></i>
            
                <i className="uil uil-instagram-alt"></i>
                <i className="uil uil-linkedin"></i>
              </div>
            </div>
            <div className="ourTeam__grid_item">
              <div className="ourTeam__grid_item-img1">
                <img src={ourTeam6} alt="ourTeam6" />
                <button>VP of Security</button>
              </div>
              <h3>Niloy Mex</h3>
              <p>Lorem ipsum dolor sit amet, consec -tetur adipiscing elit. </p>
              <div className="ourTeam__grid_item-icons">
                <i className="uil uil-twitter"></i>
            
                <i className="uil uil-instagram-alt"></i>
                <i className="uil uil-linkedin"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
