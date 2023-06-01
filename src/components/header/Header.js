import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useWindowSize } from "../../hooks/useWindowSize";
import "./header.css";
import logo from "../../images/logo.png";
import Navbar from "../navbar";

export default function Header() {
  const navigate = useNavigate();
  const size = useWindowSize();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLessThan920, setIsLessThan920] = useState(false);
  const [isLessThan600, setisLessThan600] = useState(false);

  useEffect(() => {
    size.width < 920 ? setIsLessThan920(true) : setIsLessThan920(false);
    size.width < 600 ? setisLessThan600(true) : setisLessThan600(false);
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
      <div className={isLessThan920 ? "header header_mobile" : "header"}>
        <a href="#main">
          <img
            className="header__logo"
            src={logo}
            alt="haikukedoodle logo"
            onClick={handleLogoClick}
          />
        </a>

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
          ></button>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
