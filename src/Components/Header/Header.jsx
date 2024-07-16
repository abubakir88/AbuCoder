import React, { useState } from "react";
import "./Header.scss";
import logo from "../../assets/logo.png";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="App">
      <nav className="navbar">
        <h1>
          <a href="#">
            <img src={logo} alt="My Website Logo" className="logo" />
          </a>
        </h1>
        <div className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          ☰
        </div>
      </nav>
    </div>
  );
}

export default App;
