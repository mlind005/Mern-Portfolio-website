import React from "react";
import "./Footer.css";
import Wave from "../../assets/img/wave.png";

import facebook from "../../assets/img/Facebook.png"
import instagram from "../../assets/img/Insta.png"
import likedin from "../../assets/img/Linkedin.png"
import github from "../../assets/img/Github.png"
import twitter from "../../assets/img/Twitter.png"
const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <div className="social-icon">

          <a href="#href"><img src={facebook} alt="" /></a>
          <a href="#"><img src={instagram} alt="" /></a>
          <a href="#"><img src={likedin} alt="" /></a>
          <a href="#"><img src={github} alt="" /></a>
          <a href="#"><img src={twitter} alt="" /></a>

        </div>
        <span>@milindPatil</span>

      </div>
    </div>
  );
};

export default Footer;
