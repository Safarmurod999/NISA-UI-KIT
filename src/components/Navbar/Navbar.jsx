import React from "react";
import { Outlet, Link } from "react-router-dom";
import logo from "../../assets/Navbar/logo.svg";


import "./navBar.scss";
function Navbar() {
  return <>
  <nav className="navbar">
    <div className="container">
      <div className="navbar__logo"><img src={logo} alt="logo" />
      </div>
      <div className="navbar__navigation">
      <ul className="navbar__menus">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Pricing">Pricing</Link></li>
        <li><Link to="/About">About</Link></li>
        <li><Link to="/Blog">Blog</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
      </ul>
      <div className="navbar__login">
        <Link><button className="loginBtn">Login</button></Link>
        <Link><button className="pinkBtn">Buy Nisa</button></Link>
      </div>
      </div>
    </div>
  </nav>
  <Outlet/>
  </>
}

export default Navbar;
