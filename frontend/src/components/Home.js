import React, { useState, useEffect } from "react";
import "../css/Home.css";
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
import image4 from "../images/image4.jpg";

const bannerImages = [image1, image2, image3, image4];

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Automatically change the image every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === bannerImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 15000); // 10 seconds

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
        {/* <div className="banner-content">
          <h1>Your Vision, Our Construction</h1>
          <p>
            We bring your ideas to life with expert craftsmanship and innovative
            solutions. Let's build something amazing together.
          </p>
          <button className="banner-btn">Get Started</button>
        </div> */}
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
      
    </div>
  );
};

export default Home;
