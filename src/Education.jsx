import React from "react";
import "./Education.css";

const Educations = [
  {
    title: "GALGOTIAS COLLEGE OF ENGINEERING AND TECHNOLOGY",
    company: "BACHOLOR OF TECHNOLOGY COMPUTER SCIENCE AND ENGINEERING (2023-2027)",
    duration: "GRADE : ",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO1nrbGkNgJ5MYFpUb998OIG-ddFkTjN-CPg&s"
     
  },
  {
    title: "ST. MARY'S CONVENT SR. SEC. SCHOOL FARIDPUR,BAREILLY (2021)",
    company: "HIGH SCHOOL",
    duration: "GRADE : 89%",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHgOHVxZe5Ja69YczJBRMxf7vX9w3ovSM6yw&s" 
  },
  {
    title: "ST. MARY'S CONVENT SR. SEC. SCHOOL FARIDPUR,BAREILLY (2023)",
    company: "INTERMEDIATE",
    duration: "GRADE : 91%",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHgOHVxZe5Ja69YczJBRMxf7vX9w3ovSM6yw&s"   
  }

];

function Education() {

    
  return (
    <section className="Education-section" id="education">
      <h2 className="Education-title">Education</h2>
      <p className="Education-subtitle">My education has been a journey of self-discovery and growth. My educational details are as follows.</p>
      <div className="timeline">
        {Educations.map((exp, index) => (
          <div key={index} className="Education-card" style={{ cursor: "default" }}>
            <div className="timeline-dot"></div>
             
            <img src={exp.image} alt={exp.company} className="Education-image"/>
            <div className="Education-details">
              <h3>{exp.title}</h3>
              <h4>{exp.company}</h4>
              <p className="duration">{exp.duration}</p>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
