import { useState, useEffect } from "react";
import '../styles/projects.css'
import { useLocation } from "react-router";
import ProjectCard from "./ProjectCard"

function Projects({ scrollPosition, setScrollPosition, music, setMusic }) {
  const [projects, setProjects] = useState(null);
  const [musicChoice, setMusicChoice] = useState("percussion");
  const getProjectsData = async () => {
    const response = await fetch("./projects.json");
    const data = await response.json();
    setProjects(data);
  };
  useEffect(() => {
    getProjectsData();
  }, []);


  const atAbout = useLocation().pathname.slice(-5) === "about"

  useEffect(() => {
    setTimeout(() => {
      if (document.querySelector('.music-choices')) {
        document.querySelector('.music-choices').style.transform = "translate(0)"
      }
    }, 200)
  }, [music, musicChoice]);


  if (projects?.length) {
    let projectCards = projects.filter((project) => {
      if (atAbout && !project.recent) {
        return false
      } else {
        if (music) {
          if (project.music && !atAbout && project.category.includes(musicChoice)) {
            return true
          } else if (project.music && atAbout) {
            return true
          }
        } else {
          if (project.tech && !atAbout && project.category.includes(musicChoice)) {
            return true
          } else if (project.tech && atAbout) {
            return true
          } else {
            return false
          }
        }
      }
    }).map((project, idx) => (
      <ProjectCard project={project} idx={idx} />
    ))

    // const featured = projects.filter((project) => (project.feature ? true : false))[0]
    // if (music && atAbout) {
    //   projectCards.unshift(<ProjectCard project={featured} idx={11} />)
    // } else if (music && musicChoice === 'electronics') {
    //   projectCards.unshift(<ProjectCard project={featured} idx={101} />)
    // } else if (music && featured.category.split(', ').indexOf(musicChoice) >= 0) {
    //   projectCards.push(<ProjectCard project={featured} idx={projectCards.length % 2 !== 0 ? 101 : 102} />)
    // } else if (!music) {
    //   projectCards.push(<ProjectCard project={featured} idx={projectCards.length % 2 !== 0 ? 101 : 102} />)
    // }

    return projects ?
      <section className="projects-body">
        <div className="card-color"></div>
        <h3 className="link flippable" id="project-comp-title">{atAbout ? `RECENT ${music ? "MUSIC" : "CODE"} PROJECTS` : `${music ? "MUSIC" : "CODE"} PROJECTS`}</h3>
        {music ?
          !atAbout && <div className="music-choices">
            <button className="music-choice-btn">
              <h2 className={`music-choice link ${musicChoice === 'percussion' ? " here selected-choice" : ""}`} onClick={(e) => { setMusicChoice('percussion'); }}>
                PERCUSSION
              </h2>
            </button>

            <button className="music-choice-btn">
              <h2 className={`music-choice link ${musicChoice === 'electronics' ? " here selected-choice" : ""}`} onClick={(e) => { setMusicChoice('electronics'); }}>
                ELECTRONICS
              </h2>
            </button>
            <button className="music-choice-btn">
              <h2 className={`music-choice link ${musicChoice === 'composition' ? " here selected-choice" : ""}`} onClick={(e) => { setMusicChoice('composition'); }}>
                COMPOSITION
              </h2>
            </button>
            <button className="music-choice-btn">
              <h2 className={`music-choice link ${musicChoice === 'arrangements' ? " here selected-choice" : ""}`} onClick={(e) => { setMusicChoice('arrangements'); }}>
                ARRANGEMENTS
              </h2>
            </button>
          </div>
          :
          !atAbout && <div className="music-choices">
            <button className="music-choice-btn">
              <h2 className={`music-choice link ${musicChoice === 'projects' ? " here selected-choice" : ""}`} onClick={(e) => { setMusicChoice('projects'); }}>
                PROJECTS
              </h2>
            </button>

            <button className="music-choice-btn">
              <h2 className={`music-choice link ${musicChoice === 'videos' ? " here selected-choice" : ""}`} onClick={(e) => { setMusicChoice('videos'); }}>
                VIDEOS
              </h2>
            </button>
          </div>
        }
        {projectCards}
      </section>
      :
      <h1 className="loading-h1">Loading...</h1>;
  }
}

export default Projects;
