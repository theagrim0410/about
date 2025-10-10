import "./Skills.css";

const skills = [
  {
    category: "Frontend",
    skills: ["React Js", "React Native" , "HTML", "CSS", "JavaScript"],
  },
  {
    category: "Backend",
    skills: ["Node Js", "Python Flask", "MySQL", "PostgreSQL" , "MongoDB"],
  },
  {
    category: "Languages",
    skills: ["Java", "C/C++", "Python"],
  },
  {
    category: "Others",
    skills: ["Git","Github"],
  },
];

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <h2 className="skills-title">Skills</h2>
      <p className="skills-subtitle">
        Here are some of my skills on which I have been working.
      </p>
      <div className="skills-grid">
        {skills.map((category, index) => (
          <div key={index} className="skills-card">
            <h3 className="category-title">{category.category}</h3>
            <div className="skills-list">
              {category.skills.map((skill, idx) => (
                <span key={idx} className="skill-item">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
