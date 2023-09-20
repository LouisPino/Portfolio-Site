import Welcome from "../components/Welcome"
import RecentProjects from "../components/RecentProjects"
import AboutMe from "../components/AboutMe"
export default function About({scrollPosition}){

return(
<>
<Welcome message="" time={0}/>
<AboutMe/>
<RecentProjects scrollPosition={scrollPosition}/>
</>

)
}