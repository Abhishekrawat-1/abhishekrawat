// src/components/SkillsList.js
import React, { useState,useEffect } from 'react';
import SkillBar from './SkillBar';
import '../scss/skills.scss';
import axios from "axios";



// const skills = [
//   { skill: 'HTML', percentage: 95, color: '#6a1b9a' },
//   { skill: 'CSS', percentage: 85, color: '#fbc02d' },
//   { skill: 'PHP', percentage: 90, color: '#d32f2f' },
//   { skill: 'Javascript', percentage: 90, color: '#f44336' },
//   { skill: 'Angular JS', percentage: 95, color: '#000000' },
//   { skill: 'Wordpress', percentage: 85, color: '#00bcd4' }
// ];

const Skills = () => {

  const [skills, setSkills]= useState([
    { skill: 'HTML', percentage: 95, color: '#6a1b9a' },
  { skill: 'CSS', percentage: 85, color: '#fbc02d' },
  { skill: 'PHP', percentage: 90, color: '#d32f2f' },
  { skill: 'Javascript', percentage: 90, color: '#f44336' },
  { skill: 'Angular JS', percentage: 95, color: '#000000' },
  { skill: 'Wordpress', percentage: 85, color: '#00bcd4' }
  ])

  const url = "/api/getskills";
  useEffect(()=>{
    const getData= async()=>{
      try {
       const  response= await axios.get(url);

       if(response.data)
        setSkills(response.data);
      console.log("data sucessfully received")

      } catch (error) {
        console.log("oops",error)
        
      }
    }
    getData();
  },[])

  return (
    <div className="skills-list">
      <h2>My Skills</h2>
      <div className="skills-container">
        <div className="left-column">
          {skills.map((skill, index) =>
            index % 2 === 0 ? (
              <SkillBar
                key={index}
                skill={skill.skill}
                percentage={skill.percentage}
                color={skill.color}
              />
            ) : null
          )}
        </div>
        <div className="right-column">
          {skills.map((skill, index) =>
            index % 2 !== 0 ? (
              <SkillBar
                key={index}
                skill={skill.skill}
                percentage={skill.percentage}
                color={skill.color}
              />
            ) : null
          )}
        </div>
      </div>
    </div>
  );
};

export default Skills;
