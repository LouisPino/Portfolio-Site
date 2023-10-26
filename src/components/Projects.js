import { useState, useEffect } from "react";
import '../styles/projects.css'
import { useLocation } from "react-router";
function Projects({ scrollPosition, setScrollPosition, music, setMusic }) {
  const [projects, setProjects] = useState(null);
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
  }, []);

  const atAbout = useLocation().pathname.slice(-5) === "about"

  if (projects?.length) {
    const projectCards = projects.filter((project) => {
      if (atAbout && !project.recent) {
        return false
      } else {
        if (music) {
          if (project.music) {
            return true
          } else {
            return false
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
      // <div className="project-card" key={project.name} id={idx} style={{ transform: idx === 0 ? "translateX(100vw)" : idx % 2 === 0 ? 'translateX(100vw)' : 'translateX(-100vw)' }}>
      <div className="project-card" key={project.name} id={idx}>
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
        <h3 className="link">{atAbout ? "RECENT PROJECTS" : "PROJECTS"}</h3> :
        {projectCards}
      </section>
      :
      <h1 className="loading-h1">Loading...</h1>;
  }


}

export default Projects;
