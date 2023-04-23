//components/Header.jsx
/* --------------------------------- imports -------------------------------- */

import logo from "../../images/My project-crop.png";
/* --------------------------------- Header --------------------------------- */

export const Header = () => {
  return (
    <>
      <div className="header">
        <img className="header__logo" src={logo} alt="haikukedoodle logo"/>
  
        <div className="header__logo_text">navbar</div>
      </div>
    </>
  );
};
