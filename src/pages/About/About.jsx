import React from "react";
import TopBtn from "../../components/TopBtn/TopBtn";
import { roleArray, skillsArray } from "./data";
import "./About.scss";
import AboutCarousel from "../../components/AboutCarousel/AboutCarousel";
import RoleCard from "../../components/RoleCard/RoleCard";
import {ArticleSection} from "../../components/index";
function About() {
  return (
    <>
      <section className="about">
        <TopBtn style={"yellow"} text={"MEET OUR COMPANY"} />
        <div className="about__title">We’re a people focused organisation</div>
        <ul className="about__roles">
          {roleArray.map((role) => (
            <li key={role.id} className="about__roles--item">
              <img src={role.img} alt={role.img} />
            </li>
          ))}
        </ul>
        <div className="container">
          <ul className="about__list">
            <li className="about__list--item">
              <h4>98%</h4>
              <p>CUSTOMER SATISFACTION</p>
            </li>
            <li className="about__list--item">
              <h4>120+</h4>
              <p>CLIENT RETENTION</p>
            </li>
            <li className="about__list--item">
              <h4>32+</h4>
              <p>EMAILS PER MONTH</p>
            </li>
            <li className="about__list--item">
              <h4>48+</h4>
              <p>MONTHLY CAMAIGNS</p>
            </li>
          </ul>
        </div>
      </section>
      <section className="clients">
        <TopBtn style={"gray"} text={"TESTIMONIAL"} />
        <div className="clients__title">What our client says</div>
        <AboutCarousel />
      </section>
      <section className="skills">
        <div className="container">
          <TopBtn style={"blue"} text={"Our team"} />
          <div className="skills__title">
            People with all the skills you need are in Nisa!
          </div>
          <div className="skills__wrapper">
            {skillsArray.map((skills) => (
              <RoleCard key={skills.id} {...skills} />
            ))}
          </div>
        </div>
      </section>
      <section className="article">
        <ArticleSection />
      </section>
    </>
  );
}

export default About;
