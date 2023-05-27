import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence, usePresence, Variants } from "framer-motion";
import "./create.css";

import { CreateHaikuContext } from "../../contexts";
import { transformAiDataObject } from "../../helpers/transformData";
import { resp } from "../../utils/data/backupData";

import { CreateHaikuForm } from "../../components/form";
import Loader from "../loader/Loader";

export default function Create() {
  const navigate = useNavigate();
  const haikuCtx = useContext(CreateHaikuContext);

  const [isPresent, safeToRemove] = usePresence();
  const [zipPairs, setZipPairs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    !isPresent && setTimeout(safeToRemove, 900);
  }, [isPresent]);
  //for animation component unmount

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

  function delayForDemo(promise) {
    return new Promise((resolve, reject) => {
      // setTimeout(()=>reject(new Error("fake error")), 4000);//this will mimic fail
      setTimeout(() => resolve(), 4000); //this will mimic success
    })
      .then(() => promise)
      .then(() => navigate("/result"))
      .catch(() => {
        setIsError(true);
        navigate("/");
      });
  }
  /* -------------------------------- handlers -------------------------------- */
  const handleSubmitClick = (subject, terms) => {
    //todo - update when backend implemented for res data

    const tsfResponse = transformAiDataObject(resp); //extract lines and chords
    haikuCtx.updateAll(subject, terms, tsfResponse[0]);
    setIsLoading(true);
    delayForDemo();
  };

  return (
    <>
      <section className="create" key="create">
        <AnimatePresence mode="wait">
          {!isLoading && (
            <>
              <h1 className="create__heading">
                Enter a one word subject to create your haiku.
              </h1>

              <motion.div
                className="create__container"
                transition={{ ease: "linear", duration: 1 }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                key="form"
              >
                <CreateHaikuForm handleSubmitClick={handleSubmitClick} />
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {isLoading && (
          <>
            <Loader isError={isError} isLoading={isLoading} />
          </>
        )}
      </section>
    </>
  );
}
