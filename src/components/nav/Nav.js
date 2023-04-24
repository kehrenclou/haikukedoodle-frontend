//components/nav/Nav.js
/* --------------------------------- imports -------------------------------- */
import React from "react";
import { NavLink } from "react-router-dom";
import "./nav.css";
/* ----------------------------------- Nav ---------------------------------- */
export default function Nav() {
  return (
    <>
      <nav className="nav" id="menu">
        <NavLink
          exact
          to="/"
          className="nav__link"
          style={({ isActive, isPending }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isPending ? "yellow" : "white",
            };
          }}
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          className="nav__link"
          style={({ isActive, isPending }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isPending ? "yellow" : "white",
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
              fontWeight: isActive ? "bold" : "",
              color: isPending ? "yellow" : "white",
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
              fontWeight: isActive ? "bold" : "",
              color: isPending ? "yellow" : "white",
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
              fontWeight: isActive ? "bold" : "",
              color: isPending ? "yellow" : "white",
            };
          }}
        >
          Contact
        </NavLink>
      </nav>
      
    </>
  );
}
