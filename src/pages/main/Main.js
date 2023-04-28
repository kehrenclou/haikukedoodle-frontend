//components/main.jsx
/* --------------------------------- imports -------------------------------- */
import React from "react";

import "./main.css";
import Header from "../../components/header/Header";

import Yinyang from "../../components/yinyang/Yinyang";

/* --------------------------------- imports -------------------------------- */
import SubjectForm from "../../components/form/subjectForm";
import Step1 from "../haikuWizard/Step1";
/* ---------------------------------- Main ---------------------------------- */
export default function Main() {
  return (
    <>
      <div className="main">
        {/* <Header /> */}
        <div className="main__body">
          <h1 className="main__heading">Haiku song generator using chat GPT</h1>
          <div>
            <Yinyang width="400px" />
            {/* <SubjectForm /> */}
            {/* <Step1/> */}
          </div>
        </div>
      </div>
    </>
  );
}
