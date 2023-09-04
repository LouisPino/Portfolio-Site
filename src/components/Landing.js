import { Link } from "react-router-dom";


function Landing(props) {
    return( 
<div className="home-main">
    {/* <div className="black"></div> */}
    <h2 id="welcome">LOUIS PINO</h2>
    <Link to="/about"><button className="welcome-btn code-enter"><p className="welcome-btn-text">CODE</p></button></Link>
    <a href="https://www.louispino.com" target="_blank"><button className="welcome-btn music-enter"><p className="welcome-btn-text">MUSIC</p></button></a>
    
    <iframe className="chorale" src="https://www.youtube.com/embed/9fX7OuVV4Tc?si=3QepVtMwVfLCb5xK&amp;controls=0&amp;start=7&amp;autoplay=1&amp;mute=1&amp;playsinline=1&amp;playlist=9fX7OuVV4Tc&amp;loop=1&amp;showinfo=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen ></iframe>
    </div>
    
    )
  }
  
  export default Landing;