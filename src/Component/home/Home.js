import React from "react";
import "./Home.css";
import logo from "../../image/q-logo-colourized.png";

function Home() {
  //fixed header
  window.addEventListener("scroll", function () {
    const header = this.document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 0);
  });

  return (
    <div className="Home" id="Home">
      <div className="header d__flex align__items__center pxy__30">
        <div className="logo">
          <img className="logo" src={logo} alt="" />
        </div>
        <div className="navbar pxy__30">
          <ul className="navbar d__flex">
            <a href="#Home">
              <li className="nav_items mx__15">Home</li>
            </a>
            <a href="#About">
              <li className="nav_items mx__15">About</li>
            </a>
            <a href="#Projects">
              <li className="nav_items mx__15">Projects</li>
            </a>
            <a href="#Contact">
              <li className="nav_items mx__15">Contact</li>
            </a>
          </ul>
        </div>

        {/* <div className="toggle__menu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-justify white pointer"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </div> */}

      </div>
      {/* Home Content */}
      <div className="container">
        <div className="home__content">
          <div className="home__meta">
            <div className="home__meta">
              <h1 className="home__text pz__10">Welcome</h1>
              <h2 className="home__text pz__10">Hi, I'm Quynh</h2>
              <h3 className="home__text pz__10 coral pz__10">JS Developer</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
