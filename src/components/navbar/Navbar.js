import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

import { SignUpModal, LoginModal } from "../modal";
import { useModal } from "../../hooks/useModal";

export default function Navbar({ isLessThan600, onLinkClick }) {

  const { isSignUpOpen, setIsSignUpOpen, setIsSignUp } = useModal();

  function handleSignUpOpen() {
    setIsSignUpOpen(true);
    setIsSignUp(true);
  }

  return (
    <>
      <ul className={isLessThan600 ? "nav nav_mobile" : "nav"} id="menu">
        <div className="nav__container">
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
        </div>
        <li className="nav__item">
          <button
            className="button button_type_primary"
            type="button"
            aria-label="Sign up"
            onClick={handleSignUpOpen}
            disabled={isSignUpOpen}
          >
            Sign Up
          </button>
        </li>
      </ul>
      {/* <SignUpModal />
      <LoginModal /> */}
    </>
  );
}
