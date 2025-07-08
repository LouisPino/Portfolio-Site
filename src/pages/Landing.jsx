import Landing from "../components/Landing"
import Welcome from "../components/Welcome"

export default function LandingPage({ setMusic }) {
    return (
        <>
            {/* <Welcome message="LOUIS PINO" message2="Code Composer || Sound Scripter" time={1000} /> */}
            <Landing setMusic={setMusic} />
        </>

    )
}