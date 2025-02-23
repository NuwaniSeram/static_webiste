import React, { useState } from "react";
import "../css/ContactUs.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  return (
    <div className="contact-container">
      <div className="contact-content">
        <div className="contact-header">
          <h1>
            Contact <span className="highlight">Us</span>
          </h1>
          <p>We'd love to hear from you! Let's connect.</p>
        </div>

        <div className="contact-grid">
          <div className="contact-form-wrapper">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="form-input"
                  rows="5"
                />
              </div>

              <button
                type="submit"
                className={`submit-button ${submitted ? "submitted" : ""}`}
              >
                {submitted ? "Message Sent! ✓" : "Send Message"}
              </button>
            </form>
          </div>

          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">📍</div>
              <h3>Visit Us</h3>
              <p>123 Main Street</p>
              <p>City, Country</p>
            </div>

            <div className="info-card">
              <div className="info-icon">📞</div>
              <h3>Call Us</h3>
              <p>+94 70 185 3808</p>
              <p>Mon-Fri, 9am-6pm</p>
            </div>

            <div className="info-card">
              <div className="info-icon">📧</div>
              <h3>Email Us</h3>
              <p>info@elforce.com</p>
              <p>We reply within 24hrs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
