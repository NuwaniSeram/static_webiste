import React from "react";
import "../css/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2>LOGO/ Company Name</h2>
          <p>
            A synonym for quality, speed, and care. Delivering high-quality
            buildings and infrastructure for over three decades.
          </p>
        </div>

        <div className="footer-section links">
          <h3 className="QLink-title">Quick Links</h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/projects">Projects</a>
            </li>
            <li>
              <a href="/news-media">News & Media</a>
            </li>
            <li>
              <a href="/about-us">About Us</a>
            </li>
            <li>
              <a href="/contact-us">Contact Us</a>
            </li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p>Email: info@company.lk</p>
          <p>Phone: +94 11 555 5555</p>
          <p>Address: 123 S Lane, Colombo, Sri Lanka</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Company Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
