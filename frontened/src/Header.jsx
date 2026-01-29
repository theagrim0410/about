// import "./Header.css"
// import { useState } from "react";


// function Header(){
//     const [isOpen, setIsOpen] = useState(false);
//     return(

        
//     // <header className ="ab">

//        <header className={`ab ${isOpen ? "show" : ""}`}>
//             <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
//                 {isOpen ? "✖" : "☰"} 
//             </button>
//         <div className ="logo">&#9679; Agrim Saxena</div>
//         <nav>
//             <ul>
//                 <li><a href="#about">About</a></li>
//                 <li><a href="#skills">Skills</a></li>
//                 <li><a href="#certificate">Certificate</a></li>
//                 <li><a href="#projects">Projects</a></li>
//                 <li><a href="#education">Education</a></li>
//             </ul>
//         </nav>
//         <a href="https://github.com/theagrim0410" className="github-btn">Github Profile</a>
//     </header>
//     );
// }

// export default Header;


import "./Header.css";
import { useState } from "react";

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="ab">
            <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? "✖" : "☰"}
            </button>

            <div className="logo">Agrim Saxena</div>

            <nav className={isOpen ? "nav-open" : ""}>
                <ul>
                    <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
                    <li><a href="#skills" onClick={() => setIsOpen(false)}>Skills</a></li>
                    <li><a href="#certificate" onClick={() => setIsOpen(false)}>Certificate</a></li>
                    <li><a href="#projects" onClick={() => setIsOpen(false)}>Projects</a></li>
                    <li><a href="#education" onClick={() => setIsOpen(false)}>Education</a></li>
                   
                </ul>
            </nav>

            <a
                href="https://github.com/theagrim0410"
                className="github-btn"
                target="_blank"
                rel="noreferrer"
            >
                Github Profile
            </a>
        </header>
    );
}

export default Header;

