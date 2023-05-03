//components/accordian/Accordian.js
/* --------------------------------- imports -------------------------------- */
import React, { useState } from "react";
import "./accordion.css";
import { faqs } from "../../utils/faqData";
import AccordionItem from "./AccordianItem";
/* ------------------------------ Accordian --------------------------------- */
const Accordion = () => {
  /* -------------------------------- useState -------------------------------- */
  const [indexClicked, setIndexClicked] = useState("0");

  /* -------------------------------- handlers -------------------------------- */
  const handleToggle = (index) => {
    if (indexClicked === index) {
      return setIndexClicked("0");
    }
    setIndexClicked(index);
  };
  /* --------------------------------- return --------------------------------- */
  return (
    <>
      <ul className="accordion">
        {faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            faq={faq}
            onToggle={() => handleToggle(index)}
            active={indexClicked === index}
          />
        ))}
      </ul>
    </>
  );
};
export default Accordion;
