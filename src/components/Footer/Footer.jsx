import React from "react";
import "./Footer.css";
import logo2 from "../../assets/logo2.png";
import socialMedia from "../../assets/social-media.png";
import { BsTwitter} from "react-icons/bs";
import { FaFacebookF} from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs"

const Footer = () => {
  return (
    <div className="footer-container">
      <h3>Ready to get started ?</h3>
      <div style={{ position: "relative" }}>
        <div className="btn-container">
          <button className="btn">Get in touch</button>
          <button className="btn-border-secondary"></button>
          <button className="btn-border-first"></button>
        </div>
      </div>
      <div className="nav">
        <div className="logo">
          <img src={logo2} alt="logo-footer" />
        </div>
        <div className="links">
          <ul>
            <li>
              <a href="#">Portfolio</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
          </ul>
        </div>
        <div className="social-media">
          <a href="#">
            <FaFacebookF className="socialMedia"/>
          </a>
          <a href="#">
            <BsLinkedin className="socialMedia"/>
          </a>
          <a href="#">
            <BsTwitter className="socialMedia"/>
          </a>
        </div>
      </div>
      <p className="author">© All rights recerved • 2022 BWITCODE</p>
    </div>
  );
};

export default Footer;
