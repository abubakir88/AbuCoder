import React, { useEffect, useState } from "react";
import "./Hero.scss";
import { FaTelegram, FaLinkedin, FaGithub } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import code from "../../assets/code.png";

const App = () => {
  const [text, setText] = useState("");
  const fullText = "Frontend Developer";
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeoutId;
    if (!isDeleting && index < fullText.length) {
      timeoutId = setTimeout(() => {
        setText(fullText.substring(0, index + 1));
        setIndex(index + 1);
      }, 100);
    } else if (isDeleting && index > 0) {
      timeoutId = setTimeout(() => {
        setText(fullText.substring(0, index - 1));
        setIndex(index - 1);
      }, 100);
    } else if (index === fullText.length) {
      setTimeout(() => setIsDeleting(true), 1000);
    } else if (index === 0) {
      setIsDeleting(false);
    }
    return () => clearTimeout(timeoutId);
  }, [index, isDeleting, fullText]);

  return (
    <div className="container">
      <section className="hero">
        <div className="typewriter">
          <h1>
            Hello, I'm <br />
          </h1>
          <h1>Saidxonov Abubakir</h1>
          <h2 className="typewriter-text">{text}</h2>
          <div className="media">
            <a target="_blank" href="https://t.me/Abubakir_Dev">
              <FaTelegram />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/abubakir-saidxonov-3ab5772a1/"
            >
              <FaLinkedin />
            </a>
            <a target="_blank" href="https://github.com/abubakir88/">
              <FaGithub />
            </a>
            <a target="_blank" href="https://leetcode.com/u/Abubakir21/">
              <SiLeetcode />
            </a>
          </div>
        </div>
        <img src={code} alt="🥔" />
      </section>
    </div>
  );
};

export default App;
