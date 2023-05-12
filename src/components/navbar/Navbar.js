import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

import { SignupModal } from "../modal/SignupModal";

export default function Navbar({ isLessThan600, onLinkClick }) {
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  function handleSignUpOpen() {
    setIsSignupOpen(true);
  }
  function handleCloseModal() {
    setIsSignupOpen(false);
  }
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
            <button
              className="button button_type_primary"
              type="button"
              aria-label="Sign up"
              onClick={handleSignUpOpen}
            >
              Sign Up
            </button>
          </li>
        </ul>
      </nav>
      <SignupModal isOpen={isSignupOpen} onClose={handleCloseModal} />
    </>
  );
}
