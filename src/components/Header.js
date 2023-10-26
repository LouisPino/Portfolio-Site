import { Link } from "react-router-dom";

import "../styles/header.css"
import { useEffect, useState } from "react";

function Header({ music, setMusic }) {
  let dropbtnContentEl = {}
  useEffect(() => {
    const hamburgerEl = document.querySelector(".hamburger");
    dropbtnContentEl = document.querySelector(".dropdown-content");
    hamburgerEl.addEventListener("click", showBurger)
    function showBurger() {
      if (dropbtnContentEl.style.display === "block") {
        dropbtnContentEl.style.display = "none";
      } else {
        dropbtnContentEl.style.display = "block";
      }
    }
  }, [])

  function hideBurger() {
    dropbtnContentEl = document.querySelector(".dropdown-content");
    dropbtnContentEl.style.display = "none";
  }

  function musicToggle() {

    setMusic((oldState) => !oldState)
    const flip = document.querySelectorAll(".flippable")
    for (let el of flip) {
      el.classList.add("flip")
      setTimeout(() => {
        el.classList.remove("flip")
      }, 500)
    }


  }


  let progress = document.getElementById("progressbar");
  let totalHeight = document.body.scrollHeight - window.innerHeight;
  window.onscroll = function () {
    let progressHeight = (window.scrollY / totalHeight) * 100;
    if (progress) {
      progress.style.height = progressHeight + "%";
    }
  }

  return (
    <header>
      <div id="progressbar"></div>
      <div id="scrollpath"></div>
      <div className="header-black"></div>
      <div className="header-content">
        <Link className="Link" to="/">
          <h1 className="name link">Louis Pino</h1>
        </Link>

        <nav>
          <Link to="/about">
            <button className="nav-btn about-btn"><p className=" nav-btn-text">ABOUT</p></button>
          </Link>
          <Link to="/projects">
            <button className="nav-btn projects-btn"><p className="link nav-btn-text">PROJECTS</p></button>
          </Link>
          <button className="nav-btn music-btn" onClick={musicToggle}><p className="link nav-btn-text flippable">{music ? "CODE" : "MUSIC"}</p></button>
        </nav>
      </div>
      <div className="dropbtn" id="hamburger-div">
        <img className="hamburger" src="/images/burger.png" />
        <div className="dropdown-content">
          <Link to="/about" className="burger-link" onClick={hideBurger}>
            <p className="burger-link-text link">ABOUT</p>
          </Link>
          <Link to="/projects" className="burger-link" onClick={hideBurger}>
            <p className="burger-link-text link">PROJECTS</p>
          </Link>
          <p className="burger-link burger-link-text link" onClick={() => {
            musicToggle()
            hideBurger()
          }}
          >{music ? "CODE" : "MUSIC"}</p>
        </div>
      </div>




    </header >
  );
}

export default Header;

