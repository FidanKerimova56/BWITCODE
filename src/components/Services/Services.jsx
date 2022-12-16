import React from "react";
import "./Services.css";
import webDevelopment from "../../assets/icons/web-development.svg";
import { Data } from "./data.json";
import { PlusIcon } from "@heroicons/react/24/outline";

const Services = () => {
  return (
    <div className="services-container">
      <h2 className="title">OUR SERVICES</h2>
      <h3 className="subtitle">What can we do for you</h3>
      <div className="tabs-container">
        <div className="tabs">
          {Data.map((item, idx) => (
            <button className={`tab ${idx === 0 && "active"}`} key={idx}>
              {item.WorkTitle}
            </button>
          ))}
        </div>

        <div className="tab-content">
          <img src={webDevelopment} alt="webIcon" />
          <div className="content">
            <h4>Web Development</h4>
            <p>
              We Use The Latest In Technology To Develop Websites <br /> That
              Focus On Increasing User Engagement.
            </p>
            <ul className="content-lists">
              {Data[0].WorkList.map((item) => (
                <li className="content-list">
                  <PlusIcon width={16} color="#6B7280" strokeWidth="2" />
                  <p>{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
