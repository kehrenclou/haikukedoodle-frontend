import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

export default function Navbar({ isLessThan600, onLinkClick }) {
  return (
    <>
      <nav>
        <ul className={isLessThan600 ? "nav nav_mobile" : "nav"} id="menu">
          <li className="nav__item">
            <NavLink
              to="/"
              className="nav__link"
              style={({ isActive }) => {
                return {
                  color: isActive ? "#fdc9ef" : "",
                  fontWeight: isActive ? "700" : "400",
                };
              }}
              onClick={onLinkClick}
            >
              Home
            </NavLink>
          </li>

          <li className="nav__item">
            <NavLink
              to="/about"
              className="nav__link"
              style={({ isActive }) => {
                return {
                  color: isActive ? "#fdc9ef" : "",
                  fontWeight: isActive ? "700" : "400",
                };
              }}
              onClick={onLinkClick}
            >
              About
            </NavLink>
          </li>

          <li className="nav__item">
            <NavLink
              to="/faq"
              className="nav__link"
              style={({ isActive }) => {
                return {
                  color: isActive ? "#fdc9ef" : "",
                  fontWeight: isActive ? "700" : "400",
                };
              }}
              onClick={onLinkClick}
            >
              FAQ
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink
              to="/contact"
              className="nav__link"
              style={({ isActive }) => {
                return {
                  color: isActive ? "#fdc9ef" : "",
                  fontWeight: isActive ? "700" : "400",
                };
              }}
              onClick={onLinkClick}
            >
              Contact
            </NavLink>
          </li>
          <li className="nav__item">
            <button className="button button_type_primary" type="button" aria-label="Sign up">
              Sign Up
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}
