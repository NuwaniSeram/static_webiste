import React from "react";
import "../css/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faYoutube,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2>ELFORCE ENGINEERING (PVT) LTD</h2>
          <p>
            A synonym for quality, speed, and care. Delivering high-quality
            buildings and infrastructure for over three decades.
          </p>

          {/* Social Media Links */}
          <div class="social-icons">
            <a href="https://www.facebook.com" target="_blank" class="icon facebook">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.instagram.com" target="_blank" class="icon instagram">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="https://www.youtube.com" target="_blank" class="icon youtube">
              <i class="fab fa-youtube"></i>
            </a>
            <a href="https://www.whatsapp.com" target="_blank" class="icon whatsapp">
              <i class="fab fa-whatsapp"></i>
            </a>
            <a href="https://www.tiktok.com" target="_blank" class="icon tiktok">
              <i class="fab fa-tiktok"></i>
            </a>
          </div>
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
        <p>© {new Date().getFullYear()} ELFORCE. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
