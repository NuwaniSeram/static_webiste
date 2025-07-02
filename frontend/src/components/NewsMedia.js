import React from "react";
import { Link } from "react-router-dom";
import "../css/NewsMedia.css";
import news1 from "../images/news1.jpg";
import news2 from "../images/news2.jpg";
import news3 from "../images/news3.jpg";
import news4 from "../images/news4.jpg";
import news5 from "../images/news5.jpg";

const NewsMedia = () => {
  const newsArticles = [
    {
      id: 1,
      title: "CEO Speaks at International Construction Summit",
      date: "January 18, 2023",
      excerpt: "Our CEO shared insights on sustainable urban development at the Global Construction Leaders Forum.",
      image: news1,
      category: "Events"
    },
    {
      id: 2,
      title: "New Headquarters Construction Begins",
      date: "May 28, 2023",
      excerpt: "We've broken ground on the new corporate headquarters for TechGlobal, featuring our latest energy-efficient designs.",
      image: news2,
      category: "Projects"
    },
    {
      id: 3,
      title: "ELFORCE Partners with Local Community College",
      date: "April 10, 2023",
      excerpt: "New apprenticeship program launched to train the next generation of construction professionals.",
      image: news3,
      category: "Community"
    },
    {
      id: 4,
      title: "Innovative Materials Reduce Construction Costs",
      date: "March 22, 2023",
      excerpt: "Our R&D team has developed new composite materials that cut costs by 15% without sacrificing quality.",
      image: news4,
      category: "Innovation"
    },
    {
      id: 5,
      title: "ELFORCE Completes Hospital Expansion Ahead of Schedule",
      date: "February 5, 2023",
      excerpt: "The new wing of City General Hospital was completed 3 weeks early thanks to our efficient project management.",
      image: news5,
      category: "Projects"
    }
  ];

  const photoGallery = [
    {
      id: 1,
      title: "Annual Company Retreat 2023",
      image: news1,
      date: "June 15, 2023",
      count: "24 Photos"
    },
    {
      id: 2,
      title: "Project Site: Downtown Tower",
      image: news2,
      date: "May 10, 2023",
      count: "18 Photos"
    },
    {
      id: 3,
      title: "Community Outreach Program",
      image: news3,
      date: "April 22, 2023",
      count: "12 Photos"
    },
    {
      id: 4,
      title: "Award Ceremony Night",
      image: news4,
      date: "March 30, 2023",
      count: "15 Photos"
    }
  ];

  const eventHighlights = [
    {
      id: 1,
      title: "Annual Stakeholders Meeting",
      date: "July 12, 2023",
      location: "ELFORCE Headquarters",
      description: "Key announcements and strategic plans for the upcoming fiscal year."
    },
    {
      id: 2,
      title: "Groundbreaking Ceremony",
      date: "June 5, 2023",
      location: "Riverfront Development Site",
      description: "Official start of our largest urban renewal project to date."
    },
    {
      id: 3,
      title: "Industry Innovation Summit",
      date: "May 22, 2023",
      location: "Convention Center",
      description: "Our team presented three new sustainable construction techniques."
    },
    {
      id: 4,
      title: "Employee Recognition Awards",
      date: "April 18, 2023",
      location: "Grand Ballroom",
      description: "Celebrating our team's outstanding achievements and milestones."
    }
  ];

  return (
    <div className="news-media-page">
      {/* Hero Banner */}
      <div className="news-hero">
        <div className="news-hero-content">
          <h1>News & Media</h1>
          <p>Stay updated with our latest projects, achievements, and media content</p>
        </div>
      </div>

      {/* Latest News Section */}
      <section className="news-section">
        <div className="container">
          <h2 className="section-title">Latest News</h2>
          <div className="news-grid">
            {newsArticles.map((article) => (
              <div className="news-card" key={article.id}>
                <div className="news-image-container">
                  <img src={article.image} alt={article.title} className="news-image" />
                  <span className="news-category">{article.category}</span>
                </div>
                <div className="news-content">
                  <h3>{article.title}</h3>
                  <p className="news-date">{article.date}</p>
                  <p className="news-excerpt">{article.excerpt}</p>
                  <Link to={`/news-media/article/${article.id}`} className="news-read-more">Read More</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section">
        <div className="container">
          <h2 className="section-title">Gallery</h2>
          <div className="gallery-grid">
            {photoGallery.map((item) => (
              <div className="gallery-item" key={item.id}>
                <div className="gallery-image-container">
                  <img src={item.image} alt={item.title} className="gallery-image" />
                  <div className="gallery-overlay">
                    <span className="gallery-count">{item.count}</span>
                  </div>
                </div>
                <div className="gallery-info">
                  <h3>{item.title}</h3>
                  <p className="gallery-date">{item.date}</p>
                  <a href="#" className="gallery-view">View Gallery</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Highlights Section */}
      <section className="events-section">
        <div className="container">
          <h2 className="section-title">Event Highlights</h2>
          <div className="events-list">
            {eventHighlights.map((event) => (
              <div className="event-item" key={event.id}>
                <div className="event-date">
                  <span className="event-day">{new Date(event.date).getDate()}</span>
                  <span className="event-month">{new Date(event.date).toLocaleString('default', { month: 'short' })}</span>
                </div>
                <div className="event-details">
                  <h3>{event.title}</h3>
                  <p className="event-location">{event.location}</p>
                  <p className="event-description">{event.description}</p>
                </div>
                <a href="#" className="event-more">View Photos</a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsMedia;
