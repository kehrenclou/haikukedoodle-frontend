import React, {useContext}from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

import { useModal, useAuth, useUser, useCreateHaiku } from "../../hooks";
import { CreateHaikuContext } from "../../contexts";

export default function Navbar({ isLessThan600, onLinkClick }) {
  const { currentUser,setAnonUser  } = useUser();

  const { isSignUpOpen, setIsSignUpOpen, setIsSignUp } = useModal();
  const { isLoggedIn, onLogOut } = useAuth();
  const haikuCtx = useContext(CreateHaikuContext);

  function handleSignUpOpen() {
    setIsSignUpOpen(true);
    setIsSignUp(true);
  }

  function handleLogOut() {
    onLogOut();
    setAnonUser();
    haikuCtx.resetAll();
   
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
          {isLoggedIn ? (
            <li className="nav__item">
              <p className="nav__link nav__link_nolink">{currentUser.name}</p>
            </li>
          ) : null}
        </div>

        <li className="nav__item">
          {isLoggedIn ? (
            <button
              className="button button_type_logout"
              type="button"
              aria-label="Log out"
              onClick={handleLogOut}
            >
              Log Out
            </button>
          ) : (
            <button
              className="button button_type_primary"
              type="button"
              aria-label="Sign up"
              onClick={handleSignUpOpen}
              disabled={isSignUpOpen}
            >
              Sign Up
            </button>
          )}
        </li>
      </ul>
    </>
  );
}
