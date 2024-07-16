import React from "react";
import "./About.scss";

const About = () => {
  return (
    <div className="container">
      <section className="About">
        <h1 className="title">About Me</h1>
        <div className="content">
          <div className="img">My picture</div>
          {/* <img src={me.png} alt="Me" /> */}
          <div className="texts">
            <h1>Hi everyone!</h1>
            <h1>I'm Abubakir Saidxonov</h1>
            <p className="about_text">
              I am a website developer and I am currently gaining experience in
              this field. I am currently a Junior Front-End Developer. In the
              future, I want to start my own IT company
            </p>
            <p className="birthday">
              <span>Birthday:</span> 22.12.2005
            </p>
            <a
              target="_blank"
              href="https://docs.google.com/document/d/1Xvsocd7-zEIp8RjJhfjrpmzaDbG6Eenj/edit"
            >
              Open Resume
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;