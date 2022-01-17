import React from "react";
import "./About.css";
import aboutImg from "../../image/Profile.jpg";
import resumeImg from "../../image/resume.png";

function About() {
  //up to top btn
  window.addEventListener("scroll", function () {
    const upToTop = this.document.querySelector("a.bottom__to__top");
    upToTop.classList.toggle("active", window.scrollY > 0);
  });

  // document.querySelector('#resumeBtn').addEventListener('click', openResumeImg);

  // function openResumeImg () {
    
  // }

  // })

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
                Thank you for joining with me on this adventure of learning 
              </p>
              <div className="about__button d__flex align_items_center">
                <a>
                  <button id='resumeBtn' className="about btn1 pointer">Resume</button>
                </a>
                <a href="#Contact">
                  <button className="about btn2 pointer">Contact</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Up to Top Btn */}
      <div className="bottom__to__top__btn">
        <a href="#" className="bottom__to__top">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-chevron-up white"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default About;
