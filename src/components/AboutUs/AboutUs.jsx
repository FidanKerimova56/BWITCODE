import React from "react";
import "./About.css"
import aboutPic from "../../assets/about-pic.png";
import about from "../../assets/about.png";

const AboutUs = () => {
  return (
    <div>
      <div className="about-container">
        <p className="about-subtitle">ABOUT US</p>
        <div className="about-layout">
        <div className="about-text-part">
          <h3>The team will turn your ideas into reality</h3>
          <p className="about-text">
            Bwitcode is a leading Development & Design expert company providing
            superior Software, Web, Mobile and Creative Designing solutions and
            services to companies globally. Highly skilled intellectual
            personnel, most having substantial work experience in diverse areas
            of Information Technology make up our team.
          </p>
        </div>
        <div className="about-pic-part">
          <img src={aboutPic} alt="" />
        </div>
        </div>
        <div className="bg-about">
          <img src={about} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
