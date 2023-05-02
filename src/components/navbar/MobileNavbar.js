//components/nav/Nav.js
/* --------------------------------- imports -------------------------------- */
import React, {useState} from "react";
import { NavLink } from "react-router-dom";

import "./navbar.css";
import"./Navbar";
/* -----------------------------Mobile Nav ---------------------------------- */
export const MobileNavbar=()=>{
const [isMenuOpen,setIsMenuOpen]=useState(false);
    return(
        <>
        <nav className="nav nav_mobile" id="mobilemenu">


        </nav>
        </>
    )
}
