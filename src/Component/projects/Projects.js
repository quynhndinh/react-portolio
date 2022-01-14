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
        <p className="heading p__color">insert heading sample</p>
        <p className="heading p__color">insert heading sample</p>
      </div>

      <div className="container">
        <div className="row">
          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box_img pointer relative">
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
              <div className="project__box_img pointer relative">
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
              <div className="project__box_img pointer relative">
                <div className="project__img__box">
                  <img src={project3} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h5 className="project__text">Development</h5>
                <h4 className="project__text">Pokebeats</h4>
                <a href="https://negronmarc.github.io/Poke-Beats/" target="blank" className="project__btn deployed">
                  Deployed
                </a>
                <a href="https://github.com/negronmarc/Poke-Beats" target="blank" className="project__btn github">
                  Github
                </a>
              </div>
            </div>
          </div>

          <div className="view__mmore__btn d__flex align__items__center justify__content__center pxy__30">
            <button className="view__more pointer btn">View More</button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Projects;
