import { useState, useEffect } from "react";
import '../styles/projects.css'
function Projects(props) {
  // create state to hold projects
  const [projects, setProjects] = useState(null);

  //create function to make api call
  const getProjectsData = async () => {
    //make api call and get response
    const response = await fetch("./projects.json");

    // turn response into javascript object
    const data = await response.json();

    // set the projects state to the data
    setProjects(data);
  };

  // make an initial call for the data inside a useEffect, so it only happens once on component load
  useEffect(() => {
    getProjectsData();
  }, []);

  // define a function that will return the JSX needed once we get the data
  const loaded = () => {
     
    return <section className="projects-body">
      <h3 className="here">PROJECTS</h3>
    {projects.map((project, idx) => (
      <div className="project-card">
        {idx%2 === 0 && <img className="project-image" src={project.image} />}
        <div className="project-info">
          <h1 className="here"> {project.name}</h1>
          <p>{project.description}</p>
          <div className="project-btns">
          {project.git &&    <a href={project.git}>
           <button>Github</button>
          </a>}
          <a href={project.live}>
            <button>{project.liveTitle}</button>
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
