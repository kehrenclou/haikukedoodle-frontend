import React, { useState } from "react";
import "./create.css";
import { useStateMachine } from "little-state-machine";
import { updateSubjectDetails } from "../../actions/subjectDetails";
import { motion, AnimatePresence } from "framer-motion";

import SubjectForm from "../../components/form/subjectForm";
import Card from "../../components/card/Card";
import Result from "./Result";
import {
  transformData,
  transformAiDataObject,
} from "../../utils/transformData";

import { SubjectModal } from "../../components/modal/SubjectModal";

export default function Create() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const { state, actions } = useStateMachine({ updateSubjectDetails });

  //set chat gpt statement with input
  function generatePrompt(input) {
    const capitalizedSubject =
      input[0].toUpperCase() + input.slice(1).toLowerCase();

    const prompt = `Write a "Haiku" about subject: ${capitalizedSubject} with the first line has 5 syllables, the second line has 7 syllables, the third line has 5 syllables.
      next, write three lines of guitar chords to accompany the haiku.`;
    return prompt;
  }

  function generateDate() {
    const options = { month: "short", day: "numeric", year: "numeric" };
    const date = new Date();
    // const [month, day, year] = [
    //   date.getMonth(),
    //   date.getDate(),
    //   date.getFullYear(),
    // ];
    // const today = `${month} ${day} ${year}`;
    const today = date.toLocaleDateString("en-US", options);
    return today;
  }
  
  function handleSubmitClick() {
    //todo- change when backend implemented for res data
    //1. create prompt with subject from store
    const reqPrompt = generatePrompt(state.subjectDetails.subject);

    //2. transform backup data object (set in SubjectDetails state)- dummy data
    //add haikuLines,chordLines to state (state updated w/ state in subjectForm)

    const testSong = transformAiDataObject(state.subjectDetails);
    actions.updateSubjectDetails({
      haikuLines: testSong[0].haikuLines,
      chordLines: testSong[0].chordLines,
    });

    const createdOn = generateDate;
    console.log(createdOn());
    setIsLoaded(true); //
  }
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
            <div className="create__container">
              <h2>{state.subjectDetails.subject}</h2>
              <p>{state.subjectDetails.haikuLines[0]}</p>
            </div>
          </>
        )}
      </section>
      <SubjectModal isOpen={isOpen} onClose={handleCloseModal} />
    </>
  );
}
