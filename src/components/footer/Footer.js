import React from "react";
import { useNavigate } from "react-router-dom";
import "./footer.css";
import "../logo/logo.css";

import Logo from "../logo/Logo";
import IconLink from "../iconLink";

export default function Footer() {
  const navigate = useNavigate();

  const currYear = new Date().getFullYear();
  const email = "kedoodledev@gmail.com";
  const subject = "Greetings from haikukedoodle!";
  const body = "Hi there, I am contacting you from the haikukedoodle website";
  const mailToLink = `mailto:${email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
  const gitHubLink = "https://github.com/kehrenclou";

  function handleLogoClick() {
    navigate("/");
  }
  return (
    <>
      <footer className="footer">
        <IconLink onClick={handleLogoClick} href="#main">
          <Logo
            className="logo logo_footer"
            fill="#fff"
            stroke="#fff"
            aria-label="Haikukedoodle logo"
          />
        </IconLink>

        <div className="footer__links">
          <a className="footer__link" href={mailToLink}>
            kedoodledev@gmail.com
          </a>
          <a className="footer__link" href={gitHubLink}>
            github.com/kehrenclou
          </a>
        </div>
        <p className="footer__text">© {currYear} Haikukedoodle</p>
      </footer>
    </>
  );
}
