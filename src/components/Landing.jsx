import { Link } from "react-router-dom";


function Landing({ setMusic }) {
    return (
        <div className="home-main">
            <h2 id="welcome">LOUIS PINO</h2>
            <div className="welcome-btns">
                <Link to="/about"><button className="welcome-btn code-enter" onClick={() => setMusic(false)}><p className="welcome-btn-text">CODE</p></button></Link>
                <Link to="/about"><button className="welcome-btn music-enter" onClick={() => setMusic(true)}><p className="welcome-btn-text">MUSIC</p></button></Link>
            </div>
            <img className="chorale" src="/images/welcomegif.gif" />
        </div>

    )
}

export default Landing;
