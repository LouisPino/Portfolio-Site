import { Link } from "react-router-dom";


function Landing(props) {
    return( 
<div className="home-main">
    <div className="black"></div>
    <h2 id="welcome">Louis Pino</h2>
    <Link to="/about"><button className="welcome-btn code-enter"><p className="welcome-btn-text">CODE</p></button></Link>
    <a href="https://www.louispino.com" target="_blank"><button className="welcome-btn music-enter"><p className="welcome-btn-text">MUSIC</p></button></a>
<video className="chorale" src="/images/invert.mov" muted autoPlay loop></video>
{/* <video className="chorale"  type="video/youtube" src="https://www.youtube.com/watch?v=QUNrBEhvXWQ" muted autoPlay loop></video> */}

    </div>
    
    )
  }
  
  export default Landing;
