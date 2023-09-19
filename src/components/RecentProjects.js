import { useState, useEffect } from "react";
import '../styles/projects.css'
function RecentProjects(props) {
  // create state to hold projects
  const [recentProjects, setRecentProjects] = useState(null);

  //create function to make api call
  const getProjectsData = async () => {
    //make api call and get response
    const response = await fetch("./projects.json");

    // turn response into javascript object
    const data = await response.json();

    // set the projects state to the data
    setRecentProjects(data);
  };

  // make an initial call for the data inside a useEffect, so it only happens once on component load
  useEffect(() => {
    getProjectsData();
  }, []);

  useEffect(()=>{
    if(recentProjects?.length){
      const recentEl = document.querySelector(".recent-projects-body")
      setTimeout(()=> recentEl.style.transform = "translateY(0px)"
      , 300)
    }

  },[recentProjects])

  // define a function that will return the JSX needed once we get the data
  const loaded = () => {
    return <section className="recent-projects-body">
      <h3 className="link">FEATURED WORK</h3>
    {recentProjects.map((project, idx) => {
      if(project.recent){
     return  <div className="project-card" key={project.name}>
        {idx%2 === 0 && <img className="project-image" src={project.image} />}
        <div className="project-info">
          <h1 className="here project-title">{project.name}</h1>
          <p>{project.description}</p>
          <div className="project-btns">
          {project.git &&    <a href={project.git} target="_blank">
           <button className="project-btn"><p className="project-btn-text">Github</p></button>
          </a>}
          <a href={project.live} target="_blank">
            <button className="project-btn"><p className="project-btn-text">{project.liveTitle}</p></button>
          </a>
        </div>
          <p className="tools">{project.tools}</p>
        </div>
        {idx%2 === 1 && <img className="project-image" src={project.image} />}
      </div>
   }})}
    </section>
  };

  return recentProjects ? loaded() : <h1>Loading...</h1>;
}

export default RecentProjects;
