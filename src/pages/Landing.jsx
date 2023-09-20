import Landing from "../components/Landing"
import Welcome from "../components/Welcome"

export default function Home(){
return(
<>
<Welcome message="WELCOME TO MY PORTFOLIO, COME ON IN!" time={1000}/>
<Landing />
</>

)
}