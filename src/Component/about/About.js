import React from "react";
import "./About.css";
import aboutImg from "../../image/Profile.jpg";
import resumePdf from "../../image/resume.pdf";

function About() {
 
  return (
    <div className="About component_space" id="About">
      <div className="container">
        <div className="row">
          <div className="col_2">
            <img src={aboutImg} alt="" className="about_img"></img>
          </div>
          <div className="col_2">
            <h1 className="about_heading">About Me</h1>
            <div className="about_meta">
              <p className="about_text p_color">
                Student at Rutgers Coding bootcamp, starting a new career path.
                Currently learning HTML CSS and Javascript.
              </p>
              <p className="about_text p_color">
                Thank you for joining with me on this adventure of learning
              </p>
              <div className="about_button d_flex align_items_center">
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
