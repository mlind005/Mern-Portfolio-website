import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom';

const PORT = "/api/v1"
const imgPath = "/public/upload/"

const Main = () => {
    const navigate = useNavigate();
    
    useEffect(() => {
        getEduData()
    }, [])
    const [inputs, setInputs] = useState({
        username:"",email:"",password:"",
        token:localStorage.getItem("token")
    });
    
    const getEduData = async (e) => {
        
        
        try {
            let res = await axios.get(`${PORT}/allAdmin`)
            const {username,email,password}=res.data.Data;
            setInputs({...inputs,username,email,password})
            
        }
        catch (err) {
            console.log("ERR:", err)
        }
    }
    
    
    
    const HandleSubmit = async (e) => {
        e.preventDefault()
        try {
            let res = await axios.post(`${PORT}/homemain`, inputs)
            alert(res.data.message)
            localStorage.removeItem("token")
            navigate("/login")
    }
    catch (err) {
      console.log("err: ", err)
    }
  }


 

  return (
    <>
      <div className="container-fluid pl-0 ">

        <div className="row">

          <div className="col-md-12 ml-0 ">
            <div className="card border-dark">
              <div className="card-header bg-primary">
                <h5>Admin setting</h5>
              </div>
              <div className="card-body">


               

                {/* <!-- /.card-body --> */}

                
                <form>

                  <div className="row">


                    <div className="form-group col-sm-4">
                      <label htmlFor="username">Username</label>
                      <input type="text" className="form-control" name="username"
                        value={inputs.username}
                        onChange={(e) => {
                          setInputs({ ...inputs, username: e.target.value })
                        }}
                      />
                    </div>

                    <div className="form-group col-sm-4">
                      <label htmlFor="email">Email</label>
                      <input type="email" className="form-control" name="email"
                        value={inputs.email}
                        onChange={(e) => {
                          setInputs({ ...inputs, email: e.target.value })
                        }}
                      />

                    </div>
                    <div className="form-group col-sm-10">
                      <label htmlFor="password">Password</label>
                      <input type="text" className="form-control" name="password"
                        value={inputs.password}
                        onChange={(e) => {
                          setInputs({ ...inputs, password: e.target.value })
                        }}
                      />

                    </div>
                  </div>
                  

                  {/* <!-- /.card-body --> */}

                  <div className="card-footer">
                    <button type="submit" className="btn btn-primary"
                      onClick={HandleSubmit}
                    >change</button>
                    <button type="submit" className="btn btn-primary ml-3"
                      onClick={(e)=>{
                        e.preventDefault()
                        getEduData();
                      }}
                    >refetch</button>
                    

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

export default Main