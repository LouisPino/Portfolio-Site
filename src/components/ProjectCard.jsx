
import '../styles/projects.css'

export default function ProjectCard({ project, idx }) {

    return <div className="project-card" key={project.name} id={idx} style={{ transform: idx === 0 || idx === 11 ? "translateX(0px)" : idx % 2 === 0 ? 'translateX(110vw)' : 'translateX(-110vw)' }}>
        {idx % 2 === 0 ?
            !project.embed && <img className="project-image" src={project.image} /> :
            project.embed && <iframe width="560" height="315" className={`project-iframe ${project.embedLink.includes('bandcamp') ? "bandcamp-iframe" : ""}`} src={`${project.embedLink}`} frameBorder="0"></iframe>
        }
        <div className="project-info">
            <h1 className="here project-title"> {project.name}</h1>
            <p>{project.description}</p>
            <div className="project-btns">
                {project.git && <a href={project.git} target="_blank">
                    <button className="project-btn"><p className="project-btn-text">Github</p></button>
                </a>}
                {!project.embed && <a href={project.live} target="_blank">
                    <button className="project-btn"><p className="project-btn-text">{project.liveTitle}</p></button>
                </a>}
            </div>
            <p className="tools">{project.tools}</p>
        </div>
        {
            idx % 2 === 1 ?
                !project.embed && <img className="project-image" src={project.image} /> :
                project.embed && <iframe width="560" height="315" className={`project-iframe ${project.embedLink.includes('bandcamp') ? "bandcamp-iframe" : ""}`} src={`${project.embedLink}/minimal=true/transparent=true/`} frameBorder="0"></iframe>
        }
    </div >
}