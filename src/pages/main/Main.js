//components/main.jsx
/* --------------------------------- imports -------------------------------- */
import React from "react";

import "./main.css";

import Yinyang from "../../components/yinyang/Yinyang";

import Card from "../../components/card/Card";

/* --------------------------------- imports -------------------------------- */
import SubjectForm from "../../components/form/subjectForm";
import Step1 from "../haikuWizard/Step1";
/* ---------------------------------- Main ---------------------------------- */
export default function Main() {
  return (
    <>
      <main className="main">
        <section className="main__hero">
          <h1 className="main__heading">Haiku song generator using chat GPT</h1>
          <div className="main__image">
            <Yinyang className="main__image_size"  />
          </div>
        </section>

        <section className="main__cards ">
          <h2 className="main__heading ">Read the poems</h2>
          <ul className="main__cards_list">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </ul>
        </section>
      </main>
    </>
  );
}
