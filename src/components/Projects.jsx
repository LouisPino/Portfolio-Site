import { useState, useEffect } from "react";
import '../styles/projects.css'
import { useLocation } from "react-router";

function Projects({ scrollPosition, setScrollPosition, music, setMusic }) {
  const [projects, setProjects] = useState(null);
  const [musicChoice, setMusicChoice] = useState("percussion");
  const [limit, setLimit] = useState(1);
  const [count, setCount] = useState(0);
  const getProjectsData = async () => {
    const response = await fetch("./projects.json");
    const data = await response.json();
    setProjects(data);
  };
  useEffect(() => {
    getProjectsData();
    setScrollPosition(0)
    setCount(0)
    setLimit(1)
  }, []);

  const atAbout = useLocation().pathname.slice(-5) === "about"

  useEffect(() => {
    setCount(0)
    setLimit(1)
    setTimeout(() => {
      if (music && !atAbout) {
        document.querySelector('.music-choices').style.transform = "translate(0)"
      }
    }, 200)
  }, [music, musicChoice]);






  if (projects?.length) {
    const projectCards = projects.filter((project) => {
      if (atAbout && !project.recent) {
        return false
      } else {
        if (music) {
          if (project.music && !atAbout && project.category.split(', ').indexOf(musicChoice) >= 0) {
            return true
          } else if (project.music && atAbout) {
            return true
          }
        } else {
          if (project.tech) {
            return true
          } else {
            return false
          }
        }
      }
    }).map((project, idx) => (
      <div className="project-card" key={project.name} id={idx} style={{ transform: idx === 0 ? "translateX(100vw)" : idx % 2 === 0 ? 'translateX(100vw)' : 'translateX(-100vw)' }}>
        {setScrollPosition(1)}
        {idx % 2 === 0 && <img className="project-image" src={project.image} />}
        <div className="project-info">
          <h1 className="here project-title"> {project.name}</h1>
          <p>{project.description}</p>
          <div className="project-btns">
            {project.git && <a href={project.git} target="_blank">
              <button className="project-btn"><p className="project-btn-text">Github</p></button>
            </a>}
            <a href={project.live} target="_blank">
              <button className="project-btn"><p className="project-btn-text">{project.liveTitle}</p></button>
            </a>
          </div>
          <p className="tools">{project.tools}</p>
        </div>
        {idx % 2 === 1 && <img className="project-image" src={project.image} />}
      </div>
    ))

    function getScrollFraction() {
      if (count < projectCards.length) {
        if (scrollPosition >= limit) {
          const currentProjectEl = document.getElementById(projectCards[count].props.id)
          if (currentProjectEl) {
            currentProjectEl.style.transform = "translateX(0px)"
          }
          setLimit(currentProjectEl.getBoundingClientRect().top + (count * 500))
          setCount(count + 1)
        }
      }
    }
    getScrollFraction()


    return projects ?
      <section className="projects-body">
        <div className="card-color"></div>
        <h3 className="link flippable" id="project-comp-title">{atAbout ? `RECENT ${music ? "MUSIC" : "CODE"} PROJECTS` : `${music ? "MUSIC" : "CODE"} PROJECTS`}</h3>
        {music && !atAbout && <div className="music-choices">
          <button className="music-choice-btn">
            <h2 className={`music-choice link ${musicChoice === 'percussion' ? " here" : ""}`} onClick={(e) => { setMusicChoice('percussion'); }}>
              PERCUSSION
            </h2>
          </button>
          <button className="music-choice-btn">
            <h2 className={`music-choice link ${musicChoice === 'electronics' ? " here" : ""}`} onClick={(e) => { setMusicChoice('electronics'); }}>
              ELECTRONICS
            </h2>
          </button>
          <button className="music-choice-btn">
            <h2 className={`music-choice link ${musicChoice === 'composition' ? " here" : ""}`} onClick={(e) => { setMusicChoice('composition'); }}>
              COMPOSITION
            </h2>
          </button>
          <button className="music-choice-btn">
            <h2 className={`music-choice link ${musicChoice === 'arrangements' ? " here" : ""}`} onClick={(e) => { setMusicChoice('arrangements'); }}>
              ARRANGEMENTS
            </h2>
          </button>
        </div>}
        {projectCards}
      </section>
      :
      <h1 className="loading-h1">Loading...</h1>;
  }


}

export default Projects;
