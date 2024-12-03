import React from 'react';
import '../css/Home.css'

const Home = () => {
    return (
      <div className="home">
        <div className="banner">
          <div className="banner-content">
            <h1>Your Vision, Our Construction</h1>
            <p>
              We bring your ideas to life with expert craftsmanship and innovative solutions. Let's build something amazing together.
            </p>
            <button className="banner-btn">Get Started</button>
          </div>
        </div>
        {/* Other homepage content can go here */}
      </div>
    );
  };
  
  export default Home;
