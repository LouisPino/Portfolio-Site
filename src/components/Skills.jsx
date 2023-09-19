import { useState, useEffect, createRef } from "react";

export default function Skills(){
    const [about, setAbout] = useState(null);
    const getAboutData = async () => {
      const response = await fetch("./about.json");
      const data = await response.json();
      setAbout(data);
    };
let skillsList = []
    useEffect(() => { getAboutData() } , []);  


if(about){
 skillsList = about.skills.map((skill)=>(
    <div className="skill-card" key={skill.skill} >
        <img className="skill-logo shrunk" src={skill.logo} id={skill.skill} />
    <h4>{skill.skill}</h4>
    </div>
    )   
    )


let idx = 0
const logoInt= setInterval(()=>{
    if(idx < skillsList.length){
const currEl = document.getElementById(about.skills[idx].skill)
currEl.classList.remove("shrunk")
currEl.classList.add("intro-rotation")
    idx++
    }else{
        clearInterval(logoInt)
    }
}, 100)

    return(
    <div className="skills-ctr">
    {skillsList}
    </div>
    )
}

}