import React, { useEffect, useState } from 'react'
import "./skills.css"
import axios from "axios"

import { motion } from "framer-motion"

// const PORT = "http://localhost:6969/api/v1"
const PORT = "/api/v1"






const transition = { duration: 2, type: "linear" };
const transition1 = { duration: 2, type: "spring" };


const Skills = () => {

    
    useEffect(()=>{
        GetSkillsData();
    },[])
    const [skillKart,setSillKart]=useState([]);
    const GetSkillsData = async()=>{
        try{
            let res = await axios.get(`${PORT}/allSkills`)
            
            setSillKart(res.data.allskill)
            
        }
        catch(err){
            console.log("err",err)
        }
    }


  


    return (
        <>
            <div className="skills"
            id='Skills'
            >
                {/* <div className="a-left">
                        <img src={apic} alt="" />
                    </div> */}

                <div className="skills_section">
                    <motion.div
                        className="title"
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1, }}
                        transition={transition1}
                    >
                        {/* yahan change hy darkmode ka */}
                        <span >Skills</span>
                        <span> skills I mastered </span>
                    </motion.div>

                    <div className="skills_main">

                        {skillKart.map((curEle, i) => {
                            const { skillname, level } = curEle
                            return (
                                <div className="skill_bar" key={i}>
                                    <div className="info">
                                        <p>{skillname}</p>
                                        <p>{level}%</p>
                                    </div>
                                    <div className="bar">
                                        <motion.span className="html"
                                            style={{ "width": `${level}%` }}

                                            initial={{ width: "0%" }}
                                            whileInView={{ width: `${level}%`  }}
                                            transition={transition}
                                            >
                                        </motion.span>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills