import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useWindowSize } from "../../hooks/useWindowSize";
import "./header.css";
import "../logo/logo.css";

import Navbar from "../navbar";
import Logo from "../logo/Logo";
import IconLink from "../iconLink";

export default function Header() {
  const navigate = useNavigate();
  const size = useWindowSize();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLessThan920, setIsLessThan920] = useState(false);
  const [isLessThan600, setIsLessThan600] = useState(false);

  useEffect(() => {
    size.width < 920 ? setIsLessThan920(true) : setIsLessThan920(false);
    size.width < 600 ? setIsLessThan600(true) : setIsLessThan600(false);
  }, [size]);

  function handleMenuClick() {
    setIsMenuOpen(!isMenuOpen);
  }
  function handleLinkClick() {
    setIsMenuOpen(false);
  }
  function handleLogoClick() {
    setIsMenuOpen(false);
    navigate("/");
  }

  return (
    <>
      <header className={isLessThan920 ? "header header_mobile" : "header"}>
        <IconLink onClick={handleLogoClick} href="#main">
          <Logo
            className="logo"
            fill="#fff"
            stroke="#fff"
            aria-label="Haikukedoodle logo"
          />
        </IconLink>

        {!isLessThan600 || isMenuOpen ? (
          <Navbar
            isLessThan600={isLessThan600}
            onLinkClick={handleLinkClick}
          ></Navbar>
        ) : (
          ""
        )}

        {isLessThan600 ? (
          <button
            className={`button_type_mobile ${
              isMenuOpen
                ? "button_type_mobile_open"
                : "button_type_mobile_closed"
            }`}
            onClick={handleMenuClick}
            onBlur={handleMenuClick}
          ></button>
        ) : (
          ""
        )}
      </header>
    </>
  );
}
