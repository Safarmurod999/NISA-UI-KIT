import React from "react";
import twitter from "../../assets/Footer/twitter.svg";
import facebook from "../../assets/Footer/facebook.svg";
import google from "../../assets/Footer/google.svg";
import pinterest from "../../assets/Footer/pinterest.svg";
import linkedin from "../../assets/Footer/linkedin.svg";

import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__info">
          <div className="footer__description">
            <p className="footer__title title">
              Build a beautiful product with align
            </p>
            <p className="footer__text text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus
              euismod fusce pulvinar amet. Sollicitudin nullam mauris tellus
              accumsan, phasellus. Ut ac consequat arcu non aliquam.{" "}
            </p>

            <div className="footer__social">
              <a href="https://twitter.com" target="_blank">
                <img src={twitter} alt="img" />
              </a>

              <a href="https://facebook.com" target="_blank">
                <img src={facebook} alt="img" />
              </a>

              <a href="https://google.com" target="_blank">
                <img src={google} alt="img" />
              </a>

              <a href="https://www.pinterest.com/" target="_blank">
                <img src={pinterest} alt="img" />
              </a>

              <a href="https://www.linkedin.com/" target="_blank">
                <img src={linkedin} alt="img" />
              </a>
            </div>
          </div>
          <div className="footer__list">
            <li><span>Overview</span></li>
            <li>Home</li>
            <li>About</li>
            <li>Blog</li>
            <li>Blog Post</li>
            <li>Team Member</li>
          </div>
          <div className="footer__list">
            <li><span>Pages</span></li>
            <li>Contact</li>
            <li>Customer Story</li>
            <li>Login</li>
            <li>Register</li>
            <li>Changelog</li>
          </div>
          <div className="footer__list">
            <li><span>Connect</span></li>
            <li>+998 93 508 22 61</li>
            <li>hello@gmail.com</li>
          </div>
        </div>
      </div>
    </footer>
  );
}
