import React from "react";
import "./About.scss";
import AboutCarousel from "../../components/AboutCarousel/AboutCarousel";
import Navbar from "../../components/Navbar/Navbar";
import data from "./data";
import AboutComponent from "./AboutComponent";
function About() {
  return (
    <>
      <Navbar/>
      <AboutCarousel />
      <h1>about</h1>
      <div>
        {
          data.map((el)=>{
            return <AboutComponent key={el.id} {...el} />
          })
        }
      </div>
    </>
  );
}

export default About;
