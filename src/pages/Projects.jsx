import Projects from "../components/Projects"
import Welcome from "../components/Welcome"
export default function ProjectsPage({ scrollPosition, setScrollPosition, music, setMusic }) {

    return (
        <div className='projects-page'>
            <Welcome message="" time={0} />
            <Projects scrollPosition={scrollPosition} setScrollPosition={setScrollPosition} music={music} setMusic={setMusic} />
        </div>

    )
}