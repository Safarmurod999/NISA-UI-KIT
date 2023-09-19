import React from "react";
import "./Pricing.scss";
import { Accordion, BlueBtn, ContactUs, CustomersCarousel, PinkBtn, TopBtn } from "../../components/index.js";
import pattern from "../../assets/Pricing/pattern-1.svg";

function Pricing() {
  return (
    <>
      <section className="pricing">
        <div className="container">
          <TopBtn text={"MEET OUR COMPANY"} style={"yellow"} />
          <div className="pricing__title title">
            Pricing built to suits teams of all sizes
          </div>
          <p className="pricing__text text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium
            consectetur egestas mauris adipiscing dui.
          </p>

          <div className="pricing__buttons">
            <PinkBtn data={"Monthly Plan"} />
            <BlueBtn data={"Annual Plan"} />
          </div>
        </div>
      </section>
      <section className="subscriptions">
        <div className="container">
          <ul className="subscriptions__list">
            <li className="subscriptions__list--item">
              <img src={pattern} alt="image" />
              <h4 className="title">$39 <span className="text">/ Month</span></h4>
              <p className="text">Add Soem details here to describe the type of plan and its particular benefits</p>
              <ul>
                <li><i className="fa-solid fa-circle-check"></i> <p>All limited links</p></li>
                <li><i className="fa-solid fa-circle-check"></i> <p>Own analytics Platform</p></li>
                <li><i className="fa-solid fa-circle-check"></i> <p>Unlimited users</p></li>
                <li><i className="fa-solid fa-circle-check"></i> <p>Chat support</p></li>
                <li><i className="fa-solid fa-circle-check"></i> <p>Optimize hashtags </p></li>
              </ul>
              <BlueBtn data={'Get Started'} />
            </li>
            <li className="subscriptions__list--item">
              <img src={pattern} alt="image" />
              <h4 className="title">$49 <span className="text">/ Month</span></h4>
              <p className="text">Add Soem details here to describe the type of plan and its particular benefits</p>
              <ul>
                <li><i className="fa-solid fa-circle-check"></i> <p>All limited links</p></li>
                <li><i className="fa-solid fa-circle-check"></i> <p>Own analytics Platform</p></li>
                <li><i className="fa-solid fa-circle-check"></i> <p>Unlimited users</p></li>
                <li><i className="fa-solid fa-circle-check"></i> <p>Chat support</p></li>
                <li><i className="fa-solid fa-circle-check"></i> <p>Optimize hashtags</p></li>
              </ul>
              <BlueBtn data={'Get Started'} />
            </li>
            <li className="subscriptions__list--item">
              <img src={pattern} alt="image" />
              <h4 className="title">$99 <span className="text">/ Month</span></h4>
              <p className="text">Add Soem details here to describe the type of plan and its particular benefits</p>
              <ul>
                <li><i className="fa-solid fa-circle-check"></i> <p>All limited links</p></li>
                <li><i className="fa-solid fa-circle-check"></i> <p>Own analytics Platform</p></li>
                <li><i className="fa-solid fa-circle-check"></i> <p>Unlimited users</p></li>
                <li><i className="fa-solid fa-circle-check"></i> <p>Chat support</p></li>
                <li><i className="fa-solid fa-circle-check"></i> <p>Optimize hashtags</p></li>
              </ul>
              <BlueBtn data={'Get Started'} />
            </li>
          </ul>
        </div>
      </section>
      <section className="customers">
        <div className="title customers__title">
          Customers love the ease and simplicity
        </div>
        <CustomersCarousel />
      </section>
      <section className="questions">
        <TopBtn text="MEET OUR COMPANY" style={"yellow"
        } />
        <div className="questions__title title">
          Frequently Asked Questions
        </div>
        <div className="container"><Accordion /></div>
        <ContactUs />
      </section>
    </>
  );
}

export default Pricing;
