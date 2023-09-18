import { Link } from "react-router-dom";
import Skills from "../components/Skills"
import { useState, useEffect } from "react";
function AboutMe() {
  const [about, setAbout] = useState(null);
  const getAboutData = async () => {
    const response = await fetch("./about.json");
    const data = await response.json();
    setAbout(data);
  };

  useEffect(() => { getAboutData() } , []);
  useEffect(() => { 
    const gifEl = document.querySelector(".gif-ctr")
    const bioEl = document.querySelector("#about-bio")
    const aboutEl = document.querySelector(".about-main")
  } , [about]);

  const loaded = () => (
    <div className="about-main">  
  <div className="gif-ctr">
  <img src="/images/JazGif.gif"/>
</div>
<Link className="Link" to="/">
      <h1 className="name link about-name">Louis Pino</h1>
      </Link>
     <div className="about-card" id="about-bio">
      <p className="bio-text">{about.bio}</p>
    <Skills />
    </div>
    </div>
  );




  return about ? loaded() : <h1>Loading...</h1>;
}

export default AboutMe;