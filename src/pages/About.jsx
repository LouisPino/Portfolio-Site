import Welcome from "../components/Welcome"
import RecentProjects from "../components/RecentProjects"
import AboutMe from "../components/AboutMe"
import Skills from "../components/Skills"
import { useEffect, useState } from "react"
export default function About({scrollPosition}){

console.log(scrollPosition)

return(
<>
<Welcome message="" time={0}/>
<AboutMe/>
<RecentProjects scrollPosition={scrollPosition}/>
</>

)
}