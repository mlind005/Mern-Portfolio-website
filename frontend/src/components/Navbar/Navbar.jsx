import React, { useEffect, useState } from "react";
import Toggle from "./Toggle/Toggle";
import "./Navbar.css";
import { Link as LinkScroll } from "react-scroll";
import { NavLink, useLocation ,useNavigate} from "react-router-dom"
// import {GiHamburgerMenu} from  'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiFillCloseCircle } from 'react-icons/ai'
import { FaUser } from 'react-icons/fa'




const Navarray = [
  {
    element: "Skills",
    link: "Skills"
  },
  {
    element: "About",
    link: "About"
  },
  {
    element: "Projects",
    link: "Projects"
  },
  {
    element: <button className='n-button'><span> Lets connect </span></button>,
    link: "contact"
  },

]



const Navbar = () => {
  const navigate = useNavigate()

  const [navToggle, setNavToggle] = useState(false)
  const location = useLocation();

  useEffect(() => {
    console.log(location.pathname);
  }, [location.pathname]);

const handleLogout =()=>{
  localStorage.removeItem("token");
  localStorage.removeItem("username");
  alert("logout success")
}




  return (
    <>
      <div className="n-wrapper" id="Navbar" >
        
        <div className="n-left">
          <div className="n-name">Chiku</div>
          <Toggle />
        </div>
        <div className="n-middle"  >
          <h1 onClick={() => { setNavToggle(!navToggle) }}>
            {
              navToggle === false ? <GiHamburgerMenu color="var(--orange)" /> : <AiFillCloseCircle color="var(--orange)" />
            }

          </h1>
        </div>
        {/* right */}
        <div className={window.innerWidth < 800 && navToggle === true ? "n-right active" : "n-right"}>

          <ul style={{ listStyleType: "none" }} >
            <li >
              <NavLink to="/" className="n-link" >
             { location.pathname === "/" ?
                 <LinkScroll activeclass="active" to="Intro" spy={true} smooth={true}>
                  Home
                </LinkScroll> :
                "Home"
              }
              </NavLink>
            </li>


            {
              location.pathname === "/" ?
                Navarray.map((curEle,i) => {
                  const { element, link } = curEle

                  return (
                    <li key={i} onClick={() => { setNavToggle(!navToggle) }}>
                        <LinkScroll to={link} spy={true} smooth={true} activeclass="active" className="n-link">
                          {element}
                        </LinkScroll>
                    </li>
                  )
                }) : " "
            }

            
            <li>
              <NavLink to="/login"
                className="n-link">
                <FaUser />
              </NavLink>

            </li>
            {location.pathname !== "/" ?
            <li>
            <NavLink to="/login">
                <button onClick={handleLogout} className="n-link">logout</button>
              </NavLink>

            </li>
               :null }
          </ul>


        </div>
      </div>
    </>
  );
};

export default Navbar;
