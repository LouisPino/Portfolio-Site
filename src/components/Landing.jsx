import { Link } from "react-router-dom";


function Landing(props) {
    return (
        <div className="home-main">
            <h2 id="welcome">LOUIS PINO</h2>
            <div className="welcome-btns">
                <Link to="/about"><button className="welcome-btn code-enter"><p className="welcome-btn-text">CODE</p></button></Link>
                <Link to="/music/about"><button className="welcome-btn music-enter"><p className="welcome-btn-text">MUSIC</p></button></Link>
            </div>
            <img className="chorale" src="/images/welcomegif.gif" />
        </div>

    )
}

export default Landing;
