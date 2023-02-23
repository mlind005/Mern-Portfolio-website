import React, { useState,useEffect } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import table1 from "../../assets/img/table2.jpg"

// const PORT = "http://localhost:6969/api/v1"

const PORT = "/api/v1"
// const imgPath = "/public/upload/"

const Login = () => {
  const navigate = useNavigate();

  // await axios.get("http://192.168.100.186:6969/getToken",)

useEffect(()=>{
  if(localStorage.getItem("token")!== null){
getToken()
  }
},[])

const getToken = async() =>{
try {
  let res = await axios.get(`${PORT}/getToken`)
  if(res.data.token === localStorage.getItem("token")){
    navigate("/Admin/home")
  }
} catch (error) {
  console.log(error)
}
}

  const [inputs, setInputs] = useState({ username: "", email: "", password: "" })

  const handleSubmit = async (e) => {
    e.preventDefault()
    

    axios.post(`${PORT}/login`, inputs)
      .then(res => {
        alert(res.data.message)
        const token = res.data.token;
        navigate("/Admin/home")

        if (token) {
          localStorage.setItem("token", token);
          localStorage.setItem("username", res.data.username);
        }
        else {
          localStorage.removeItem("token");
          localStorage.removeItem("username");
        }

      }).catch(err => {
        console.log(err)
      })
  }

  return (


    <section className="signin">
      <div className="s-box">
        <div className="s-right">
          <img src={table1} alt="" />
          <hr />

        </div>
        <div className="s-left">

          <form >
            <h1>Log In</h1>
            <div>
              <label htmlFor="username">
                <i className="zmdi zmdi-account-box zmdi-hc-lg"></i>
              </label>
              <input type="text" placeholder="username" name="username" id="username"
                onChange={(e) => { setInputs({ ...inputs, [e.target.name]: e.target.value }) }}
                required />
            </div>

            <div>
              <label htmlFor="email">
                <i className="zmdi zmdi-account-box zmdi-hc-lg"></i>
              </label>
              <input type="text" placeholder="Enter Email" name="email" id="email"
                onChange={(e) => { setInputs({ ...inputs, [e.target.name]: e.target.value }) }}
                required />
            </div>


            <div>
              <label htmlFor="password">
                <i className="zmdi zmdi-lock zmdi-hc-lg"></i>
              </label>
              <input type="password" placeholder="Enter Password" name="password" id="password"
                onChange={(e) => { setInputs({ ...inputs, [e.target.name]: e.target.value }) }}
                required />
            </div>



            <button type="submit" onClick={handleSubmit}>Login</button>


          </form>
        </div>
      </div>
    </section>



  )
}

export default Login