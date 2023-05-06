import React, { useState } from "react";
import "./create.css";
import { useStateMachine } from "little-state-machine";
import { updateSubjectDetails } from "../../actions/subjectDetails";
import { motion, AnimatePresence } from "framer-motion";

import SubjectForm from "../../components/form/subjectForm";
import Card from "../../components/card/Card";
import Result from "./Result";
import { transformData } from "../../utils/transformData";

import { SubjectModal } from "../../components/modal/SubjectModal";

export default function Create() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [testSonga, setTestSonga] = useState([]);
  const { state, actions } = useStateMachine({ updateSubjectDetails });

  function handleOpenModal() {
    // setIsOpen(true);
    const testSong = transformData(state.subjectDetails.result);
    setIsLoaded(true);
    setTestSonga (testSong[0].haikuLines);
    console.log(testSong[0].haikuLines);
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
                <SubjectForm handleOpenModal={handleOpenModal} />
              </motion.div>
            </AnimatePresence>
          </>
        ) : (
          <>
            <div className="create__container">
              <h2>{state.subjectDetails.subject}</h2>
              <Result />
            </div>
          </>
        )}
      </section>
      <SubjectModal isOpen={isOpen} onClose={handleCloseModal} />
    </>
  );
}
