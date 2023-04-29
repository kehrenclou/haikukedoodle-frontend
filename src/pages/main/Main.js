//components/main.jsx
/* --------------------------------- imports -------------------------------- */
import React from "react";

import "./main.css";
import Yinyang from "../../components/yinyang/Yinyang";
import Card1 from "../../components/card/Card1";
import Card2 from "../../components/card/Card2";

/* --------------------------------- imports -------------------------------- */
import SubjectForm from "../../components/form/subjectForm";
import Step1 from "../haikuWizard/Step1";
/* ---------------------------------- Main ---------------------------------- */
export default function Main() {
  return (
    <>
      <main className="main">
        {/* <Header /> */}
        <section className="main__hero">
          <h1 className="main__heading">Haiku song generator using chat GPT</h1>
          <div>
            <Yinyang width="400px" />
          </div>
        </section>

        <section className="main__cards ">
          <div className="main__cards_bg_dark">
            <h2 className="main__heading main__heading_dark">Read the poems</h2>
            <ul className="main__cards_list">
              <Card2 />
              <Card2 />
              <Card2 />
              <Card2 />
              <Card2 />
              <Card2 />
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}
