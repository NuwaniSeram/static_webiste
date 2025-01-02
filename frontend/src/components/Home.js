import React, { useState, useEffect } from "react";
import "../css/Home.css";
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.png";
import image3 from "../images/image3.png";
import image4 from "../images/image4.jpg";
import image5 from "../images/image5.png";

const bannerImages = [image1, image2, image3, image4, image5];

const bannerContent = [
  {
    heading: "Your Vision, Our Construction",
    text: "We bring your ideas to life with expert craftsmanship and innovative solutions.",
    style: { color: "#fff", textAlign: "left", top: "40%", left: "10%" },
  },
  {
    heading: "Innovative Architectural Designs",
    text: "Experience elegance and functionality in every detail.",
    style: { color: "black", textAlign: "center", top: "70%", left: "50%", transform: "translateX(-50%)" },
  },
  {
    heading: "Building Sustainable Futures",
    text: "Eco-friendly and energy-efficient solutions tailored to your needs.",
    style: { color: "white", textAlign: "right", top: "40%", right: "50%" },
  },
  {
    heading: "Turning Dreams into Reality",
    text: "Trust us to deliver excellence in every project.",
    style: { color: "black", textAlign: "center", top: "40%", left: "50%", transform: "translateX(-50%)" },
  },
  {
    heading: "Building Sustainable Futures",
    text: "Trust us to deliver excellence in every project.",
    style: { color: "white", textAlign: "center", top: "40%", left: "70%", transform: "translateX(-50%)" },
  },
];

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Automatically change the image every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === bannerImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 15000); // 15 seconds

    return () => clearInterval(interval);
  }, []);

  // Function to handle next image
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === bannerImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to handle previous image
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? bannerImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="home">
      <div className="banner">
        <div
          className="banner-image"
          style={{
            backgroundImage: `url(${bannerImages[currentImageIndex]})`,
          }}
        ></div>
        <div
          className="banner-content"
          style={bannerContent[currentImageIndex].style}
        >
          <h1>{bannerContent[currentImageIndex].heading}</h1>
          <p>{bannerContent[currentImageIndex].text}</p>
          <a href="/contact-us">
            <button className="banner-btn">Contact Us</button>
          </a>
        </div>
        <button className="arrow left-arrow" onClick={prevImage}>
          &#8249;
        </button>
        <button className="arrow right-arrow" onClick={nextImage}>
          &#8250;
        </button>
      </div>

      {/* Why ELFORCE Section */}
      <div className="why-elforce">
        <h2>Why us?</h2>
        <div className="why-elforce-content">
          <div className="why-item">
            <h3>Experience</h3>
            <p>
              With over three decades of expertise, we have a proven track record of delivering exceptional projects.
            </p>
          </div>
          <div className="why-item">
            <h3>Quality</h3>
            <p>
              We prioritize quality in every project, ensuring durability, precision, and excellence.
            </p>
          </div>
          <div className="why-item">
            <h3>Customer Care</h3>
            <p>
              Our commitment to customer satisfaction is unmatched, with personalized attention to your needs.
            </p>
          </div>
          <div className="why-item">
            <h3>Innovation</h3>
            <p>
              We bring innovative solutions to every challenge, combining creativity with functionality.
            </p>
          </div>
        </div>
      </div>

      {/* Our Services Section */}
      <div className="our-services">
        <h2>Our Services</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-icon">
              <img src="../images/design-icon.png" alt="Design Icon" />
            </div>
            <div className="timeline-content">
              <h3>Architectural Design</h3>
              <p>Innovative and functional designs tailored to your unique requirements.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-icon">
              <img src="../images/construction-icon.png" alt="Construction Icon" />
            </div>
            <div className="timeline-content">
              <h3>Construction</h3>
              <p>High-quality construction services delivered with precision and efficiency.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-icon">
              <img src="../images/consulting-icon.png" alt="Consulting Icon" />
            </div>
            <div className="timeline-content">
              <h3>Consulting</h3>
              <p>Expert advice and guidance to bring your vision to life.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-icon">
              <img src="../images/sustainability-icon.png" alt="Sustainability Icon" />
            </div>
            <div className="timeline-content">
              <h3>Sustainability</h3>
              <p>Eco-friendly and energy-efficient solutions for a greener future.</p>
            </div>
          </div>
        </div>
      </div>


      
    </div>
  );
};

export default Home;
