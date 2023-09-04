import { useEffect } from "react"
export default function Welcome({message, time}){
    useEffect(()=>{
        const welcomeEl = document.querySelector(".welcome-bg")
        setTimeout(()=>welcomeEl.style.top = (welcomeEl.offsetHeight*-1)+"px", time)
},[])
return(
    <>
    <div className="welcome-bg">
     <h1 className="welcome-msg">{message}</h1>
    </div>
    </>
)

}