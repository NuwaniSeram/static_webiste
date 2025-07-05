import React, { useState } from "react";
import "../css/Header.css";
import { Link } from "react-router-dom";
import logo from "../images/logo_cropped.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="header">
      {/* Logo Section */}
      <div className="header-logo">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>

      {/* Hamburger Menu Icon */}
      <div className="hamburger" onClick={toggleMenu}>
        <div className={`bar ${menuOpen ? "open" : ""}`}></div>
        <div className={`bar ${menuOpen ? "open" : ""}`}></div>
        <div className={`bar ${menuOpen ? "open" : ""}`}></div>
      </div>

      {/* Navigation Section */}
      <nav className={`header-nav ${menuOpen ? "active" : ""}`}>
        <ul>
          <li>
            <Link to="/" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/projects" onClick={toggleMenu}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="/news-media" onClick={toggleMenu}>
              News & Media
            </Link>
          </li>
          <li>
            <Link to="/about-us" onClick={toggleMenu}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact-us" onClick={toggleMenu}>
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
