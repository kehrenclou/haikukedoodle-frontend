import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./navbar.css";

import { useModal, useAuth, useUser } from "../../hooks";

export default function Navbar({ isLessThan600, onLinkClick }) {
  const { currentUser } = useUser();
  const { isSignUpOpen, setIsSignUpOpen, setIsSignUp } = useModal();
  const { isLoggedIn, onLogOut } = useAuth();

  const navigate = useNavigate();

  function handleSignUpOpen() {
    setIsSignUpOpen(true);
    setIsSignUp(true);
  }

  function handleLogOut() {
    onLogOut();
    navigate("/");
  }
  return (
    <>
      <ul
        className={
          isLessThan600 ? "nav nav_mobile nav__container" : "nav nav__container"
        }
        id="menu"
      >
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
        {isLoggedIn & !currentUser.isAnonymous ? (
          <li className="nav__item">
            <p className="nav__link nav__link_nolink">{currentUser.name}</p>
          </li>
        ) : null}

        <li className="nav__item nav__item_last">
          {isLoggedIn & !currentUser.isAnonymous ? (
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
