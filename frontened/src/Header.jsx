import "./Header.css"
import { useState } from "react";


function Header(){
    const [isOpen, setIsOpen] = useState(false);
    return(

        
    // <header className ="ab">

       <header className={`ab ${isOpen ? "show" : ""}`}>
            <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? "✖" : "☰"} {/* Toggle Icon */}
            </button>
        <div className ="logo">&#9679; Agrim Saxena</div>
        <nav>
            <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#certificate">Certificate</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#education">Education</a></li>
            </ul>
        </nav>
        <a href="https://github.com/theagrim0410" className="github-btn">Github Profile</a>
    </header>
    );
}

export default Header;