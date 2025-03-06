import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="footer-content">
                    <div className="logo">DevPortfolio</div>
                    <div className="social-links">
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                            GitHub
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            LinkedIn
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            Twitter
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
