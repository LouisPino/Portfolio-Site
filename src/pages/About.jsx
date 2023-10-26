import Welcome from "../components/Welcome"
import AboutMe from "../components/AboutMe"
import Projects from "../components/Projects"

export default function About({ scrollPosition, setScrollPosition, music, setMusic }) {

    return (
        <>
            <Welcome message="" time={0} />
            <AboutMe music={music} setMusic={setMusic} />
            <Projects scrollPosition={scrollPosition} setScrollPosition={setScrollPosition} music={music} setMusic={setMusic} />
        </>

    )
}