import React from "react";
import "./About.css";

const About = () => {
    return (
        <section id="about" className="section">
            <div className="container">
                <div className="about-content">
                    <div className="about-image" data-aos="fade-right">
                        <img src="/api/placeholder/400/450" alt="Profile" />
                    </div>
                    <div className="about-text" data-aos="fade-left">
                        <h2>
                            About <span className="gradient-text">Me</span>
                        </h2>
                        <p>
                            I'm a Computer Science student passionate about building innovative
                            solutions that solve real-world problems. My journey in programming
                            began when I was 15, and I've been hooked ever since.
                        </p>
                        <p>
                            I specialize in full-stack development and machine learning
                            applications, with a particular interest in AI ethics and accessible
                            technology. When I'm not coding, you can find me participating in
                            hackathons, contributing to open-source projects, or mentoring junior
                            developers.
                        </p>
                        <p>
                            Currently, I'm seeking internship opportunities where I can apply my
                            skills, learn from industry professionals, and make meaningful
                            contributions to impactful projects.
                        </p>
                        <button className="cta-button about-cta">Download Resume</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
