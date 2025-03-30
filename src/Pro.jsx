import React, { useState } from "react";
import "./Projects.css";

const projects = [
  {
    title: "",
    category: "mobile",
    date: "March 2020 - May 2020",
    description: "A WooCommerce application.",
    image: "razain_logo.png",
    tags: ["Kotlin", "XML", "Android Studio"],
  },
  {
    title: "LR Pharmacy App And Admin Panel",
    category: "mobile",
    date: "June 2020 - June 2020",
    description: "Mobile and Admin Panel App.",
    image: "pharmacy_app.png",
    tags: ["Java", "Laravel", "Android Studio"],
  },
  {
    title: "Car Rental Project Website",
    category: "website",
    date: "June 2020 - June 2020",
    description: "Website with Admin Panel.",
    image: "car_rental.png",
    tags: ["Laravel", "PHP", "Admin Panel"],
  },
];

function Projects() {
  const [filter, setFilter] = useState("all");

  const handleFilter = (category) => {
    setFilter(category);
  };

  return (
    <section className="projects-section" id="projects">
      <h1>My Projects</h1>
      <p>
        I have worked on a wide range of projects. Here are some of my projects.
      </p>
      <div className="filter-buttons">
        <button className="btn" onClick={() => handleFilter("all")}>All</button>
        <button className="btn" onClick={() => handleFilter("mobile")}>Artificial Intelegent</button> 
        {/* mobile */}
        <button className="btn" onClick={() => handleFilter("website")}>Website</button>
        <button className="btn" onClick={() => handleFilter("ml")}>Machine Learning</button>
      </div>
      <div className="projects-container">
        {projects
          .filter((project) => filter === "all" || project.category === filter)
          .map((project, index) => (
            <div key={index} className="project-card">
              <img src={project.image} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.date}</p>
              <p>{project.description}</p>
              <div className="tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}

export default Projects;
3