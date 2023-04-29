//components/card/card.js
/* --------------------------------- imports -------------------------------- */
import React from "react";
import "./card.css";
import Cardbg1 from "./backgrounds/Cardbg1";
/* ---------------------------------- Card ---------------------------------- */

export default function Card1({ lines, chords }) {
  return (
    <>
      <li className="card card__color_light">
        <Cardbg1 className="card__bg" />
        <header className="card__header">
        <h2 className="card__title">Davinci Haiku</h2>
        <div className="card__group">
        <p className="card__text card__text_small">created 4/29/23</p>
        <p className="card__text card__text_small">~guest</p>
        </div>
       
        </header>
       

        <div className="card__line card__line_column">
          <p className="card__text">Code and algorithms</p>
          <p className="card__text card__text_indent">D F# Em</p>
        </div>
        <div className="card__line card__line_column">
          <p className="card__text">Artificial mind at work</p>
          <p className="card__text card__text_indent">D F# Em</p>
        </div>
        <div className="card__line card__line_column">
          <p className="card__text">Haiku born from bytes</p>
          <p className="card__text card__text_indent">D F# Em</p>
        </div>
      </li>
    </>
  );
}
