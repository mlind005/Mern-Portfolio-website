import { NavLink } from "react-router-dom";
import { FaBars, FaHome,  FaUser } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { BiAnalyse, BiSearch } from "react-icons/bi";
import {  AiTwotoneFileExclamation } from "react-icons/ai";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
const routes = [
  {
    path: "/Admin/home",
    name: "Home",
    icon: <FaHome />,
  },
  {
    path: "/Admin/Skills",
    name: "Skills",
    icon: <FaUser />,
  },
  {
    path: "/Admin/About",
    name: "About",
    icon: <MdMessage />,
  },
  {
    path: "/Admin/Projects",
    name: "Project",
    icon: <BiAnalyse />,
  },
  {
    path: "/Admin/Messages",
    name: "Messages",
    icon: <AiTwotoneFileExclamation />,
  },
  {
    path: "/Admin/Education",
    name: "Education Form",
    icon: <AiTwotoneFileExclamation />,
  },
  {
    path: "/Admin/work",
    name: "work Form",
    icon: <AiTwotoneFileExclamation />,
  },
  {
    path: "/Admin/Main",
    name: "user",
    icon: <AiTwotoneFileExclamation />,
  },
   
];

const SideBar = ({  }) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div>
        <motion.div
          animate={{
            width: isOpen ? "200px" : "45px",

            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar `}
        >
          <div className="top_section">
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                >
                  ADMIN
                </motion.h1>
              )}
            </AnimatePresence>

            <div className="bars">
              <FaBars onClick={toggle} />
            </div>
          </div>
          
          <section className="routes">
            {routes.map((route, index) => {
              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  activeClassName="active"
                >
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>
        </motion.div>

       
      </div>
    </>
  );
};

export default SideBar;
