import React, { useState } from "react";
import "./Contact.css"; 

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch("http://localhost:3001/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
  
      const result = await response.json();
  
      if (result.success) {
        alert(`Thank you, ${formData.name}! Your message has been sent.`);
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        alert("Something went wrong. Please try again later.");
        setFormData({ name: "", email: "", subject: "", message: "" });
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Please try again later.");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }
  };
  

  return (
    <div className="contact-container">
      <h2 className="contact-title">Contact</h2>
      <p className="contact-description">
        Feel free to reach out to me for any questions or opportunities!
      </p>

      <div className="form-container">
        <h3 className="form-title">Email Me 🚀</h3>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="form-input"
            required
          />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="form-input"
            required
          />
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            className="form-input"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            rows="4"
            className="form-textarea"
            required
          ></textarea>
          <button className="form-button" type="submit">
            Send
          </button>
        </form>
      </div>

      <footer className="contact-footer">
        <h3 className="footer-title">AGRIM SAXENA</h3>
        <div className="social-links">
          <a
            href="https://leetcode.com/u/theagrim0410/"
            className="social-link"
          >
            LeetCode
          </a>
          <a href="https://x.com/theagrim0410" className="social-link">
            Twitter
          </a>
          <a
            href="https://www.linkedin.com/in/agrim-saxena-5a24b5256/"
            className="social-link"
          >
            LinkedIn
          </a>
          <a
            href="https://www.instagram.com/theagrim0410/"
            className="social-link"
          >
            Instagram
          </a>
          <a
            href="https://github.com/theagrim0410"
            className="social-link"
          >
            Github
          </a>
        </div>
        <div className="social-links">
          <a href="#about" className="social-link">
            About
          </a>
          <a href="#skills" className="social-link">
            Skills
          </a>
          <a href="#certificate" className="social-link">
            Certificate
          </a>
          <a href="#projects" className="social-link">
            Projects
          </a>
          <a href="#education" className="social-link">
            Education
          </a>
        </div>
        <p className="footer-text">© 2025 Agrim Saxena All rights reserved</p>
      </footer>
    </div>
  );
};

export default Contact;
