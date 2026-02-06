import React from "react";
import "./Certificates.css";

const Certificatess = [
  {
    title: "Advanced Python Program",
    company: "Galgotias College Of Engineering and Technology",
    duration: "2024",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6ZMz1hjBcRWGS-Jg8kcHK2eJI_p4aRp_NZw&s",
    website:"https://drive.google.com/file/d/1FRnmDlAkAhZi76Yf_lZ-ZCZ8S_w9fZXi/view?usp=drive_link"
  },

  {
    title: "SQl Basics",
    company: "HackerRank",
    duration: "March 2025",
    image: "https://logowik.com/content/uploads/images/azure-sql-database6354.jpg",
    website:"https://www.hackerrank.com/certificates/iframe/5ebb5daaea1d"
  },

  {
    title: "Java Spring and React",
    company: "Galgotias College Of Engineering and Technology",
    duration: "2025",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8i4zPog-0j0JR_yZglxPhTPZXxN2iMTQ3Dw&s",
    website:"https://drive.google.com/file/d/1FTI7HDcLTlw8JuyHuANsULVTJaQDSJDN/view?usp=drive_link"
  },

  {
    title: "Python Program",
    company: "HackerRank",
    duration: "2026",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG-CLUbY0yg_sNuL2fsGS9I447M07-PYTw9Q&s",
    website:" https://www.hackerrank.com/certificates/iframe/6f84c39cb13e"
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
