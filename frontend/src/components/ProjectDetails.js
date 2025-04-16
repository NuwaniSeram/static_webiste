import React from "react";
import { useParams } from "react-router-dom";
import "../css/ProjectDetails.css";

const projectDetailsData = {
  1: {
    title: "Skyline Apartments",
    description:
      "A modern residential complex in the heart of the city, offering luxurious living spaces and state-of-the-art amenities.",
    images: ["../images/ongoing1_1.jpg", "../images/ongoing1_2.jpg"],
  },
  2: {
    title: "Green Valley Eco Park",
    description:
      "An eco-friendly community project designed to promote sustainable living and environmental awareness.",
    images: ["../images/ongoing2_1.jpg", "../images/ongoing2_2.jpg"],
  },
  3: {
    title: "Ocean Breeze Villas",
    description:
      "Luxury villas located on a picturesque coastline, offering stunning ocean views and a tranquil lifestyle.",
    images: ["../images/completed1_1.jpg", "../images/completed1_2.jpg"],
  },
  4: {
    title: "Urban Plaza",
    description:
      "A vibrant commercial hub with modern retail spaces, cafes, and office suites, designed for a thriving urban environment.",
    images: ["../images/completed2_1.jpg", "../images/completed2_2.jpg"],
  },
};

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectDetailsData[id];

  if (!project) {
    return <p>Project not found.</p>;
  }

  return (
    <div className="project-details">
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <div className="project-images">
        {project.images.map((image, index) => (
          <img src={image} alt={`Project ${index + 1}`} key={index} />
        ))}
      </div>
    </div>
  );
};

export default ProjectDetails;
