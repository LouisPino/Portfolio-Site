import { Link } from "react-router-dom";

import "../styles/header.css"

function Header() {

  //an example of an inline style for the nav tag for an initial layout - later additions, or 



  return (
    <header>
      <div className="header-black"></div>
      <div className="header-content">
      <Link className="Link" to="/">
      <h1 className="name link">Louis Pino</h1>
      </Link>

            <nav>
        <Link to="/about">
          <button className="nav-btn about-btn"><p className="link nav-btn-text">ABOUT</p></button>
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
    </header>
  );
}

export default Header;

