import "./Admin.css";
import SideBar from "./SideBar";
import { Outlet, Navigate } from "react-router-dom";
import React, { useEffect } from 'react'
import axios from "axios";



function Admin() {
  // const navigate = useNavigate();

  

// useEffect(()=>{
//   if(localStorage.getItem("token")!== null){
//     navigate("/login")
//   }
//   else{

//     getToken()
//   }
// },[])

// const getToken = async() =>{
// try {
//   let res = await axios.get("http://192.168.100.186:6969/getToken",)
//  if(res.data.token !== localStorage.getItem("token")){
//     navigate("/Admin/home")
//   }
// } catch (error) {
//   console.log(error)
// }
let token = localStorage.getItem("token")
  if (token === null) {
    return <Navigate to="/login" />
  }
  
  else {
    return (

      <>
        <div className="main-container">
          <SideBar />
          <div className="adminbody">
            <Outlet />
          </div>
        </div>

      </>
    );
  }
}

export default Admin;
