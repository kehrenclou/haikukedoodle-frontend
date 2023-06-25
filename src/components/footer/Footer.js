
import "./footer.css";
import React from "react";
import logo from "../../images/logo.png";


export default function Footer() {
  const currYear = new Date().getFullYear();
  const email = "kedoodledev@gmail.com";
  const subject = "Greetings from haikukedoodle!";
  const body = "Hi there, I am contacting you from the haikukedoodle website";
  const mailToLink = `mailto:${email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
  const gitHubLink = "https://github.com/kehrenclou";

  return (
    <>
      <footer className="footer">
        <img src={logo} className="footer__logo" alt="haikukedoodle logo" />

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
