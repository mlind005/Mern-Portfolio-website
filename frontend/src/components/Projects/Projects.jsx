import React, { useState,useEffect } from 'react'
import "./Projects.css"
import { motion } from "framer-motion"
import axios from "axios"

// const PORT = "http://localhost:6969/api/v1"
// const imgPath = "http://localhost:6969/public/upload/"

const PORT = "/api/v1"
const imgPath = "/public/upload/"



const Projects = () => {
    const [apiData,setApiData] = useState([])
    
    const GetSkillsData = async()=>{
        try{
            let res = await axios.get(`${PORT}/allProjects`)
            
        setApiData(res.data.projectData)
        setProjData(res.data.projectData)
        
    }
    catch(err){
        console.log("err",err)
    }
}

    useEffect(()=>{
        GetSkillsData();
        
    },[])
    

    
const uniqType = [
    "All",
    ...new Set(
        apiData.map((curEle) => curEle.type)
    ),
]
    
  

    const transition = { duration: 2, type: "spring" };
    const [projData, setProjData] = useState(apiData);


     function FilterProj(type){

        if (type === "All") {
            setProjData(apiData);
            return;
        }

        const final = apiData.filter((curEle) => {
            
            return curEle.type === type;
        });

        setProjData(final);
    };
    



    return (
        
        <div id="Projects">
            <section id="p_gallery-section">

                <div className="title">
                    {/* yahan change hy darkmode ka */}
                    <span >Projects</span>
                    <span>Here is Our Work Gallery For You </span>
                </div>


                <div className="p_gallery-main">
                    <div className="p_category">

                        <div className="p_btn-group">
                            {uniqType.map((type, i) => {
                                
                                return (
                                    <button
                                        className="p_btn-group_item"
                                        key={i}
                                        onClick={() => FilterProj(type)}
                                    ><span>{type}</span></button>
                                )
                            })}

                        </div>
                    </div>
                    <div className="p_gallery">
                        {projData.map((Ele, i) => {
                            const { title, desc, type, Projimage,link } = Ele;
                           



                            return (
                                <a href={link} key={i}>
                                    <motion.div
                                        className="p_card" 

                                    initial={{ y: 100 }}
                                    whileInView={{ y: 0 }}
                                    transition={transition}
                                    >
                                        
                                        <img src={`${imgPath}/${Projimage}`} />
                                        <div className="p_desc">
                                            <p>go to{title}</p>
                                        </div>
                                        <span className="p_cardhead">{title}</span>
                                        <p>{desc}.</p>
                                        <span className="p_type">{type}</span>
                                    </motion.div>
                                </a>
                            )



                        })}




                    </div>
                </div>
            </section>


        </div>
    )
}

export default Projects