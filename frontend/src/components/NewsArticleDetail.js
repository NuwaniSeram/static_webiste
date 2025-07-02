import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../css/NewsArticleDetail.css";
import news1 from "../images/news1.jpg";
import news2 from "../images/news2.jpg";
import news3 from "../images/news3.jpg";
import news4 from "../images/news4.jpg";
import news5 from "../images/news5.jpg";

const NewsArticleDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Sample data - in a real app, you'd fetch this from an API
  const newsArticles = [
    {
      id: 1,
      title: "CEO Speaks at International Construction Summit",
      date: "January 18, 2023",
      content: [
        "Our CEO, John Smith, delivered a keynote address at the Global Construction Leaders Forum in Berlin last week, sharing ELFORCE's innovative approaches to sustainable urban development.",
        "The presentation focused on our company's commitment to reducing carbon emissions in large-scale construction projects while maintaining cost efficiency and structural integrity.",
        "Attended by over 1,200 industry leaders from 56 countries, the summit highlighted emerging trends in green construction technologies. Our CEO participated in several panel discussions about the future of sustainable infrastructure in rapidly growing urban areas.",
        "Key takeaways from the event included new partnerships with European technology providers and insights into regulatory changes that will affect international construction projects in 2024."
      ],
      image: news1,
      category: "Events",
      author: "Sarah Johnson",
      tags: ["Leadership", "Sustainability", "International"]
    },
    {
      id: 2,
      title: "New Headquarters Construction Begins",
      date: "May 28, 2023",
      content: [
        "ELFORCE has officially broken ground on our new corporate headquarters in downtown Chicago, marking a significant milestone in our company's growth.",
        "The 32-story tower, designed by award-winning architect Maria Chen, will feature cutting-edge energy-efficient designs including solar panel integration, rainwater harvesting systems, and smart building technologies.",
        "Construction is expected to create over 800 local jobs during the building phase, with completion scheduled for Q3 2025. The new headquarters will consolidate our currently dispersed offices into a single, state-of-the-art facility.",
        "The building has been designed to LEED Platinum standards and will serve as a showcase for our construction capabilities, featuring many of our proprietary materials and techniques."
      ],
      image: news2,
      category: "Projects",
      author: "Michael Brown",
      tags: ["Headquarters", "Sustainability", "Chicago"]
    },
    // Add other articles with similar structure
  ];

  const article = newsArticles.find(article => article.id === parseInt(id));

  if (!article) {
    return <div className="article-not-found">Article not found</div>;
  }

  return (
    <div className="news-article-detail">
      {/* Article Header */}
      <div className="article-header">
        <div className="container">
          <button onClick={() => navigate(-1)} className="back-button">
            &larr; Back to News
          </button>
          <div className="article-meta">
            <span className="article-category">{article.category}</span>
            <span className="article-date">{article.date}</span>
          </div>
          <h1 className="article-title">{article.title}</h1>
          <p className="article-author">By {article.author}</p>
        </div>
      </div>

      {/* Featured Image */}
      <div className="article-featured-image">
        <img src={article.image} alt={article.title} />
      </div>

      {/* Article Content */}
      <div className="article-content container">
        {article.content.map((paragraph, index) => (
          <p key={index} className="article-paragraph">
            {paragraph}
          </p>
        ))}
      </div>

      {/* Article Tags */}
      <div className="article-tags container">
        <div className="tags-container">
          {article.tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Related Articles */}
      {/* <div className="related-articles">
        <div className="container">
          <h2 className="related-title">Related News</h2>
          <div className="related-grid">
            {newsArticles
              .filter(a => a.id !== article.id && a.category === article.category)
              .slice(0, 3)
              .map(relatedArticle => (
                <div 
                  key={relatedArticle.id} 
                  className="related-card"
                  onClick={() => navigate(`/news-media/article/${relatedArticle.id}`)}
                >
                  <div className="related-image-container">
                    <img src={relatedArticle.image} alt={relatedArticle.title} />
                  </div>
                  <div className="related-content">
                    <h3>{relatedArticle.title}</h3>
                    <p className="related-date">{relatedArticle.date}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default NewsArticleDetail;