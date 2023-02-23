import React, { useEffect, useState } from 'react'
import axios from "axios"


// const PORT = "http://localhost:6969/api/v1"
// const imgPath = "http://localhost:6969/public/upload/"

const PORT = "/api/v1"
const imgPath = "/public/upload/"

const About = () => {
   
    const [inputs,setInputs] = useState({
      Adesc:"",
      Address:"",
      Email:"",
      Phone:"",
      Aboutpic:"",
      token:localStorage.getItem("token")
    })

useEffect(()=>{
    getAboutData()
},[])

const getAboutData= async()=>{

    try{
        let res = await axios.get(`${PORT}/allAbout`)
      const ab = res.data.aboutData;
      setInputs({...inputs,...ab})

    }
    catch(err){
        console.log("err:",err);
    }
}

const HandleSubmit = async(e)=>{
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("myFile",inputs.Aboutpic)
    formdata.append("Adesc",inputs.Adesc)
    formdata.append("Address",inputs.Address)
    formdata.append("Email",inputs.Email)
    formdata.append("Phone",inputs.Phone)
    formdata.append("token",inputs.token)
    

    try {
        let res = await axios.post(`${PORT}/About`,formdata)
        alert(res.data.message)
    } catch (err) {
        console.log("err:",err)
    }
}

   
const handleImg =(e)=>{
 setInputs({...inputs,Aboutpic:e.target.files[0]})


}
    return (
        <>
            <div className="container-fluid pl-0 ">
            
                <div className="row">
                
                    <div className="col-md-12 ml-0 ">
                        <div className="card border-dark">
                            <div className="card-header bg-primary">
                                <h5>About Section</h5>
                            </div>
                            <div className="card-body">
                                <form>                                 
                                <img src={`${imgPath}/${inputs.Aboutpic}`} style={{width:"15%",height:"15%"}} alt="img" class="img-thumbnail"/>
                                   
                                   <div className="form-group">
                                       <label htmlFor="exampleInputFile">upload profile photo</label>
                                       <div className="input-group">
                                           
                                               <input type="file"  id="exampleInputFile"
                                               onChange={handleImg}
                                               />                   
                                       </div>
                                   </div>
                                  

                                    <div className="form-group">
                    <label htmlFor="Adesc">Description</label>
                    <textarea rows={3} type="text" className="form-control" id="
                    Adesc"  name="Adesc"
                    value={inputs.Adesc}
                    onChange ={(e)=>{
                        setInputs({...inputs,[e.target.name]:e.target.value})
                    }}
                    />
                                    </div>
                                    
                                   
                                    
                                    <div className="form-group">
                    <label htmlFor="Address">Address</label>
                    <input type="text" className="form-control" id="
                    address"  name="Address" 
                    value={inputs.Address}
                    onChange ={(e)=>{
                        setInputs({...inputs,[e.target.name]:e.target.value})
                    }}
                    />
                                    </div>
                                    
                                    
                                  
<div className="row">
                                   <div className="form-group col-sm-4">
                    <label htmlFor="Email">Email</label>
                    <input type="email" className="form-control"  name="Email" 
                    value={inputs.Email}
                    onChange ={(e)=>{
                        setInputs({...inputs,[e.target.name]:e.target.value})
                    }}
                    />
                                    </div>

                                    <div className="form-group col-sm-4">
                    <label htmlFor="Phone">Phone</label>
                    <input type="number" className="form-control"   name="Phone" 
                    value={inputs.Phone}
                    onChange ={(e)=>{
                        setInputs({...inputs,[e.target.name]:e.target.value})
                    }}
                    />
                              
                                    </div>
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

export default About