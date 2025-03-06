import React from "react";
import { Link } from "react-scroll";
import "./Hero.css";

const Hero = () => {
    return (
        <section className="hero">
            <div className="container">
                <div className="hero-content" data-aos="fade-right">
                    <h1>
                        Building <span className="gradient-text">Innovative</span> Solutions With
                        Code
                    </h1>
                    <p>
                        CS student passionate about software development, AI, and creating impactful
                        projects.
                    </p>
                    <Link to="projects" smooth={true} duration={800}>
                        <button className="cta-button">View My Work</button>
                    </Link>
                </div>
            </div>
            <div className="glowing-shape shape-1"></div>
            <div className="glowing-shape shape-2"></div>
        </section>
    );
};

export default Hero;
