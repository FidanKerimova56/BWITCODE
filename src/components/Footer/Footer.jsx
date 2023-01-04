import React from "react";
import "./Footer.css";
import logo2 from "../../assets/logo2.png";
import socialMedia from "../../assets/social-media.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <h2>Ready to get started ?</h2>
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
          <img src={socialMedia} alt="socialMedia" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
