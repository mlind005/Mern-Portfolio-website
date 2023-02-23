import React,{useState} from "react";
import "./Toggle.css";
import {IoMoonSharp} from "react-icons/io5";
import {BiSun} from "react-icons/bi";


const Toggle = () => {
  const [mode,setMode] = useState("sun");
  const changeMode =()=>{
    mode==="sun"?setMode("moon"):setMode("sun")
    console.log(mode)
  }
  return (
    <div className="toggle" onClick={changeMode}>
      <BiSun />
      <IoMoonSharp />
      <div
        className="t-button"
        style={ mode==="sun" ? { left: "2px" } : { right: "2px" }}
      ></div>
    </div>
  );
};

export default Toggle;
