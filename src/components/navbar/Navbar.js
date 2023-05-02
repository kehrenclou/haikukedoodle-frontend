//components/nav/Nav.js
/* --------------------------------- imports -------------------------------- */
import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
/* ----------------------------------- Nav ---------------------------------- */
export default function Navbar() {
  return (
    <>
      <nav>
        <ul className="nav" id="menu">
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
            >
              About
            </NavLink>
          </li>

          <li className="nav__item">
            <NavLink
              to="/inspiration"
              className="nav__link"
              style={({ isActive, isPending }) => {
                return {
                  color: isActive ? "#fdc9ef" : "",
                  fontWeight: isActive ? "700" : "400",
                };
              }}
            >
              Inspiration
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink
              to="/faq"
              className="nav__link"
              style={({ isActive, isPending }) => {
                return {
                  color: isActive ? "#fdc9ef" : "",
                  fontWeight: isActive ? "700" : "400",
                };
              }}
            >
              FAQ
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink
              to="/contact"
              className="nav__link"
              style={({ isActive, isPending }) => {
                return {
                  color: isActive ? "#fdc9ef" : "",
                  fontWeight: isActive ? "700" : "400",
                };
              }}
            >
              Contact
            </NavLink>
          </li>
          <li className="nav__item">
            <button className="nav__button" type="button" aria-label="Sign up">
              Sign Up
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}
