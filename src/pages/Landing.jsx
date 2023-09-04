import { useEffect } from "react"
import Landing from "../components/Landing"
import Welcome from "../components/Welcome"

export default function Home(){
return(
<>
<Welcome message="WELCOME 2 MY SITE HAVE VERY FUN" time={1000}/>
<Landing />
</>

)
}