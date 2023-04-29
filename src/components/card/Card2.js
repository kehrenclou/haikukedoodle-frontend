//components/card/card.js
/* --------------------------------- imports -------------------------------- */
import React from "react";
import "./card.css";

import Cardbg1 from "./backgrounds/Cardbg1";
/* ---------------------------------- Card ---------------------------------- */

export default function Card2({ lines, chords }) {
  return (
    <>
      <li className="card">
     
        <Cardbg1 className="card__bg" />
        <section className="card__section card__header card__header_light">
          <div className="card__group">
            <h2 className="card__title">Davinci Haiku</h2>
            <button className="card__button_type_delete"></button>
          </div>
        </section>

        <section className="card__section">
          <div className="card__line card__line_column">
            <p className="card__text">Code and algorithms</p>
            <p className="card__text card__text_med card__text_indent">
              D F# Em
            </p>
          </div>
          <div className="card__line card__line_column">
            <p className="card__text">Artificial mind at work</p>
            <p className="card__text card__text_med card__text_indent">
              D F# Em
            </p>
          </div>
          <div className="card__line card__line_column">
            <p className="card__text">Haiku born from bytes</p>
            <p className="card__text card__text_med card__text_indent">
              D F# Em
            </p>
          </div>
        </section>

        <section className="card__section">
          <p className="card__text card__text_small">
            ~ by anonymous April 2, 2023
          </p>
        </section>
        <section className="card__section_dark">
          <button className="card__button_type_download"></button>
          <button className="card__button_type_download"></button>
          <button className="card__button_type_download"></button>
        </section>
      </li>
    </>
  );
}
