//components/Header.js
/* --------------------------------- imports -------------------------------- */
import React from "react";
import { useNavigate } from "react-router-dom";
import "./header.css";
import logo from "../../images/logo.png";
import Navbar from "../navbar";

/* --------------------------------- Header --------------------------------- */
export default function Header() {
  const navigate = useNavigate();
  return (
    <>
      <div className="header">
        <img
          className="header__logo"
          src={logo}
          alt="haikukedoodle logo"
          onClick={() => navigate("/")}
        />
        <div className="header__nav">
          <Navbar></Navbar>
        </div>
      </div>
    </>
  );
}
