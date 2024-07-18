import React, { useEffect, useRef } from "react";
import "./Skills.scss";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import sass from "../../assets/sass.png";
import bootsrap from "../../assets/bootsrap.jfif";
import tailwind from "../../assets/tailwind.png";
import material from "../../assets/material.png";
import js from "../../assets/js.png";
import react from "../../assets/react.png";
import git from "../../assets/git.png";

const Carousel = () => {
  const carouselInnerRef = useRef(null);

  useEffect(() => {
    const carouselInner = carouselInnerRef.current;
    const items = carouselInner.children;
    const itemCount = items.length;

    for (let i = 0; i < itemCount * 2; i++) {
      const clone = items[i % itemCount].cloneNode(true);
      carouselInner.appendChild(clone);
    }

    carouselInner.addEventListener("mouseenter", () => {
      carouselInner.style.animationPlayState = "paused";
    });

    carouselInner.addEventListener("mouseleave", () => {
      carouselInner.style.animationPlayState = "running";
    });
  }, []);

  return (
    <div className="carousel" id="skills">
      <h1 className="title">My Skills</h1>
      <div className="carousel-inner" ref={carouselInnerRef}>
        <div className="carousel-item">
          <img src={html} alt="HTML" />
          <h3>HTML</h3>
        </div>
        <div className="carousel-item">
          <img src={css} alt="CSS" />
          <h3>CSS</h3>
        </div>
        <div className="carousel-item">
          <img src={sass} alt="SASS" />
          <h3>SASS</h3>
        </div>
        <div className="carousel-item">
          <img src={bootsrap} alt="Bootsrap" />
          <h3>Bootsrap</h3>
        </div>
        <div className="carousel-item">
          <img src={tailwind} alt="Tailwind" />
          <h3>Tailwind</h3>
        </div>
        <div className="carousel-item">
          <img src={material} alt="Material" />
          <h3>Material</h3>
        </div>
        <div className="carousel-item">
          <img src={js} alt="Javascript" />
          <h3>Javascript</h3>
        </div>
        <div className="carousel-item">
          <img src={react} alt="React" />
          <h3>React</h3>
        </div>
        <div className="carousel-item">
          <img src={git} alt="Git" />
          <h3>Git</h3>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
