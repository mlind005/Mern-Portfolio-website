import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap-reboot.min.css"
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Intro from './components/Intro/Intro';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Admin from './components/Admin/Admin';




import Login from "./components/Admin/Login";
import Home1 from "./components/Admin/pages/Home";
import Messages from "./components/Admin/pages/Messages";
import About1 from "./components/Admin/pages/About";
import Projects1 from "./components/Admin/pages/Projects";
import Skills1 from "./components/Admin/pages/Skills";
import Education1 from "./components/Admin/pages/Education";
import Work from "./components/Admin/pages/works";
import Main from "./components/Admin/pages/Main";


function App() {

  

  return (
    <div className="App">
     
     <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Intro />
              <Skills />
              <About />
              <Projects />
              <Contact />
              <Footer />
            </>
          } />
          <Route path="/login" element={<Login />} />

          

          <Route path='/Admin' element={<Admin />}>
            <Route path="home" element={<Home1 />} />
            <Route path="Messages" element={<Messages />} />
            <Route path="About" element={<About1 />} />
            <Route path="Skills" element={<Skills1 />} />
            <Route path="Projects" element={<Projects1 />} />
            <Route path="Education" element={<Education1 />} />
            <Route path="work" element={<Work />} />
            <Route path="Main" element={<Main />} />
           

          </Route>

        </Routes>

     
    </div>
  );
}

export default App;
