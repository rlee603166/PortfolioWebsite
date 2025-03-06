import React from "react";
import "./Experience.css";

const Experience = () => {
    const experiences = [
        {
            id: 1,
            title: "Software Engineering Intern",
            date: "June 2024 - August 2024",
            description:
                "Developed and maintained web applications using React and Node.js. Collaborated with the team to implement new features and fix bugs.",
        },
        {
            id: 2,
            title: "Research Assistant",
            date: "January 2024 - May 2024",
            description:
                "Assisted in research on machine learning applications in healthcare. Implemented algorithms and analyzed results using Python and TensorFlow.",
        },
        {
            id: 3,
            title: "Web Development Freelancer",
            date: "May 2023 - December 2023",
            description:
                "Built custom websites for small businesses and startups. Managed client relationships and delivered projects on time.",
        },
        {
            id: 4,
            title: "Coding Bootcamp Teaching Assistant",
            date: "September 2022 - April 2023",
            description:
                "Helped students learn web development fundamentals. Provided code reviews and one-on-one assistance with assignments.",
        },
    ];

    return (
        <section id="experience" className="section-alt">
            <div className="container">
                <h2 className="section-title" data-aos="fade-up">
                    Work <span className="gradient-text">Experience</span>
                </h2>
                <div className="timeline">
                    {experiences.map((exp, index) => (
                        <div
                            key={exp.id}
                            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
                            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                        >
                            <div className="timeline-content">
                                <h3>{exp.title}</h3>
                                <span className="date">{exp.date}</span>
                                <p>{exp.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
