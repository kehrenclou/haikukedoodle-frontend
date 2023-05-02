//components/nav/Nav.js
/* --------------------------------- imports -------------------------------- */
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useWindowSize } from "../../hooks/useWindowSize";

import "./navbar.css";
import "./Navbar";
/* -----------------------------Mobile Nav ---------------------------------- */
export const MobileNavbar = () => {
  const size = useWindowSize();
  /* -------------------------------- useState -------------------------------- */
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLessThan920, setIsLessThan920]=useState(false);

  /* -------------------------------- useEffect ------------------------------- */
  useEffect(()=>{
    size.width <920 ?setIsLessThan920(true) :setIsLessThan920(false);
  },[size])

  /* --------------------------------- return --------------------------------- */
  return (
    <>
      <button className=""/>
    </>
  );
};
