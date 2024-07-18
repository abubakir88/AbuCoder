import React from "react";
import "./Work.scss";
import work_1 from "../../assets/work_1.png";
import work_2 from "../../assets/work_2.png";
import work_3 from "../../assets/work_3.png";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const Work = () => {
  return (
    <div className="container">
      <section id="works">
        <h1>My Works</h1>
        <div className="works">
          <div className="work">
            <img src={work_1} alt="Work-1" />
            <div className="texts">
              <h3>Crypto view project</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Doloribus quis tempora ea similique suscipit!
              </p>
              <b>
                <span>Tech stacks: </span> SASS ReactJs Apexcharts
              </b>
              <div className="links">
                <a href="https://cryptowatchuz.vercel.app/" target="_blank">
                  <FaExternalLinkAlt />
                  Live Preview
                </a>
                <a
                  href="https://github.com/abubakir88/cryptowatchuz"
                  target="_blank"
                >
                  <FaGithub />
                  Code view
                </a>
              </div>
            </div>
          </div>
          <div className="work">
            <img src={work_2} alt="Work-1" />
            <div className="texts">
              <h3>Spotify clone project</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Doloribus quis tempora ea similique suscipit!
              </p>
              <b>
                <span>Tech stacks: </span> SASS ReactJs API
              </b>
              <div className="links">
                <a href="https://spotify-cloneuz.vercel.app/" target="_blank">
                  <FaExternalLinkAlt />
                  Live Preview
                </a>
                <a
                  href="https://github.com/abubakir88/spotify-cloneuz"
                  target="_blank"
                >
                  <FaGithub />
                  Code view
                </a>
              </div>
            </div>
          </div>
          <div className="work">
            <img src={work_3} alt="Work-1" />
            <div className="texts">
              <h3>Spotify clone project</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Doloribus quis tempora ea similique suscipit!
              </p>
              <b>
                <span>Tech stacks: </span> SASS ReactJs API
              </b>
              <div className="links">
                <a href="https://nornlight-uz.vercel.app/" target="_blank">
                  <FaExternalLinkAlt />
                  Live Preview
                </a>
                <a
                  href="https://github.com/abubakir88/nornlight-uz"
                  target="_blank"
                >
                  <FaGithub />
                  Code view
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Work;
