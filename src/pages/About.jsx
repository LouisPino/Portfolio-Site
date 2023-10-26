import Welcome from "../components/Welcome"
import AboutMe from "../components/AboutMe"
import Projects from "../components/Projects"

export default function About({ scrollPosition, setScrollPosition }) {

    return (
        <>
            <Welcome message="" time={0} />
            <AboutMe />
            <Projects scrollPosition={scrollPosition} setScrollPosition={setScrollPosition} />
        </>

    )
}