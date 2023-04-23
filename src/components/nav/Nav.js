//components/nav/Nav.js
/* --------------------------------- imports -------------------------------- */
import React from "react";
import { NavLink } from "react-router-dom";
import "./nav.css"
/* ----------------------------------- Nav ---------------------------------- */
export default function Nav() {
  return (
    <>
      <div className="nav">
       <NavLink to="/about"></NavLink>
      </div>
    </>
  );
}
