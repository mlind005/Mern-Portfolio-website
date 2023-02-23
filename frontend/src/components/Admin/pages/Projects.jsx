
import React, { useEffect, useState } from 'react'
import axios from "axios"


// const PORT = "http://localhost:6969/api/v1"
// const imgPath = "http://localhost:6969/public/upload/"

const PORT = "/api/v1"
const imgPath = "/public/upload/"

const Projects = () => {

      const [inputs,setInputs] = useState({
        title:"",
        desc:"",
        type:"",
        link:"",
        Projimage:"",
        token:localStorage.getItem("token")
      })


      const [projdata,setProjData] = useState([])
  useEffect(()=>{
      getProjectData()
  },[])

  const getProjectData= async()=>{

      try{
          let res = await axios.get(`${PORT}/allProjects`)
        
        const allData = res.data.projectData;
        setProjData(allData)

      }
      catch(err){
          console.log("err:",err);
      }
  }

  const HandleSubmit = async(e)=>{
      e.preventDefault();
      const formdata = new FormData();
      formdata.append("myFile",inputs.Projimage)
      formdata.append("title",inputs.title)
      formdata.append("type",inputs.type)
      formdata.append("link",inputs.link)
      formdata.append("desc",inputs.desc)
      formdata.append("token",inputs.token)

      
      try {
          let res = await axios.post(`${PORT}/Projects`,formdata)
          alert(res.data.message)
      } catch (err) {
          console.log("err:",err)
      }
  }


  const handleImg =(e)=>{
   setInputs({...inputs,Projimage:e.target.files[0]})
  }



  const deleteProject = async(id)=>{
    try{
        let res = await axios.delete(`${PORT}/project/${id}`)
        alert(res.data.message);
        await getProjectData();
    }
    catch(err){
        console.log("err",err)
    }
}
  return (
    <>
      <div className="container-fluid pl-0 ">

        <div className="row">

          <div className="col-md-12 ml-0 ">
            <div className="card border-dark">
              <div className="card-header bg-primary">
                <h5>Projects Section</h5>
              </div>
              <div className="card-body">

            {projdata.map((cur)=>{
              return(
                <div>
                <div className='row'>
                <img src={`${imgPath}/${cur.Projimage}`} className="col-md-2"
                  style={{ width: "15%", height: "10%" }} alt="img"
                />
                <div className="col-md-8">
                  <h5 >Title:{cur.title}</h5>
                  <h6 >type:{cur.type}</h6>
                  <h6 >link:{cur.link}</h6>
                  <p >Description: <br /> {cur.desc}</p>
                  
                </div>
                <button className='btn btn-sm btn-danger' 
                onClick={()=>{
                  deleteProject(cur._id);
                }}
                >Delete</button>
              </div>
                <hr />
              </div>
              )
            })}


<button onClick={getProjectData}>Get it</button>

<div className="card-header bg-primary">
                <h5>Add or Update Projects</h5>
              </div>
            <form>                                 
                               
                                   
                                   <div className="form-group">
                                       <label htmlFor="exampleInputFile">upload profile photo</label>
                                       <div className="input-group">
                                           
                                               <input type="file"  id="exampleInputFile"
                                               onChange={handleImg}
                                               />                   
                                       </div>
                                   </div>
                                  
                                   <div className="row">
                                   <div className="form-group col-sm-4">
                    <label htmlFor="title">title</label>
                    <input type="text" className="form-control"  name="title" 
                    value={inputs.title}
                    onChange ={(e)=>{
                      const pt =e.target.value.toUpperCase()
                        setInputs({...inputs,title:pt})
                    }}
                    />
                                    </div>

                                    <div className="form-group col-sm-4">
                    <label htmlFor="type">type</label>
                    <input type="text" className="form-control"   name="type" 
                    value={inputs.type}
                    onChange ={(e)=>{
                        const tp =e.target.value.toUpperCase()
                        setInputs({...inputs,type:tp})
                    }}
                    />
                              
                                    </div>
                                    <div className="form-group col-sm-4">
                    <label htmlFor="link">Link</label>
                    <input type="text" className="form-control"   name="link" 
                    value={inputs.link}
                    onChange ={(e)=>{
                        setInputs({...inputs,link:e.target.value})
                    }}
                    />
                              
                                    </div>
                                    </div>
                                    <div className="form-group">
                    <label htmlFor="desc">Description</label>
                    <textarea rows={3} type="text" className="form-control" id="
                    desc"  name="desc"
                    value={inputs.desc}
                    onChange ={(e)=>{
                        setInputs({...inputs,[e.target.name]:e.target.value})
                    }}
                    />
                                    </div>  

                                    {/* <!-- /.card-body --> */}

                                    <div className="card-footer">
                                        <button type="submit" className="btn btn-primary" 
                                        onClick={HandleSubmit}
                                        >Submit</button>
                                        
                                    </div>
                                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects