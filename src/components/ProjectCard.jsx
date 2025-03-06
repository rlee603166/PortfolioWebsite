import React from "react";
import "./ProjectCard.css";

const ProjectCard = ({ project }) => {
    return (
        <div className="project-card">
            <div className="project-image">
                <img src={project.image} alt={project.title} />
            </div>
            <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tags">
                    {project.tags.map((tag, index) => (
                        <span key={index} className="tag">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
