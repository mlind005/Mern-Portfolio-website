import React, { useEffect, useState } from 'react'
import axios from "axios"

// const PORT = "http://localhost:6969/api/v1"
// const imgPath = "http://localhost:6969/public/upload/"

const PORT = "/api/v1"
const imgPath = "/public/upload/"


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


// const[delskill,setdelSkill] = useState({skillname:""})
const deleteSkill = async(id)=>{
    try{
        let res = await axios.delete(`${PORT}/skill/${id}`)
        alert(res.data.message);
        await GetSkillsData();
    }
    catch(err){
        console.log("err",err)
    }
}

const [skill,setSkill] = useState({
    skillname:"",
    level:60,
    id:"",
    token:localStorage.getItem("token")
})


const handleSubmit = async (e)=>{
e.preventDefault();

try{
    let res = await axios.post(`${PORT}/Editskills`,skill)
    
    alert(res.data.message)
    await GetSkillsData();
    
}
catch(err){
    console.log("err:",err)
}
}

    return (
        <>
            <div className="container-fluid pl-0 ">

                <div className="row">

                    <div className="col-md-12 ml-0 ">
                        <div className="card border-dark">
                            <div className="card-header bg-primary">
                                <h5>Skills</h5>
                            </div>
                            <div className="card-body">


                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th >#</th>
                                            <th >Skill</th>
                                            <th className='col-md-6'>Level</th>
                                            <th >Label</th>
                                            <th >Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {skillKart.map((cur, i) => {
                                            return (
                                                <tr>
                                                    <td>{i}.</td>
                                                    <td>{cur.skillname}</td>
                                                    <td>
                                                        <div className="progress progress-xs">
                                                            <div className="progress-bar bg-success" style={{ width: `${cur.level}%` }}></div>
                                                        </div>
                                                    </td>
                                                    <td><span className="badge bg-info">{cur.level}%</span></td>
                                                    <td><button className='btn btn-sm btn-danger' onClick={(e)=>{  
                                                        deleteSkill(cur._id)
                                                    }}>Delete</button></td>
                                                    <td><button className='btn btn-sm btn-success' onClick={(e)=>{  
                                                        setSkill({
                                                            ...skill,
                                                            skillname:cur.skillname,
                                                            level:cur.level,
                                                            id:cur._id,
                                                            })
                                                    }}>Update</button></td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>

                                {/* <!-- /.card-body --> */}

                                <div className="card-footer">
                                 
                                </div>
                                
                                <div className="input-group mb-3 col-md-6 ">
                                    <span className="input-group-text bg-info" id="basic-addon1">Skill Name</span>
                                    <input type="text" className="form-control" placeholder="SkillName" 
                                    value={skill.skillname}
                                    onChange={(e)=>{
                                 setSkill({...skill,skillname:e.target.value})}}

                                    aria-describedby="basic-addon1" />
</div>
<div className='row'>
<span className="input-group-text bg-info" id="basic-addon1">Level</span>
<input type="range" min="1" max="100" className="col-md-6"
value={skill.level}
onChange={(e)=>setSkill({...skill,level:e.target.value})}
 />
<h6>{skill.level}%</h6>
</div>
<br />
<button type="submit"  className="btn btn-primary" onClick={handleSubmit}>Add Skill</button>
<button   className="btn btn-primary ml-5" onClick={()=>{
    setSkill({ ...skill,skillname:"",
    level:60,
    id:"",})
}}>Clear</button>
                                
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills