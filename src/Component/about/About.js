import React from "react";
import "./About.css";
import aboutImg from "../../image/Profile.jpg";
import resumePdf from "../../image/resume.pdf";

function About() {
 
  return (
    <div className="About component__space" id="About">
      <div className="container">
        <div className="row">
          <div className="col__2">
            <img src={aboutImg} alt="" className="about__img"></img>
          </div>
          <div className="col__2">
            <h1 className="about__heading">About Me</h1>
            <div className="about__meta">
              <p className="about__text p__color">
                Student at Rutgers Coding bootcamp, starting a new career path.
                Currently learning HTML CSS and Javascript.
              </p>
              <p className="about__text p__color">
                Thank you for joining with me on this learning adventure.
              </p>
              <div className="about__button d__flex align__items__center">
                <a
                  className="about btn1 pointer"
                  href={resumePdf}
                  download="Quynh Dinh Resume"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  <button className="about btn1 pointer">Resume</button>
                </a>

                <a href="#Contact">
                  <button className="about btn2 pointer">Contact</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
