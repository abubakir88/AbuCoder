import React, { useState, useEffect } from "react";
import "./Header.scss";
import logo from "../../assets/logo.png";
import { FaArrowUp } from "react-icons/fa"; // Font Awesome Icon

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowBackToTop(true);
    } else {
      setShowBackToTop(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <nav className="navbar">
        <h1>
          <a href="#">
            <img src={logo} alt="My Website Logo" className="logo" />
          </a>
        </h1>
        <div className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <a href="#">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#works">Works</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          ☰
        </div>
      </nav>
      {showBackToTop && (
        <div className="back-to-top" onClick={scrollToTop}>
          <FaArrowUp />
        </div>
      )}
    </div>
  );
}

export default Header;
