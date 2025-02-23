import React from "react";
import "../css/AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="hero-section">
        <h1 className="hero-title">
          About <span className="accent">Us</span>
        </h1>
        <p className="hero-subtitle">
          Building the future with innovation & excellence.
        </p>
      </div>

      <div className="content-section">
        <div className="content-card who-we-are">
          <h2>Who We Are</h2>
          <p>
            ELFORCE is a leading construction company dedicated to delivering
            excellence in architectural design, construction, and sustainable
            solutions.
          </p>
        </div>

        <div className="content-card mission">
          <h2>Our Mission</h2>
          <p>
            To create high-quality, innovative, and eco-friendly solutions that
            exceed expectations.
          </p>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🏗️</div>
            <h3>Expertise</h3>
            <p>Decades of experience in delivering top-tier projects.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🛠️</div>
            <h3>Quality</h3>
            <p>We maintain high standards in every aspect of our work.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🌍</div>
            <h3>Innovation</h3>
            <p>We embrace modern technology for smarter solutions.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🤝</div>
            <h3>Trust</h3>
            <p>Customer satisfaction is our top priority.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
