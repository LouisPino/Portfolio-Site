import { useState, useEffect } from "react";
import '../styles/projects.css'
function Projects({scrollPosition}) {
  const [projects, setProjects] = useState(null);

  const getProjectsData = async () => {
    const response = await fetch("./projects.json");
    const data = await response.json();
    setProjects(data);
  };

  useEffect(() => {
    getProjectsData();
  }, []);

console.log(scrollPosition)



  const loaded = () => {
    return <section className="projects-body">
      <div className="card-color"></div>
      <h3 className="link">PROJECTS</h3>
    {projects.map((project, idx) => (
      <div className="project-card" key={project.name}>
        {idx%2 === 0 && <img className="project-image" src={project.image} />}
        <div className="project-info">
          <h1 className="here project-title"> {project.name}</h1>
          <p>{project.description}</p>
          <div className="project-btns">
          {project.git &&    <a href={project.git} target="_blank">
           <button className="project-btn"><p className="project-btn-text">Github</p></button>
          </a>}
          <a href={project.live} target="_blank">
            <button className="project-btn"><p className="project-btn-text">{project.liveTitle}</p></button>
          </a>
        </div>
          <p>{project.tools}</p>
        </div>
        {idx%2 === 1 && <img className="project-image" src={project.image} />}
      </div>
    ))}
    </section>
  };






  return projects ? loaded() : <h1>Loading...</h1>;
}

export default Projects;
