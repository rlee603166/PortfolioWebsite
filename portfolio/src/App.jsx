import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";

function App() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            mirror: false,
        });
    }, []);

    return (
        <Router>
            <div className="App">
                <Navbar />
                <Hero />
                <Projects />
                <Skills />
                <About />
                <Experience />
                <Footer />
            </div>
        </Router>
    );
}

export default App;
