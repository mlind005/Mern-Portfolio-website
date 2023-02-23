import React, { useEffect, useState } from 'react'
import {FaPhoneAlt} from  'react-icons/fa'
import {FaUserAlt} from  'react-icons/fa'
import {FaEnvelope} from  'react-icons/fa'
import apic from "../../assets/img/aboutimg.png"
import Atimeline from './Atimeline'
import "./About.css"
import { motion } from "framer-motion"
import resume from "../../assets/milins.pdf"

import axios from "axios"

// const PORT = "http://localhost:6969/api/v1"
// const imgPath = "http://localhost:6969/public/upload/"

const PORT = "/api/v1"
const imgPath = "/public/upload/"


const About = () => {
    
useEffect(()=>{
    GetAboutData();
    GetEduData();
    GetworkData();
    
},[])

    const [aboutApi,setAboutApi] = useState({})
    const [eduApi,setEduApi] = useState([])
    const [workApi,setWorkApi] = useState([])
    
const GetAboutData = async()=>{
        try{
            let res = await axios.get(`${PORT}/allAbout`)
            
            setAboutApi(res.data.aboutData)
        }
        catch(err){
            console.log("err",err)
        }
    }
    const GetEduData = async()=>{
        try{
            let res = await axios.get(`${PORT}/AllEducation`)
            setEduApi(res.data.EduData)
            
    }
    catch(err){
        console.log("err",err)
    }
}
    const GetworkData = async()=>{
        try{
            let res = await axios.get(`${PORT}/AllWork`)
            
            setWorkApi(res.data.EduData)
    }
    catch(err){
        console.log("err",err)
    }
}



    const transition = { duration: 2, type: "spring" };

    
    return (
        <>
            <div className="About" id='About'>
                <motion.div className="title"
                //  initial={{ opacity: 0, }}
                //  whileInView={{ opacity: 1}}
                //  transition={transition}
                >
                    {/* yahan change hy darkmode ka */}
                    <span >About Me</span>
                    <span>introduction </span>


                </motion.div>
                <div className="a-body">

                    <motion.div className="a-left"
                    // initial={{ opacity: 0,x:-200 }}
                    // whileInView={{ opacity: 1,x:0}}
                    // transition={transition}
                    >
                        {aboutApi.Aboutpic?
                        <img src={`${imgPath}/${aboutApi.Aboutpic}`} alt="" />
                        :<img src={apic} alt="" />
                        }
                    </motion.div>
                    <motion.div className="a-right"
                    // initial={{ opacity: 0,x:0 }}
                    // whileInView={{ opacity: 1,x:0}}
                    // transition={transition}
                    >
                        <p>{aboutApi.Adesc} </p>
                        <p><FaPhoneAlt color='var(--blue)'/>{aboutApi.Phone} </p>
                        <p><FaUserAlt color='var(--blue)'/>{aboutApi.Address}</p>
                        <p><FaEnvelope color='var(--blue)'/>{aboutApi.Email}</p>
                            <a href={resume} download = "milindresume">
                        <button className='Abut' >
                            Download Cv
                            </button>
                            </a>
                    </motion.div>
                </div>


            <Atimeline Education = {eduApi} work = {workApi} />
            </div>


        </>
    )
}

export default About