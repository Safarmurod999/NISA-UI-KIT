import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import logo from "../../assets/Navbar/logo.svg";

import "./navBar.scss";
function Navbar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <>
      <nav className="navbar">
        <div className="container">
          <div className="navbar__logo">
            <Link to={'/'}><img src={logo} alt="logo" /></Link>
          </div>
          <div className={`navbar__navigation ${navbar&&'active'}`}>
            <ul className="navbar__menus">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/pricing">Pricing</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
            <div className="navbar__login">
              <Link to={'/login'}>
                <button className="loginBtn">Login</button>
              </Link>
              <Link>
                <button className="pinkBtn">
                  Buy Nisa
                </button>
              </Link>
            </div>
            <button
              id="open"
              className="navbar__toggle"
              onClick={() => setNavbar(false)}
            >
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 384 512"
              >
                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
              </svg>
            </button>
          </div>
          <button id="close" className="navbar__toggle"  onClick={() => setNavbar(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 448 512"
            >
              <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
            </svg>
          </button>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;
