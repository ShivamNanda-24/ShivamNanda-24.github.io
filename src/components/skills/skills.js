import React from 'react'
import { SkillsData } from '../../skillslist'
import SkillCard from './skillcard';
import "./skills.scss"

function skills() {
    const data = SkillsData;
    return (
        <div className='skills' id='skills'>
    <div className="left">
        <h2>Technical Skills</h2>
        <div className='skills-container'>
        {data.map((item) => {
            return (
                <div className='skills-section'>
                <label className='skills-section-title'> {item.type} </label>
        
                    <div className='skills-list'>
                        {
                            item.list.map((skill)=> {
                                return(
                                    <SkillCard skill = {skill}/>
                                ) ;
                        })}
                    
                    </div>
                </div>
            );
        })}
        </div>
      </div>
    <div className="right">
        <img src="https://drive.google.com/uc?export=view&id=1EqdaqDnAUTtqHNkDwUREjTk9Yy2ZEeNH" alt="" />


      </div>   

        </div>
        
    );
}

export default skills
