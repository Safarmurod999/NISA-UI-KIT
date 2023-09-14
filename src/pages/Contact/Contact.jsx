import React from "react";
import "./Contact.scss";
import { AboutCarousel, BlueBtn, ContactInput, TopBtn } from "../../components";
function Contact() {
  return (
    <>
      <section className="contact">
        <div className="container">
          <div className="contact__left">
            <div className="contact__title">
              Get in touch with our team today.
            </div>
            <p className="contact__text">
              Have questions? Let’s Chat! Fill out the form below and one of our
              team members will reach out as soon as possible.
            </p>
            <div className="contact__details">
              <h4>Company Details</h4>
              <ul className="contact__list">
                <li className="contact__list--item">
                  <i
                    className="fa-solid fa-message"
                    style={{ color: "#f0b123" }}
                  ></i>
                  <p>otir@design.co</p>
                </li>
                <li className="contact__list--item">
                  <i
                    className="fa-solid fa-phone"
                    style={{ color: "#f0b123" }}
                  ></i>
                  <p>415-870-1547</p>
                </li>
                <li className="contact__list--item">
                  <i
                    className="fa-solid fa-location-dot"
                    style={{ color: "#f0b123" }}
                  ></i>
                  <p>6391 Elgin Delaware 10299</p>
                </li>
              </ul>
            </div>
            <div className="contact__socials--title">Socials</div>
            <ul className="contact__socials">
              <li className="contact__socials--icon">
                <i
                  className="fa-brands fa-twitter"
                  style={{ color: "#fff" }}
                ></i>
              </li>
              <li className="contact__socials--icon">
                <i
                  className="fa-brands fa-facebook"
                  style={{ color: "#fff" }}
                ></i>
              </li>
              <li className="contact__socials--icon">
                <i
                  className="fa-brands fa-pinterest-p"
                  style={{ color: "#fff" }}
                ></i>
              </li>
              <li className="contact__socials--icon">
                <i
                  className="fa-brands fa-google"
                  style={{ color: "#fff" }}
                ></i>
              </li>
              <li className="contact__socials--icon">
                <i
                  className="fa-brands fa-linkedin"
                  style={{ color: "#fff" }}
                ></i>
              </li>
            </ul>
          </div>
          <div className="contact__right">
            <form className="contact__form">
              <div className="contact__form--title">Get in touch with us</div>
              <div className="contact__form--row">
                <ContactInput
                  type={"text"}
                  title={"First Name"}
                  id={"first-name"}
                  placeholder={""}
                />
                <ContactInput
                  type={"text"}
                  title={"Last Name"}
                  id={"last-name"}
                  placeholder={""}
                />
              </div>
              <ContactInput
                type={"email"}
                title={"Work Mail"}
                id={"work-mail"}
                placeholder={""}
              />
              <ContactInput
                type={"number"}
                title={"Phone number"}
                id={"phone-number"}
                placeholder={""}
              />
              <div className="contact__form--messages">
                <label htmlFor="form-field">Message</label>
                <textarea name="form-field" id="form-field"></textarea>
              </div>
              <div className="contact__form--checkbox">
                <input type="checkbox" name="check" id="check" />
                <label htmlFor="check">
                  By clicking submit below, you consent to Justuno storing and
                  processing the personal information submitted to provide the
                  content requested.
                </label>
              </div>
              <BlueBtn
                data={"Submit"}
                style={{ color: "#fff" }}
                type={"submit"}
              />
            </form>
          </div>
        </div>
      </section>
      <section className="clients">
        <TopBtn style={"gray"} text={"TESTIMONIAL"} />
        <div className="clients__title">What our client says</div>
        <AboutCarousel />
      </section>
    </>
  );
}

export default Contact;
