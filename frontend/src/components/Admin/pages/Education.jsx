import React, { useEffect, useState } from 'react'
import axios from "axios"

// const PORT = "http://localhost:6969/api/v1"
// const imgPath = "http://localhost:6969/public/upload/"

const PORT = "/api/v1"
const imgPath = "/public/upload/"


const Education = () => {

  useEffect(() => {
    getEduData()
  }, [])
  const [eduData, setEduData] = useState([]);

  const getEduData = async (e) => {


    try {
      let res = await axios.get(`${PORT}/AllEducation`)
      setEduData(res.data.EduData)

    }
    catch (err) {
      console.log("ERR:", err)
    }
  }


  const [inputs, setInputs] = useState({
    role: "",
    time: "",
    org: "",
    desc: "",
    id: "",
    token: localStorage.getItem("token")
  })
  const HandleSubmit = async (e) => {
    e.preventDefault()


    try {
      let res = await axios.post(`${PORT}/AddEducation`, inputs)
      alert(res.data.message)
      setInputs({
        ...inputs,
        role: "",
        time: "",
        org: "",
        desc: "",
        id: "",
      })
      getEduData();
    }
    catch (err) {
      console.log("err: ", err)
    }
  }


  const delEdu = async(id)=>{
    try{
      let res = await axios.delete(`${PORT}/delEdu/${id}`)
      alert(res.data.message)
      getEduData()
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
                <h5>EducATION</h5>
              </div>
              <div className="card-body">


                <table className="table">
                  <thead>
                    <tr>
                      <th >ID</th>
                      <th className='col-md-2'>Role</th>
                      <th className='col-md-4'>organisation</th>
                      <th className='col-md-5' >time and About</th>
                      <th className='col-md-1'>Action</th>
                    </tr>
                  </thead>
                  <tbody>


                   
                    {eduData.map((cur,i) => {
                      
                      return (
                        <tr key={i}>
                          <td>{i}</td>
                          <td>{cur.role}</td>
                          <td>{cur.org}</td>
                          <td><p>{cur.time}</p>
                            <p>{cur.desc}</p>
                          </td>
                          <td>
                            <button className='btn btn-sm btn-success'
                              onClick={() => {
                                setInputs({
                                  ...inputs,
                                  role: cur.role,
                                  time: cur.time,
                                  org: cur.org,
                                  desc: cur.desc,
                                  id: cur._id,
                                })
                              }}
                            >update</button>

                            <button className='btn btn-sm btn-danger mt-2'
                            onClick={()=>{
                            delEdu(cur._id)
                            }}
                            >Delete</button>
                          </td>
                        </tr>
                      )

                    })}


                  </tbody>
                </table>

                {/* <!-- /.card-body --> */}

                <div className="card-header bg-primary">
                  <h5>Add Project or Update by using id Projects</h5>
                </div>
                <form>

                  <div className="row">


                    <div className="form-group col-sm-4">
                      <label htmlFor="role">Role</label>
                      <input type="text" className="form-control" name="role"
                        value={inputs.role}
                        onChange={(e) => {
                          setInputs({ ...inputs, role: e.target.value })
                        }}
                      />
                    </div>

                    <div className="form-group col-sm-4">
                      <label htmlFor="time">time</label>
                      <input type="text" className="form-control" name="time"
                        value={inputs.time}
                        onChange={(e) => {
                          setInputs({ ...inputs, time: e.target.value })
                        }}
                      />

                    </div>
                    <div className="form-group col-sm-10">
                      <label htmlFor="org">Organisation Name</label>
                      <input type="org" className="form-control" name="org"
                        value={inputs.org}
                        onChange={(e) => {
                          setInputs({ ...inputs, org: e.target.value })
                        }}
                      />

                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="desc">Description</label>
                    <textarea rows={3} type="text" className="form-control" id="
                    desc"  name="desc" 
                      value={inputs.desc}
                      onChange={(e) => {
                        setInputs({ ...inputs, desc: e.target.value })
                      }}
                    />
                  </div>

                  {/* <!-- /.card-body --> */}

                  <div className="card-footer">
                    <button type="submit" className="btn btn-primary"
                      onClick={HandleSubmit}
                    >Submit</button>
                    <button type="" className="btn btn-primary ml-2"
                      onClick={(e)=>{
                        e.preventDefault()
                        setInputs({
                          ...inputs,
                          role: "",
                          time: "",
                          org: "",
                          desc: "",
                          id: "",
                        })
                      }}
                    >Clear</button>

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

export default Education