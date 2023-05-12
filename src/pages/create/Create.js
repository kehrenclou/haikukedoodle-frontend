import React, { useState, useEffect, useContext, Suspense, lazy } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence, usePresence } from "framer-motion";
import "./create.css";

import { CreateHaikuContext } from "../../context";
import { transformAiDataObject } from "../../helpers/transformData";
import { resp } from "../../utils/data/backupData";

import { SignupModal } from "../../components/modal/SignupModal";
import SubjectForm from "../../components/form/SubjectForm";
import Loader from "../loader/Loader";

const Result = lazy(() => delayForDemo(import("../result/Result")));

/* ---------------------------------- demo ---------------------------------- */
function delayForDemo(promise) {
  return new Promise((resolve) => {
    setTimeout(resolve, 9000);
  }).then(() => promise);
}

export default function Create() {
  const navigate = useNavigate();
  const haikuCtx = useContext(CreateHaikuContext);

  const [isPresent, safeToRemove] = usePresence();
  const [isOpen, setIsOpen] = useState(false);
  const [isSaveOpen, setIsSaveOpen] = useState(false);
  const [zipPairs, setZipPairs] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    !isPresent && setTimeout(safeToRemove, 900);
  }, [isPresent]); //for animation component unmount

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

  /* ---------------------------------- utils --------------------------------- */
  //set chat gpt statement with input
  function generatePrompt(input) {
    const capitalizedSubject =
      input[0].toUpperCase() + input.slice(1).toLowerCase();

    const prompt = `Write a "Haiku" about subject: ${capitalizedSubject} with the first line has 5 syllables, the second line has 7 syllables, the third line has 5 syllables.
      next, write three lines of guitar chords to accompany the haiku.`;
    return prompt;
  }

  /* -------------------------------- handlers -------------------------------- */
  const handleSubmitClick = (subject, terms) => {
    //todo - update when backend implemented for res data

    const tsfResponse = transformAiDataObject(resp); //extract lines and chords
    haikuCtx.updateAll(subject, terms, tsfResponse[0]);
    setIsLoaded(true);
  };
  const handleStartOverClick = () => {
    navigate("/");
  };
  const handleSaveClick = () => {
    // setIsOpen(true);
    setIsSaveOpen(true);
  };
  function handleCloseModal() {
    setIsOpen(false);
    setIsSaveOpen(false);
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
                exit={{ opacity: 0, scale: 1 }} //modify this for the exit0.1
                key="form"
              >
                <SubjectForm handleSubmitClick={handleSubmitClick} />
              </motion.div>
            </AnimatePresence>
          </>
        ) : (
          <>
            <Suspense fallback={<Loader />}>
              <Result
                onSaveClick={handleSaveClick}
                onStartOverClick={handleStartOverClick}
                isSaveOpen={isSaveOpen}
              />
            </Suspense>
          </>
        )}
      </section>
      <SignupModal isOpen={isSaveOpen} onClose={handleCloseModal} />
    </>
  );
}
