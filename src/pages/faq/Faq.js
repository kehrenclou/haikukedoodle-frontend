//pages/faq/FAq.js
/* --------------------------------- imports -------------------------------- */
import React, { useState, useRef, useEffect } from "react";
import "./faq.css";

import Accordion from "../../components/accordian/Accordian";
/* ----------------------------------- FAQ ---------------------------------- */
export default function FAQ() {
  const email = "kedoodledev@gmail.com";
  const subject = "Greetings from haikukedoodle!";
  const body = "Hi there, I am contacting you from the haikukedoodle website";
  const mailToLink = `mailto:${email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  return (
    <>
      <section className="faq">
        <h1 className="faq__heading"> Frequently Asked Questions</h1>

        <Accordion />

        <h3 className="faq__questions">
          Have a question or comment? Shoot me an email!
        </h3>
        <a className="faq__questions faq__questions_link" href={mailToLink}>
          kedoodledev@gmail.com
        </a>
      </section>
    </>
  );
}
