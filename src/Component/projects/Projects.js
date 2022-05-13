import React from "react";
import "./Projects.css";
import project1 from "../../image/food.png";
import project2 from "../../image/alarm-clock.jpg";
import project3 from "../../image/pokemon-bike.jpg";   


function Projects() {
  return (
    <div className="Project component__space" id="Projects">
      <div className="heading">
        <h1 className="heading">Projects</h1>
        <p className="heading p__color">Here are some of my recently </p>
        <p className="heading p__color">worked on projects</p>
      </div>

      <div className="container">
        <div className="row">
          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={project1} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h5 className="project__text">Development</h5>
                <h4 className="project__text">Food For Days</h4>
                <a href="https://food-for-days.herokuapp.com/" target="blank" className="project__btn deployed">
                  Deployed
                </a>
                <a href="https://github.com/quynhndinh/Food-For-Days" target="blank" className="project__btn github">
                  Github
                </a>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={project2} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h5 className="project__text">Development</h5>
                <h4 className="project__text">Dayplanner</h4>
                <a href="https://quynhndinh.github.io/daily-planner/" target="blank" className="project__btn deployed">
                  Deployed
                </a>
                <a href="https://github.com/quynhndinh/daily-planner" target="blank" className="project__btn github">
                  Github
                </a>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={project3} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h5 className="project__text">Development</h5>
                <h4 className="project__text">Pokebeats</h4>
                <a href="https://negronmarc.github.io/PokeBeats/index.html" target="blank" className="project__btn deployed">
                  Deployed
                </a>
                <a href="https://github.com/negronmarc/PokeBeats" target="blank" className="project__btn github">
                  Github
                </a>
              </div>
            </div>
          </div>

          {/* <div className="view_mmore_btn d_flex align_items_center justify_content_center pxy_30">
            <button className="view_more pointer btn">View More</button>
          </div> */} {/* wanted to included a view more button but cant figure out the documentations (future development) */}

        </div>
      </div>
    </div>
  );
}

export default Projects;
