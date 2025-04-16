import React from "react";
import "../css/Projects.css";
import { Link } from "react-router-dom";

const projectsData = {
  ongoing: [
    {
      id: 1,
      title: "Skyline Apartments",
      description: "A modern residential complex in the heart of the city.",
      image: "../images/ongoing1.jpg",
    },
    {
      id: 2,
      title: "Green Valley Eco Park",
      description: "Sustainable and eco-friendly community project.",
      image: "../images/ongoing2.jpg",
    },
    {
      id: 2,
      title: "Green Valley Eco Park",
      description: "Sustainable and eco-friendly community project.",
      image: "../images/ongoing2.jpg",
    },
  ],
  completed: [
    {
      id: 3,
      title: "Ocean Breeze Villas",
      description: "Luxury villas with breathtaking ocean views.",
      image: "../images/completed1.jpg",
    },
    {
      id: 4,
      title: "Urban Plaza",
      description: "A bustling commercial and retail hub.",
      image: "../images/completed2.jpg",
    },
    {
      id: 4,
      title: "Urban Plaza",
      description: "A bustling commercial and retail hub.",
      image: "../images/completed2.jpg",
    },
  ],
};

const Projects = () => {
  return (
    <div className="projects-container">
      <div className="projects-header">
        <h1>Our Projects</h1>
        <p>Discover our exceptional portfolio of construction and development projects</p>
      </div>
      
      {/* Ongoing Projects Section */}
      <section className="projects-section">
        <div className="section-header">
          <h2>Ongoing Projects</h2>
          <div className="section-line"></div>
        </div>
        <div className="projects-grid">
          {projectsData.ongoing.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="project-image-container">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <span className="project-status">In Progress</span>
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <Link to={`/projects/${project.id}`} className="view-details-btn">
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Completed Projects Section */}
      <section className="projects-section">
        <div className="section-header">
          <h2>Completed Projects</h2>
          <div className="section-line"></div>
        </div>
        <div className="projects-grid">
          {projectsData.completed.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="project-image-container">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <span className="project-status completed">Completed</span>
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <Link to={`/projects/${project.id}`} className="view-details-btn">
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;