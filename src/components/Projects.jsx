import React from "react";
import ProjectCard from "./ProjectCard";
import "./Projects.css";

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "Machine Learning Model",
            description:
                "A deep learning model that predicts user behavior based on historical data patterns.",
            image: "/api/placeholder/400/320",
            tags: ["Python", "TensorFlow", "Data Science"],
        },
        {
            id: 2,
            title: "Task Management App",
            description:
                "A full-stack web application for managing tasks with real-time updates and team collaboration.",
            image: "/api/placeholder/400/320",
            tags: ["React", "Node.js", "MongoDB"],
        },
        {
            id: 3,
            title: "Algorithm Visualizer",
            description:
                "Interactive tool for visualizing common algorithms to help students understand complex concepts.",
            image: "/api/placeholder/400/320",
            tags: ["JavaScript", "D3.js", "Algorithms"],
        },
    ];

    return (
        <section id="projects" className="section">
            <div className="container">
                <h2 className="section-title" data-aos="fade-up">
                    Featured <span className="gradient-text">Projects</span>
                </h2>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={project.id} data-aos="fade-up" data-aos-delay={index * 100}>
                            <ProjectCard project={project} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
