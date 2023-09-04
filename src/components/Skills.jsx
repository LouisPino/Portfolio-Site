import { useState, useEffect } from "react";

export default function Skills(){
    const [about, setAbout] = useState(null);

    // create function to make api call
    const getAboutData = async () => {
  
          // make api call and get response
      const response = await fetch("./about.json");
  
          // turn response into javascript object
      const data = await response.json();
  
          // set the about state to the data
      setAbout(data);
    };
  
    // make an initial call for the data inside a useEffect, so it only happens once on component load
    useEffect(() => { getAboutData() } , []);
  
if(about){
const skillsList = about.skills.map((skill)=>(
    <div className="skill-card">
        <img className="skill-logo" src={skill.logo}/>
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