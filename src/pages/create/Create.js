import React, { useState, useEffect, useContext, useCallback } from "react";
import "./create.css";

import { motion, AnimatePresence } from "framer-motion";
import { CreateHaikuContext } from "../../context";

import SubjectForm from "../../components/form/subjectForm";
import Flower from "../../components/Flower/Flower";
import Card from "../../components/card/Card";

import { transformAiDataObject } from "../../utils/transformData";
import { resp } from "../../utils/data/backupData";

import { SubjectModal } from "../../components/modal/SubjectModal";

export default function Create() {
  const [isOpen, setIsOpen] = useState(false);

  const [zipPairs, setZipPairs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [test, setTest] = useState();

  const haikuCtx = useContext(CreateHaikuContext);

  useEffect(() => {
    const zipPairs = [];
    for (let i = 0; i < 3; i++) {
      zipPairs.push([
        haikuCtx.state.haikuLines[i],
        haikuCtx.state.chordLines[i],
      ]);
    }
    setZipPairs(zipPairs);
  }, [haikuCtx.state]);

  //set chat gpt statement with input
  function generatePrompt(input) {
    const capitalizedSubject =
      input[0].toUpperCase() + input.slice(1).toLowerCase();

    const prompt = `Write a "Haiku" about subject: ${capitalizedSubject} with the first line has 5 syllables, the second line has 7 syllables, the third line has 5 syllables.
      next, write three lines of guitar chords to accompany the haiku.`;
    return prompt;
  }

  const handleSubmitClick = (subject, terms) => {
    //todo - update when backend implemented for res data

    const tsfResponse = transformAiDataObject(resp); //extract lines and chords
    haikuCtx.updateAll(subject, terms, tsfResponse[0]);
    setIsLoaded(true);
  };

  const handleDownloadClick = () => {
    console.log("click");
  };

  function handleCloseModal() {
    setIsOpen(false);
  }
  return (
    <>
      <section className="create" key="create">
        {!isLoaded ? (
          <>
            <h1 className="create__heading">
              Enter a one word subject to create your haiku.
            </h1>
            <AnimatePresence mode="wait">
              <motion.div
                className="create__container"
                animate={{ opacity: 1, scale: 1 }}
                transition={{ ease: "linear", duration: 0.75 }}
                initial={{ opacity: 1, scale: 0 }}
                exit={{ opacity: 0, rotate: 360, scale: 1.2 }}
              >
                <SubjectForm handleSubmitClick={handleSubmitClick} />
              </motion.div>
            </AnimatePresence>
          </>
        ) : (
          <>
            <h1 className="create__heading create__heading_result">the Masterpiece.</h1>

            <div className="create__container create__container_card">
            <Flower
                width="154"
                height="133"
                petalcolor="rgba(213,157,169,.2)"
                colorb="#47535c59"
                colorc="#171e2659"
                className="create__flower"
              />
              <h2 className="create__heading create__heading_card_result">
                {haikuCtx.state.subject}
              </h2>
              {zipPairs.map(([line, chord], i) => (
                <div className="card__line card__line_column" key={i}>
                  <p className="card__text">{line}</p>
                  <p className="card__text card__text_med card__text_indent">
                    {chord}
                  </p>
                </div>
              ))}{" "}
              <p>{`~created by Anonymous on ${haikuCtx.state.createdOn}`}</p>
            </div>
            <div className="create__result-btn-container">
              <button className="button button_type_med">Save to my Profile</button>
              <button className="button button_type_med">Make Another Haiku</button>
              <button className="button button_type_med">Read more Haikus</button>
            </div>
          </>
        )}
      </section>
      <SubjectModal isOpen={isOpen} onClose={handleCloseModal} />
    </>
  );
}
