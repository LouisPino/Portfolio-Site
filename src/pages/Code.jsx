import Projects from "../components/Projects"
import Welcome from "../components/Welcome"
export default function Home({scrollPosition, setScrollPosition}){

return(
<>
<Welcome message="" time={0}/>
<Projects scrollPosition={scrollPosition} setScrollPosition={setScrollPosition}/>
</>

)
}