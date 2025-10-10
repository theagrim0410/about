import React, { useState } from "react";
import "./Projects.css";

const projects = [
  {
    title: "SpeechBot",
    category: ["website", "AI"], 
    date: "Jan 2025",
    description: "It can perform ten different tasks along with talking",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKtO1jVqdrKexgz4-RBL1XvSG_sWsEY4Mwjg&s",
    tags: ["Python", "Flask"],
    link: "https://github.com/theagrim0410/python-speech-bot-using-flask",
  },
  {
    title: "TextBot",
    category: ["AI"],
    date: "Nov 2024 - Dec 2024",
    description: "It answers your questions",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHHnDC112tSNqcxYks6pCLSsJiVN5u7eWdjA&s",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/theagrim0410/chatbot-",
  },
  {
    title: "GUI Calendar",
    category: ["other"],
    date: "Dec 2022 - Jan 2023",
    description: "It shows the calendar and real-time wishes",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_Pa5v9NZhYlBUQtUJ30xCcRocO5i7PF_npQ&s",
    tags: ["Python"],
    link: "https://github.com/theagrim0410/python-calender-and-clock-gui",
  },
  {
    title: "GUI Calculator",
    category: ["other"],
    date: "Dec 2022 - Jan 2023",
    description: "It performs basic calculations",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjsm83GSFTF48yYXARGUBMkIXDob2ALHemUg&s",
    tags: ["Python"],
    link: "https://github.com/theagrim0410/python-calculator-gui",
  },
  {
    title: "Employees Attendance Manager",
    category: ["Database"],
    date: "Nov 2022 - Dec 2024",
    description: "It manages employee attendance and details",
    image: "https://www.branchingminds.com/hubfs/How%20To%20Track%20and%20Support%20Student%20Attendance%20in%20MTSS_featureimage.png",
    tags: ["Python", "SQL"],
    link: "https://github.com/theagrim0410/Python-",
  },

  {
    title: "Student Attendance Manager",
    category: ["Database","website"],
    date: "Feb 2025 - March 2025",
    description: "It manages Student attendance and details with Scanning Qr which is in ID Cards",
    image: "https://iq.torilo.ng/wp-content/uploads/2022/04/stdasms.jpg",
    tags: ["Python", "SQL" , "Flask"],
    link: "https://github.com/theagrim0410/student_attendence",
  },

    {
    title: "Employee Management System Application frontend",
    category: ["application","website"],
    date: "Oct 2025",
    description: "It is Frontned view of  Employee Management System with React Native Application",
    image: "https://www.zimyo.com/wp-content/uploads/2024/01/Employee-Management-System-scaled.jpg",
    tags: ["React native", "JavaScript" , "CSS"],
    link: "https://github.com/theagrim0410/employeemanagement",
  }
  
];

function Projects() {
  const [filter, setFilter] = useState("all");

  const handleFilter = (category) => {
    setFilter(category);
  };

  const Openit = (link) => {
    window.open(link, "_blank");
  };

  return (
    <section className="projects-section" id="projects">
      <h1>My Projects</h1>
      <p>I have worked on a wide range of projects. Here are some of my projects.</p>
      
      <div className="filter-buttons">
        <button className="btn" onClick={() => handleFilter("all")}>All</button>
        <button className="btn" onClick={() => handleFilter("AI")}>Artificial Intelligence</button>
        <button className="btn" onClick={() => handleFilter("website")}>Website</button>
        <button className="btn" onClick={() => handleFilter("application")}>Application</button>
        <button className="btn" onClick={() => handleFilter("Database")}>Database</button>
        <button className="btn" onClick={() => handleFilter("other")}>Other</button>
      </div>

      <div className="projects-container">
        {projects
          .filter((project) => filter === "all" || project.category.includes(filter)) // Modified filtering logic
          .map((project, index) => (
            <div
              key={index}
              className="project-card"
              onClick={() => Openit(project.link)}
              style={{ cursor: "pointer" }}
            >
              <img  className="code" src={project.image} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.date}</p>
              <p>{project.description}</p>
              <div className="tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}

export default Projects;
