import React from "react";
import "./Skills.css";

const Skills = () => {
    const skillCategories = [
        {
            title: "Languages",
            skills: ["Python", "JavaScript/TypeScript", "Java", "C++", "SQL"],
        },
        {
            title: "Web Development",
            skills: ["React", "Node.js", "HTML/CSS", "Express", "Next.js"],
        },
        {
            title: "Data & AI",
            skills: ["TensorFlow", "PyTorch", "Pandas", "Scikit-learn", "Data Visualization"],
        },
        {
            title: "Tools & Others",
            skills: ["Git/GitHub", "Docker", "AWS", "CI/CD", "Agile Development"],
        },
    ];

    return (
        <section id="skills" className="section-alt">
            <div className="container">
                <h2 className="section-title" data-aos="fade-up">
                    Technical <span className="gradient-text">Skills</span>
                </h2>
                <div className="skills-container">
                    {skillCategories.map((category, index) => (
                        <div
                            key={index}
                            className="skill-category"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <h3>{category.title}</h3>
                            <ul className="skill-list">
                                {category.skills.map((skill, i) => (
                                    <li key={i}>{skill}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
