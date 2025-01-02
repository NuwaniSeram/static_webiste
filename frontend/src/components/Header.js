import React from "react";
import "../css/Header.css";
import { Link } from "react-router-dom";
import logo from "../images/logo_cropped.png";

const Header = () => {
  return (
    <header className="header">
      {/* Logo Section */}
      <div className="header-logo">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>

      {/* Navigation Section */}
      <nav className="header-nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/news-media">News & Media</Link>
          </li>
          <li>
            <Link to="/about-us">About Us</Link>
          </li>
          <li>
            <Link to="/contact-us">Contact Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
