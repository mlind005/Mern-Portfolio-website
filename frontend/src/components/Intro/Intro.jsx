import React, { useEffect, useState } from 'react'
import profile from "../../assets/img/chikuprofile.jpeg"
import facebook from "../../assets/img/Facebook.png"
import instagram from "../../assets/img/Insta.png"
import linkedin from "../../assets/img/Linkedin.png"
import github from "../../assets/img/Github.png"
import twitter from "../../assets/img/Twitter.png"
import { motion } from "framer-motion"

import axios from "axios"

import "./Intro.css"

// const PORT = "http://localhost:6969/api/v1"
// const imgPath = "http://localhost:6969/public/upload/"
const PORT = "/api/v1"
const imgPath = "/public/upload/"



const Intro = () => {



    const transition = { duration: 2, type: "spring" };




     
    useEffect(()=>{
        GetSkillsData();
    },[])
    const [homeData,setHomeData]=useState({});
    const GetSkillsData = async()=>{
        try{
            let res = await axios.get(`${PORT}/homedata`)
            
            setHomeData(res.data.Data)
            
        }
        catch(err){
            console.log("err",err)
        }
    }

    
    return (
        <>

            <div className="intro" id="Intro">
                <div className="i-left">
                    <motion.div
                        className="i-name"
                        initial={{ x: -250, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1, }}
                        transition={transition}
                    >

                        {/* yahan change hy darkmode ka */}

                        <span >Hy! I Am</span>
                        <span>{homeData.name}</span>
                        <span>
                        {homeData.title}
                        </span>
                        <p>
                        {homeData.subtitle}
                        </p>

                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1, }}
                            transition={transition}
                            className="social-icon">

                            <a href={homeData.facebook}><img src={facebook} alt="" /></a>
                            <a href={homeData.instagram}><img src={instagram} alt="" /></a>
                            <a href={homeData.linkedin}><img src={linkedin} alt="" /></a>
                            <a href={homeData.github}><img src={github} alt="" /></a>
                            <a href={homeData.twitter}><img src={twitter} alt="" /></a>

                        </motion.div>
                    </motion.div>
                </div>
                <motion.div
                    className="i-right"
                    initial={{ y: -200, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1, }}
                    transition={transition}
                >
                    {
                        homeData.homepic?
                        <img src={`${imgPath}/${homeData.homepic}`} alt="" />
                        : <img src={profile} alt="" />
                    }

                </motion.div>
            </div>



        </>
    )
}

export default Intro