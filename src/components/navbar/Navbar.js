//components/nav/Nav.js
/* --------------------------------- imports -------------------------------- */
import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
/* ----------------------------------- Nav ---------------------------------- */
export default function Navbar() {
  return (
    <>
      <nav className="nav" id="menu">
        <NavLink
          to="/"
          className="nav__link"
          style={({ isActive}) => {
            return {
              color: isActive ? "#fdc9ef" : "white",
            };
          }}
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          className="nav__link"
          style={({ isActive }) => {
            return {
              color: isActive ? "#fdc9ef" : "white",
             
            };
          }}
        >
          About
        </NavLink>

        <NavLink
          to="/inspiration"
          className="nav__link"
          style={({ isActive, isPending }) => {
            return {
              color: isActive ? "#fdc9ef" : "white",
              // color: isPending ? "yellow" : "white",
            };
          }}
        >
          Inspiration
        </NavLink>

        <NavLink
          to="/faq"
          className="nav__link"
          style={({ isActive, isPending }) => {
            return {
              color: isActive ? "#fdc9ef" : "white",
              // color: isPending ? "yellow" : "white",
            };
          }}
        >
          FAQ
        </NavLink>

        <NavLink
          to="/contact"
          className="nav__link"
          style={({ isActive, isPending }) => {
            return {
              color: isActive ? "#fdc9ef" : "white",
              // color: isPending ? "yellow" : "white",
            };
          }}
        >
          Contact
        </NavLink>
      </nav>
    </>
  );
}
