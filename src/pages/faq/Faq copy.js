//pages/faq/FAq.js
/* --------------------------------- imports -------------------------------- */
import React, { useState, useRef, useEffect } from "react";
import "./faq.css";
import { Add } from "@mui/icons-material";
/* ----------------------------------- FAQ ---------------------------------- */
export default function FAQ() {
  /* ----------------------------- useState/useRef ---------------------------- */
  const [active, setActive] = useState(false);
  const contentRef = useRef(null);
  console.log(contentRef);
  /* -------------------------------- useEffect ------------------------------- */
  useEffect(() => {
    contentRef.current.style.maxHeight = active
      ? `${contentRef.current.scrollHeight}px`
      : "0px";
  }, [contentRef, active]);
  /* -------------------------------- functions ------------------------------- */
  const toggleAccordion = () => {
    setActive(!active);
  };
  /* --------------------------------- return --------------------------------- */
  return (
    <>
      <section className="faq">
        <div className="faq__container">
          <h1 className="faq__heading"> Frequently Asked Questions</h1>
          <div className="faq__button_container">
            <button
              className={`faq__question-button ${active}`}
              onClick={toggleAccordion}
            >
              <div>
                <div className="faq__question-container">
                  <h4 className="faq__question-text"> question goes here</h4>
                  <Add
                    className={
                      active ? `faq__icon faq__icon_rotate` : `faq__icon`
                    }
                  />
                </div>
                <div
                  ref={contentRef}
                  className={
                    active ? `faq__answer faq__answer-divider` : `faq__answer`
                  }
                >
                  <p>answer here</p>
                </div>
              </div>
            </button>

            <button
              className={`faq__question-button ${active}`}
              onClick={toggleAccordion}
            >
              <div>
                <div className="faq__question-container">
                  <h4 className="faq__question-text"> question goes here</h4>
                  <Add
                    className={
                      active ? `faq__icon faq__icon_rotate` : `faq__icon`
                    }
                  />
                </div>
                <div
                  ref={contentRef}
                  className={
                    active ? `faq__answer faq__answer-divider` : `faq__answer`
                  }
                >
                  <p>answer here</p>
                </div>
              </div>
            </button>
            <button
              className={`faq__question-button ${active}`}
              onClick={toggleAccordion}
            >
              <div>
                <div className="faq__question-container">
                  <h4 className="faq__question-text"> question goes here</h4>
                  <Add
                    className={
                      active ? `faq__icon faq__icon_rotate` : `faq__icon`
                    }
                  />
                </div>
                <div
                  ref={contentRef}
                  className={
                    active ? `faq__answer faq__answer-divider` : `faq__answer`
                  }
                >
                  <p>answer here</p>
                </div>
              </div>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
