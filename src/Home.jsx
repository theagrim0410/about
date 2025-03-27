import "./Home.css";
import { typingEffect } from "./Home.js";
import { useEffect } from "react";

function Home() {
    useEffect(() => {
        typingEffect(); 
    }, []);

    return (
        <section className="hero">
            <div className="hero-text">
                <h1>Hi, I am <br /><span>Agrim Saxena</span></h1>
                <h2>I am a <span className="typing">Programmer</span></h2>
                <p>
                    I am a motivated and versatile individual, always eager to take on new challenges. 
                    With a passion for learning, I am dedicated to delivering high-quality results. 
                    With a positive attitude and a growth mindset, I am ready to make a meaningful 
                    contribution and achieve great things.
                </p>
                <a href="#resume" className="resume-btn">Check Resume</a>
            </div>
            <div className="hero-image">
                <img src="your-image-path.jpg" alt="Agrim Saxena" />
            </div>
        </section>
    );
}

export default Home;
