import { Link, useLocation } from "react-router-dom";
import Skills from "../components/Skills";
import { useState, useEffect } from "react";
function AboutMe({ music, setMusic }) {
  const [about, setAbout] = useState(null);
  const getAboutData = async () => {
    const response = await fetch("./about.json");
    const data = await response.json();
    setAbout(data);
  };

  useEffect(() => {
    getAboutData();
  }, []);

  useEffect(() => {
    const gifEl = document.querySelector(".gif");
    const aboutEl = document.getElementById("about-bio");
    if (gifEl !== null && aboutEl !== null) {
      setTimeout(() => {
        gifEl.style.transform = "translateX(0px)"
        aboutEl.style.transform = "translateX(0px)"
      }
        , 10)
    }
  }, [about]);

  const loaded = () => (
    <div className="about-main">
      <div className="gif-ctr">
        <img className="gif" src="/images/pinogif.gif" />
      </div>
      <Link className="Link" to="/">
        <h1 className="name link about-name">Louis Pino</h1>
      </Link>{
        !music ?
          <div className="about-card" id="about-bio">
            <p className="bio-text">{about.bio}</p>
            <Skills />
          </div>
          :
          <div className="about-card" id="about-bio">
            <p className="bio-text">{about.musicbio}</p>
          </div>
      }
    </div>
  );
  return about ? loaded() : <h1 className="loading-h1">Loading...</h1>;
}

export default AboutMe;
