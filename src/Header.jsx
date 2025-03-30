import "./Header.css"

function Header(){
    return(
    <header className="ab">
        <div class="logo">&#9679; Agrim Saxena</div>
        <nav>
            <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#certificate">Certificate</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#education">Education</a></li>
            </ul>
        </nav>
        <a href="https://github.com/theagrim0410" class="github-btn">Github Profile</a>
    </header>
    );
}

export default Header