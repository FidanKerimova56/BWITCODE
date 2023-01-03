import React from "react";
import "../Technologies/Technologies.css";
import HTML5 from "../../assets/HTML5.png";
import CSS3 from "../../assets/CSS3.png";
import Bootstrap from "../../assets/Bootstrap.png";
import Javascript from "../../assets/Javascript.png";
import jQuery from "../../assets/jQuery.png";
import Redux from "../../assets/Redux.png";
import TailwindCss from "../../assets/TailwindCss.png";
import TypeScript from "../../assets/TypeScript.png";
import Reactpic from "../../assets/React.png";
import Shape from "../../assets/Shape.png";
import Slider from "react-slick";

const Technologies = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div>
      <div className="technologies-container">
        <h3 className="subtitle">Technologies We work With</h3>
        <p className="technologies-secondaryText">
          We work on wide range of tools and technologies to cater client
          business requirement for existing project or new application.
        </p>
        <Slider {...settings} className="slider">
          <div>
            <img src={HTML5} alt="HTML" />
          </div>
          <div>
            <img src={CSS3} alt="HTML" />
          </div>
          <div>
            <img src={Bootstrap} alt="HTML" />
          </div>
          <div>
            <img src={Shape} alt="HTML" />
          </div>
          <div>
            <img src={TailwindCss} alt="HTML" />
          </div>
          <div>
            <img src={Javascript} alt="HTML" />
          </div>
          <div>
            <img src={TypeScript} alt="HTML" />
          </div>
          <div>
            <img src={jQuery} alt="HTML" />
          </div>
          <div>
            <img src={Reactpic} alt="HTML" />
          </div>
          <div>
            <img src={Redux} alt="HTML" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Technologies;
