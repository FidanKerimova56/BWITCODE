import React from "react";
import logo from "../../assets/logo.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav className="nav">
        <div className="logo-container">
          <img src={logo} alt="" />
        </div>
        <div className="nav-links">
          <ul>
            <li>
              <a href="">Portfolio</a>
            </li>
            <li>
              <a href="">Services</a>
            </li>
            <li>
              <a href="">About Us</a>
            </li>
          </ul>
        </div>
        <div className="nav-button">
          <button>Project Estimation</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
