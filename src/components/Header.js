import { Link } from "react-router-dom";

import "../styles/header.css"
import { useEffect } from "react";

function Header() {
useEffect(()=> {
  const hamburgerEl = document.querySelector(".hamburger");
  const dropbtnContentEl = document.querySelector(".dropdown-content");
   hamburgerEl.addEventListener("click", showBurger)
  function showBurger() {
    if (dropbtnContentEl.style.display === "block") {
      dropbtnContentEl.style.display = "none";
    } else {
      dropbtnContentEl.style.display = "block";
    }
  }
}, [])


  return (
    <header>
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
        {/* <Link to="/music"> */}
     <a href="https://www.louispino.com/" target="_blank" >
        <button className="nav-btn music-btn"><p className="link nav-btn-text">MUSIC</p></button>
        </a>
        {/* </Link> */}
      </nav>
      </div>
      {/* <img className="hamburger" src="/images/burger.png" /> */}
      <div className="dropbtn" id="hamburger-div">
      <img className="hamburger" src="/images/burger.png" />
          <div className="dropdown-content">
          <Link to="/about" className="burger-link">
         <p className="burger-link-text link">ABOUT</p>
        </Link>
          <Link to="/projects" className="burger-link">
         <p className="burger-link-text link">PROJECTS</p>
        </Link>
        <a className="burger-link-text link" href="https://www.louispino.com/" target="_blank" >MUSIC </a>
          </div>
          </div>

    </header>
  );
}

export default Header;

