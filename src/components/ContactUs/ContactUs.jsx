import React from "react";
import "./ContactUs.scss";
function ContactUs() {
  return (
    <section className="contact-us">
      <div className="container">
        <div className="contact-us-wrapper">
          <div className="contact-us-left">
            <div className="contact-us-title">
              Discover the power of creative freedom with Align.
            </div>
            <p className="contact-us-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium
              consectetur egestas mauris adipiscing dui.
            </p>
          </div>
          <div className="contact-us-right">
            <form className="contact-us-form">
              <div className="contact-us-name">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="contact-us-email">
                <input type="email" placeholder="Email Address" required />
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
