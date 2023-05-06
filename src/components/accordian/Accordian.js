
import React, { useState } from "react";
import "./accordion.css";
import { faqs } from "../../utils/data/faqData";
import AccordionItem from "./AccordianItem";


const Accordion = () => {

  
  const [indexClicked, setIndexClicked] = useState("0");

  
  const handleToggle = (index) => {
    if (indexClicked === index) {
      return setIndexClicked("0");
    }
    setIndexClicked(index);
  };

  
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
