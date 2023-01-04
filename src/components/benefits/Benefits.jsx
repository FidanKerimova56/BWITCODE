import React from "react";
import "./Benefits.css";
import benefits from "../../assets/benefits.png";

const Benefits = () => {
  return (
    <div className="benefits-container">
      <p>BENEFITS</p>
      <h3 className="benefits-title">Why work with us?</h3>
      {/* Professionalism */}
      <div className="reasons-container">
        <h4 className="reason-title">Professionalism</h4>
        <p className="reason-text">
          We know everything about search engine optimization and internet
          marketing. The highly ranked sites of our clients indicate the high
          professionalism of the team.
        </p>
      </div>
      <hr className="first-line" />
      {/* Reasonable price */}
      <div className="reasons-container">
        <h4 className="reason-title">Reasonable price</h4>
        <p className="reason-text">
          The price of our services does not exceed the average market price.
          Moreover, we always meet the customer's needs, offer convenient
          payment schemes and discount programs.
        </p>
      </div>
      <hr className="second-line" />
      {/* Quality service */}
      <div className="reasons-container">
        <h4 className="reason-title">Quality service</h4>
        <p className="reason-text">
          We have a team of experts to answer all your questions about what we
          do and why we do it for your project. We are ready to provide you with
          continuous support even after the project is completed.
        </p>
      </div>
      <div className="bg-benefits">
        <img src={benefits} alt="benefits" />
      </div>
    </div>
  );
};

export default Benefits;
