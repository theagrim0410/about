import React, { useState } from "react";
import "./Contact.css"; // Import CSS file for styling

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Thank you, ${formData.name}! Your message has been sent.`);
        setFormData({ name: "", email: "", subject: "", message: "" });
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
                    <button className="form-button" type="submit">Send</button>
                </form>
            </div>
            
            <footer className="contact-footer">
                <h3 className="footer-title">AGRIM SAXENA</h3>
                <div className="social-links">
                    <a href="#" className="social-link">LeetCode</a>
                    <a href="#" className="social-link">Twitter</a>
                    <a href="#" className="social-link">LinkedIn</a>
                    <a href="#" className="social-link">Instagram</a>
                </div>
                <p className="footer-text">© 2025 Agrim Saxena All rights reserved</p>
            </footer>
        </div>
    );
};

export default Contact;
