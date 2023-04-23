//components/Header.jsx
/* --------------------------------- imports -------------------------------- */

import logo from "../../images/logo.png";
/* --------------------------------- Header --------------------------------- */
export default function Header() {
  return (
    <>
      <div className="header">
        <img className="header__logo" src={logo} alt="haikukedoodle logo"/>
  
        <div className="header__logo_text">navbar</div>
      </div>
    </>
  );
};
