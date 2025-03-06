import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
            <div className="container navbar-container">
                <div className="logo">DevPortfolio</div>
                <div className="nav-links">
                    <Link to="projects" smooth={true} duration={500} offset={-70}>
                        Projects
                    </Link>
                    <Link to="skills" smooth={true} duration={500} offset={-70}>
                        Skills
                    </Link>
                    <Link to="about" smooth={true} duration={500} offset={-70}>
                        About
                    </Link>
                    <Link to="experience" smooth={true} duration={500} offset={-70}>
                        Experience
                    </Link>
                </div>
                <button className="cta-button">Contact Me</button>
            </div>
        </nav>
    );
};

export default Navbar;
