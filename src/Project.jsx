import "./Project.css";
import { glow} from "./project";



function Projects(){
    useEffect(() => {
            glow(); 
        }, []);

    return(
        <section id="projects">
        <h1>My Portfolio</h1>
        <p>I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects.</p>
        <div class="filter-buttons">
            <button onclick="filterProjects('all')">All</button>
            <button onclick="filterProjects('mobile')">Mobile Application</button>
            <button onclick="filterProjects('website')">Website</button>
            <button onclick="filterProjects('ml')">Machine Learning</button>
        </div>
        <div className="projects-container">
            <div className="project-card" data-category="mobile">
                {/* <img src={image_pro1} width="100%"/> */}
                <h3>AI Razain Jewellery</h3>
                <p>March 2020 - May 2020</p>
                <p>A WooCommerce application.</p>
                <div class="tags">
                    <span className="tag">Kotlin</span>
                    <span className="tag">XML</span>
                    <span className="tag">Android Studio</span>
                </div>
            </div>
            <div className="project-card" data-category="mobile">
                {/* <img src="pharmacy_app.png" width="100%"/> */}
                <h3>LR Pharmacy App And Admin Panel</h3>
                <p>June 2020 - June 2020</p>
                <p>Mobile and Admin Panel App.</p>
                <div class="tags">
                    <span className="tag">Java</span>
                    <span className="tag">Laravel</span>
                    <span className="tag">Android Studio</span>
                </div>
            </div>
            <div class="project-card" data-category="website">
                {/* <img src="car_rental.png" width="100%"/> */}
                <h3>Car Rental Project Website</h3>
                <p>June 2020 - June 2020</p>
                <p>Website with Admin Panel.</p>
                <div class="tags">
                    <span className="tag">Laravel</span>
                    <span className="tag">PHP</span>
                    <span className="tag">Admin Panel</span>
                </div>
            </div>
        </div>
    </section>
    );
}


export default Projects;