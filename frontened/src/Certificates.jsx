import React from "react";
import "./Certificates.css";

const Certificatess = [
  {
    title: "SQl Basics",
    company: "Hacker Rank",
    duration: "March 2025",
    image: "https://logowik.com/content/uploads/images/azure-sql-database6354.jpg",
    website:"https://www.hackerrank.com/certificates/iframe/5ebb5daaea1d"
  },
];

function Certificates() {

    const handleClick = (website) => {
      window.open(website, "_blank"); // Open website in a new tab
    };
    
  return (
    <section className="Certificates-section" id="certificate">
      <h2 className="Certificates-title">Certificates</h2>
      <p className="Certificates-subtitle">My Certificates as a software engineer and learning different Skills.</p>
      <div className="timeline">
        {Certificatess.map((exp, index) => (
          <div key={index} className="Certificates-card" onClick={()=>handleClick(exp.website)}>
            <div className="timeline-dot"></div>
             
            <img src={exp.image} alt={exp.company} className="Certificates-image"/>
            <div className="Certificates-details">
              <h3>{exp.title}</h3>
              <h4>{exp.company}</h4>
              <p className="duration">{exp.duration}</p>
              <p>{exp.description}</p>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certificates;
