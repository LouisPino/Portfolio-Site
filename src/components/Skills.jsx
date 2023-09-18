import { useState, useEffect, createRef } from "react";

export default function Skills(){
    const [about, setAbout] = useState(null);
    const getAboutData = async () => {
      const response = await fetch("./about.json");
      const data = await response.json();
      setAbout(data);
    };

    useEffect(() => { getAboutData() } , []);  



if(about){
const skillsList = about.skills.map((skill)=>(
    <div className="skill-card">
        <img className="skill-logo " src={skill.logo}/>
    <h4>{skill.skill}</h4>
    </div>
    )   
    )
    return(
        <div className="skills-ctr">
    {skillsList}
    </div>
    )
}

}