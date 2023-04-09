import React from "react";
import "./About.scss";
import AboutCarousel from "../../components/aboutCarousel/aboutCarousel";
import Navbar from "../../components/Navbar/Navbar";

function About() {
  return (
    <>
      <Navbar/>
      <AboutCarousel />
      <h1>about</h1>
    </>
  );
}

export default About;
