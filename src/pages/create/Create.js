import React, { useState, useEffect, useCallback } from "react";
import "./create.css";
import { useStateMachine } from "little-state-machine";
import { updateSubjectDetails } from "../../actions/subjectDetails";
import { motion, AnimatePresence } from "framer-motion";

import SubjectForm from "../../components/form/subjectForm";

import { transformAiDataObject } from "../../utils/transformData";

import { SubjectModal } from "../../components/modal/SubjectModal";

export default function Create() {
  const [isOpen, setIsOpen] = useState(false);
  const [newSong, setNewSong] = useState([]);
  const [zipPairs, setZipPairs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const { state, actions } = useStateMachine({ updateSubjectDetails });
  console.log(state);
  console.log(newSong);

  useEffect(() => {
    if (newSong.length < 1) {
      return;
    }
    const zipPairs = [];
    for (let i = 0; i < 3; i++) {
      zipPairs.push([newSong[0].haikuLines[i], newSong[0].chordLines[i]]);
    }
    setZipPairs(zipPairs);
  }, [newSong]);

  //set chat gpt statement with input
  function generatePrompt(input) {
    const capitalizedSubject =
      input[0].toUpperCase() + input.slice(1).toLowerCase();

    const prompt = `Write a "Haiku" about subject: ${capitalizedSubject} with the first line has 5 syllables, the second line has 7 syllables, the third line has 5 syllables.
      next, write three lines of guitar chords to accompany the haiku.`;
    return prompt;
  }

  const handleSubmitClick = useCallback(() => {
    //todo- change when backend implemented for res data

    const reqPrompt = generatePrompt(state.subjectDetails.subject);
    const transformed = transformAiDataObject(state.subjectDetails);
    setNewSong(transformed);
    // setNewSong(transformAiDataObject(state.subjectDetails)); //add haikuLines,chordLines to newSong

    console.log("state subject in create js", state.subjectDetails.subject);

    setIsLoaded(true); //
  }, [state.subjectDetails, setNewSong, setIsLoaded]);

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
                <SubjectForm
                  handleSubmitClick={handleSubmitClick}
                  state={state}
                  actions={actions}
                />
              </motion.div>
            </AnimatePresence>
          </>
        ) : (
          <>
            <div className="create__container">
              <h2 className="create__heading create__heading_result">
                {state.subjectDetails.subject}
              </h2>
              <p>{`~created by Anonymous on ${newSong[0].createdOn}`}</p>
              {zipPairs.map(([line, chord], i) => (
                <div className="card__line card__line_column" key={i}>
                  <p className="card__text">{line}</p>
                  <p className="card__text card__text_med card__text_indent">
                    {chord}
                  </p>
                </div>
              ))}
            </div>
          </>
        )}
      </section>
      <SubjectModal isOpen={isOpen} onClose={handleCloseModal} />
    </>
  );
}
