import React from "react";
import TopBtn from "../../components/TopBtn/TopBtn";
import { roleArray } from "./data";
import "./About.scss";
function About() {
  return (
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
            <h4>
              98%
            </h4>
            <p>CUSTOMER SATISFACTION</p>
          </li>
          <li className="about__list--item">
            <h4>
              120+
            </h4>
            <p>CLIENT RETENTION</p>
          </li>
          <li className="about__list--item">
            <h4>
              32+
            </h4>
            <p>EMAILS PER MONTH</p>
          </li>
          <li className="about__list--item">
            <h4>
              48+
            </h4>
            <p>MONTHLY CAMAIGNS</p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default About;
