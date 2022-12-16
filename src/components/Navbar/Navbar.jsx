import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav className="nav">
        <div className="logo-container">
          <img className="logo" src={logo} alt="" />
        </div>
        <ul className="nav-links">
          <li className="nav-link">
            <NavLink>
              Portfolio
              <div className="underline"></div>
            </NavLink>
          </li>
          <li className="nav-link">
            <NavLink to="services">
              Services
              <div className="underline"></div>
            </NavLink>
          </li>
          <li className="nav-link">
            <NavLink>
              About Us
              <div className="underline"></div>
            </NavLink>
          </li>
        </ul>

        <button className="nav-button">Project Estimation</button>
      </nav>
    </div>
  );
};

export default Navbar;
