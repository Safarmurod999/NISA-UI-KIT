import React from "react";
import {BsTwitter} from "react-icons/bs"
import {FiFacebook} from "react-icons/fi"
import {FaGooglePlusG,FaPinterestP} from "react-icons/fa"


import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__info">
          <div className="footer__description">
            <p className="footer__title">
              Build a beautiful product with align
            </p>
            <p className="footer__paragrft">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus
              euismod fusce pulvinar amet. Sollicitudin nullam mauris tellus
              accumsan, phasellus. Ut ac consequat arcu non aliquam.{" "}
            </p>

            <div className="footer__social">
              <a href="https://twitter.com" target="_blank">
                <BsTwitter fontSize="30px"/>
              </a>

              <a href="https://facebook.com" target="_blank">
                <FiFacebook fontSize="30px"/>
              </a>

              <a href="https://google.com" target="_blank">
                <FaGooglePlusG fontSize="30px"/>
              </a>

              <a href="https://www.pinterest.com/" target="_blank">
                <FaPinterestP fontSize="30px"/>
              </a>
              
              <a href="https://www.pinterest.com/" target="_blank">
                <FaPinterestP fontSize="30px"/>
              </a>

            </div>
          </div>

          <ul className="footer__list">
            <li>
              <strong>Overview</strong>
              <ul className="footer__list-item">
                <li>
                  <a href="#">Home</a>
                </li>

                <li>
                  <a href="#">About</a>
                </li>

                <li>
                  <a href="#">Blog</a>
                </li>

                <li>
                  <a href="#">Blog post</a>
                </li>

                <li>
                  <a href="#">Team Mamber</a>
                </li>
              </ul>
            </li>

            <li>
              <strong>Pages</strong>
              <ul className="footer__list-item">
                <li>
                  <a href="#">Contact</a>
                </li>

                <li>
                  <a href="#">Costumer Stroy</a>
                </li>

                <li>
                  <a href="#">Login</a>
                </li>

                <li>
                  <a href="#">Register</a>
                </li>

                <li>
                  <a href="#">Style Guide</a>
                </li>

                <li>
                  <a href="#">Changelog</a>
                </li>

                <li>
                  <a href="#">Licance</a>
                </li>

                <li>
                  <a href="#">404</a>
                </li>
                <li>
                  <a href="#">Password</a>
                </li>

              </ul>
            </li>

            <li>
              <strong>Connect</strong>
              <ul className="footer__list-item">
                <li>
                  <a href="tel:+001 234 567 89">+001 234 567 89</a>
                </li>

                <li>
                  <a href="mailto:hellow@nesa.com">hellow@nesa.com</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
