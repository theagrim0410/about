import "./Home.css";
import { typingEffect } from "./Home.js";
import { useEffect, useState } from "react";
import imagemain from "/imagemain.jpg";


function Home() {
    const openpdf = () => {
        window.open("https://drive.google.com/file/d/1xpqYIvj8gYJsohD8PPPT_4aH110V55Lj/view?usp=drive_link", "_blank");
      };

    const [strips, setStrips] = useState([]);

    useEffect(() => {
        typingEffect();

        const numStrips = 15; 
        const colors = ["#ff4757", "#1e90ff", "#2ed573", "#ff7f50", "#3742fa", "#eccc68"];

        const newStrips = Array.from({ length: numStrips }).map(() => ({
            id: Math.random(),
            width: Math.floor(Math.random() * 120) + 30 + "px", 
            height: "2px",
            top: Math.random() * 160 - 30 + "%", 
            left: Math.random() * 160 - 30 + "%",
            color1: colors[Math.floor(Math.random() * colors.length)],
            color2: colors[Math.floor(Math.random() * colors.length)],
            duration: Math.random() * 6 + 3 + "s", 
        }));

        setStrips(newStrips);
    }, []);

    return (
        <section className="hero" id="about">
            <div className="hero-text">
                <h1>Hi, I am <br /><span>Agrim Saxena</span></h1>
                <h2>I am a <span className="typing">Programmer</span></h2>
                <p>
                    I am a motivated and versatile individual, always ready to take on new challenges. 
                    With a passion for learning, I am dedicated to delivering high-quality results. 
                    With a positive attitude and a growth mindset, I am always ready to make a meaningful 
                    contribution and achieve great things.
                </p>
                <button onClick={openpdf} className="resume-btn">Check Resume</button>
            </div>
            
            <div className="hero-image">
                <div className="animated-strips">
                    {strips.map((strip) => (
                        <div
                            key={strip.id}
                            className="strip"
                            style={{
                                width: strip.width,
                                height: strip.height,
                                top: strip.top,
                                left: strip.left,
                                background: `linear-gradient(to right, ${strip.color1}, ${strip.color2})`,
                                animationDuration: strip.duration,
                            }}
                        ></div>
                    ))}
                </div>

                <img src={imagemain} alt="Agrim Saxena" />
            </div>
        </section>
    );
}

export default Home;
