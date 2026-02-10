import React, { useState } from "react";
import "./Projects.css";

const projects = [
  {
    title: "GUI Calendar",
    category: ["other"],
    date: "Dec 2022",
    description: "It shows the calendar and real-time wishes",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_Pa5v9NZhYlBUQtUJ30xCcRocO5i7PF_npQ&s",
    tags: ["Python"],
    link: "https://github.com/theagrim0410/python-calender-and-clock-gui",
  },

  {
    title: "GUI Calculator",
    category: ["other"],
    date: "Jan 2023",
    description: "It performs basic calculations",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjsm83GSFTF48yYXARGUBMkIXDob2ALHemUg&s",
    tags: ["Python"],
    link: "https://github.com/theagrim0410/python-calculator-gui",
  },

  {
    title: "Employees Attendance Manager",
    category: ["Database"],
    date: "Feb 2023",
    description: "It manages employee attendance and details",
    image: "https://www.branchingminds.com/hubfs/How%20To%20Track%20and%20Support%20Student%20Attendance%20in%20MTSS_featureimage.png",
    tags: ["Python", "SQL"],
    link: "https://github.com/theagrim0410/Python-",
  },

  {
    title: "TextBot",
    category: ["AI"],
    date: "Nov 2024",
    description: "It answers your questions",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHHnDC112tSNqcxYks6pCLSsJiVN5u7eWdjA&s",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/theagrim0410/chatbot-",
  },

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
    title: "Employee Management System Application frontend",
    category: ["application","website"],
    date: "Oct 2025",
    description: "It is Frontned view of  Employee Management System with React Native Application",
    image: "https://www.zimyo.com/wp-content/uploads/2024/01/Employee-Management-System-scaled.jpg",
    tags: ["React native", "JavaScript" , "CSS"],
    link: "https://github.com/theagrim0410/employeemanagement",
  },
    
  {
    title: "Suduku Solver",
    category: ["other"],
    date: "Nov 2025",
    description: "Designed a Sudoku Solver using Backtracking Algorithm in Python",
    image: "	https://machinelearningprojects.net/wp-content/uploads/2021/08/2-1.png",
    tags: ["Python" , "Algorithm"],
    link: "https://github.com/theagrim0410/suduko_Solver",
  },
  
  {
    title: "News Article Category Classification",
    category: ["Machine Learning"],
    date: "Dec 2025",
    description: "Designed a News Article Category Classification model using  Python  , it takes input as text and classifies the news article into different categories",
    image: "https://www.labellerr.com/blog/content/images/2024/02/News-Classification-using-NLP.webp",
    tags: ["Python" , "Machine Learning"],
    link: "https://github.com/theagrim0410/newscategory",
  },

  {
    title: "Dog Cat Identification CNN",
    category: ["Machine Learning"],
    date: "Jan 2026",
    description: "Designed a Dog Cat Identification CNN model using  Python , it takes input as image and identifies whether it is a dog or cat",
    image: "https://ai.google.dev/static/edge/mediapipe/images/solutions/examples/object_detector.png",
    tags: ["Python" , "Machine Learning"],
    link: "https://github.com/theagrim0410/cat_dog_cnn",
  },

  {
    title: "Open eye Closed eye CNN",
    category: ["Machine Learning"],
    date: "Feb 2026",
    description: "Designed an Open Eye Closed Eye CNN model which used in vehicle drowsiness detection  using  Python and OpenCV with alarm system",
    image: "https://go.smarteye.se/hs-fs/hubfs/Sleep%20detection%20DMS.jpg?width=1890&name=Sleep%20detection%20DMS.jpg",
    tags: ["Python" , "Machine Learning","OpenCV"],
    link: "https://github.com/theagrim0410/eyesopenorcloses",
  },

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
        <button className="btn" onClick={() => handleFilter("Machine Learning")}>Machine Learning</button>
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
