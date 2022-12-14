import React from "react";
import hero from "../../assets/hero.png";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <img className="hero-image" src={hero} alt="hero image" />
      <div className="hero-container">
        <h1>Make Everthing Easier</h1>
        <p className="subtitle">
          We implement your ideas, choose the best design for it, use modern and
          appropriate technology to develop and present it.
        </p>
        <div className="btn-container ">
          <button className="btn">Get in touch</button>
          <button className="btn-border-secondary"></button>
          <button className="btn-border-first"></button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
