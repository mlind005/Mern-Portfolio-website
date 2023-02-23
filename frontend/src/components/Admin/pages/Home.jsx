import React, { useEffect, useState } from 'react'
import axios from "axios"
import profile from "../../../assets/img/chikuprofile.jpeg"


// const PORT = "http://localhost:6969/api/v1"
// const imgPath = "http://localhost:6969/public/upload/"

const PORT = "/api/v1"
const imgPath = "/public/upload/"

const Home = () => {
   
    const [inputs,setInputs] = useState({
            name: "",
            title   : "",
            subtitle: "",
            token: "",
            facebook: "",
            instagram: "",
            linkedin: "",
            github: "",
            twitter: "",
            homepic:"",
    })

useEffect(()=>{
    getHomeData()
},[])

const getHomeData= async()=>{

    try{
        let res = await axios.get(`${PORT}/allAdmin`)

       
        let home = res.data.Data.home
        let token = localStorage.getItem("token")
        // setInputs({...inputs,name:home.name,title:home.title,subtitle:home.subtitle,token:token})
        setInputs({...inputs,...home,token:token})


    }
    catch(err){
        console.log("err:",err);
    }
}

const HandleSubmit = async(e)=>{
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("myFile",inputs.homepic)
    formdata.append("name",inputs.name)
    formdata.append("title",inputs.title)
    formdata.append("subtitle",inputs.subtitle)
    formdata.append("token",inputs.token)
    formdata.append("facebook",inputs.facebook)
    formdata.append("instagram",inputs.instagram)
    formdata.append("linkedin",inputs.linkedin)
    formdata.append("github",inputs.github)
    formdata.append("twitter",inputs.twitter)
    // console.log(formdata.entries())

    try {
        let res = await axios.post(`${PORT}/home`,formdata)
        alert(res.data.message)
    } catch (err) {
        console.log("err:",err)
    }
}

   
const handleImg =(e)=>{
 setInputs({...inputs,homepic:e.target.files[0]})


}
    return (
        <>
            <div className="container-fluid pl-0 ">
            
                <div className="row">
                
                    <div className="col-md-12 ml-0 ">
                        <div className="card border-dark">
                            <div className="card-header bg-primary">
                                <h5>Intro/Home</h5>
                            </div>
                            <div className="card-body">
                                <form>

                                   


                                    <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="
                    name"  name="name"
                    value={inputs.name}
                    onChange ={(e)=>{
                        setInputs({...inputs,[e.target.name]:e.target.value})
                    }}
                    />
                                    </div>
                                    
                                    <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" className="form-control" id="
                    title"  name="title"
                    value={inputs.title}
                    onChange ={(e)=>{
                        setInputs({...inputs,[e.target.name]:e.target.value})
                    }}
                    />
                                    </div>
                                    
                                    <div className="form-group">
                    <label htmlFor="subtitle">subtitle text</label>
                    <input type="subtitle" className="form-control" id="
                    subtitle"  name="subtitle" 
                    value={inputs.subtitle}
                    onChange ={(e)=>{
                        setInputs({...inputs,[e.target.name]:e.target.value})
                    }}
                    />
                                    </div>
                                    
                                    <img src={`${imgPath}/${inputs.homepic}`} style={{width:"15%",height:"15%"}} alt="img" className="img-thumbnail"/>
                                   
                                    <div className="form-group">
                                        <label htmlFor="exampleInputFile">upload profile photo</label>
                                        <div className="input-group">
                                            
                                                <input type="file"  id="exampleInputFile"
                                                onChange={handleImg}
                                                />
                                                
                                            
                                           
                                        </div>
                                    </div>
                                   
                                   <h6>Social media links</h6>
<div className="row">
                                   <div className="form-group col-sm-4">
                    <label htmlFor="subtitle">facebook</label>
                    <input type="text" className="form-control"  name="facebook" 
                    value={inputs.facebook}
                    onChange ={(e)=>{
                        setInputs({...inputs,[e.target.name]:e.target.value})
                    }}
                    />
                                    </div>

                                    <div className="form-group col-sm-4">
                    <label htmlFor="instagram">instagram</label>
                    <input type="instagram" className="form-control"   name="instagram" 
                    value={inputs.instagram}
                    onChange ={(e)=>{
                        setInputs({...inputs,[e.target.name]:e.target.value})
                    }}
                    />
                                    </div>
                                    <div className="form-group col-sm-4">
                    <label htmlFor="linkedin">linkedin</label>
                    <input type="linkedin" className="form-control"   name="linkedin" 
                    value={inputs.linkedin}
                    onChange ={(e)=>{
                        setInputs({...inputs,[e.target.name]:e.target.value})
                    }}
                    />
                                    </div>
                                    <div className="form-group col-sm-4">
                    <label htmlFor="instagram">github</label>
                    <input type="github" className="form-control"   name="github" 
                    value={inputs.github}
                    onChange ={(e)=>{
                        setInputs({...inputs,[e.target.name]:e.target.value})
                    }}
                    />
                                    </div>
                                    <div className="form-group col-sm-4">
                    <label htmlFor="twitter">twitter</label>
                    <input type="twitter" className="form-control"   name="twitter" 
                    value={inputs.twitter}
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

export default Home