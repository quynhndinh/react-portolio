import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../image/q-logo-colourized.png";

function Navbar() {
  // fixed Header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 0);
  });
   //up to top btn
   window.addEventListener("scroll", function () {
    const upToTop = this.document.querySelector("a.bottom__to__top");
    upToTop.classList.toggle("active", window.scrollY > 0);
  });
  // Toogle Menu
   const [show, setShow] = useState(true);
  return (
    <div className="Navbar" id="navbar">
      <div className="header d__flex align__items__center pxy__30">
        <div className="logo">
          <img className="logo" src={logo} alt="" />
        </div>
        <div className="navigation pxy__30">
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
                <li className="nav__items mx__15">Contact</li>
              </a>
            </ul>
          </div>
          {/* Toogle Menu */}
          <div className="toggle__menu">
            <svg onClick={() => setShow(!show)}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-justify white pointer"
              viewBox="0 0 16 16"
            >
                      <path
                fill-rule="evenodd"
                d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </div>
          {show ?(
          <div className="sideNavbar">
              <ul className="sidebar d__flex">
              <li className="sideNavbar">
              <a href="#home">Home</a>
            </li>
            <li className="sideNavbar">
              <a href="#about">About</a>
            </li>
            <li className="sideNavbar">
              <a href="#Projects">Projects</a>
            </li>
            <li className="sideNavbar">
              <a href="#Contact">Contact</a>
            </li>
            
              </ul>
          </div>
           ) : null}
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

export default Navbar;
