import React from "react";
import hero from "../../assets/hero.png";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      {/* <img className="hero-image" src={hero} alt="hero image" /> */}
      <video
        style={{ objectFit: "cover", width: "100%", overflow: "hidden" }}
        muted
        autoPlay="autoplay"
        loop="loop"
        src="https://video-previews.elements.envatousercontent.com/96af688b-c16b-47ed-9753-2b73ef7ef25f/watermarked_preview/watermarked_preview.mp4"
        frameborder="0"
      ></video>
      <div className="black-shadow-div"></div>
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
