
import "./accordion.css";
import React, {useRef} from "react";


const AccordionItem = ({ faq, onToggle, active }) => {
  const { question, answer } = faq;
  const content=useRef();
  console.log(active);
  return (
    <>
      <li
        className={`accordion__item ${active ? "accordion__item_active" : ""}`}
      >
        <button className="accordion__button" onClick={onToggle}>
          {question}
          <span className="accordion__control">{active ? "--" : "+"}</span>
        </button>
        <div ref={content}
          className="accordion__answer-wrapper"
          style={active ?{height:content.current.scrollHeight}:{height:"0px"}}
        >
          <div className="accordion__answer">{answer}</div>
        </div>
      </li>
    </>
  );
};

export default AccordionItem;
