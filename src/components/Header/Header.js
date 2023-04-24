//components/Header.js
/* --------------------------------- imports -------------------------------- */

import logo from "../../images/logo.png";
import Navbar from "../navbar";
// import {Nav} from "../nav/Nav";
/* --------------------------------- Header --------------------------------- */
export default function Header() {
  return (
    <>
      <div className="header">
        <img className="header__logo" src={logo} alt="haikukedoodle logo" />
        <div className="header__nav">
          <Navbar></Navbar>
          <button className="header__button">Sign Up</button>
        </div>
      </div>
    </>
  );
}
