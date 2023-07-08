import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence, usePresence } from "framer-motion";

import "./create.css";

import {


  useCreateHaiku,

  useModal,
} from "../../hooks";
import * as openAiApi from "../../utils/apis/openaiApi";
import { api } from "../../utils/apis";

import { transformAiDataObject } from "../../helpers/transformData";
import { checkIfBlockedWord } from "../../helpers/checkWord";
import { BLOCKED_WORDS } from "../../utils/data/blockedWords";
import { NoProfanityAllowedError } from "../../errors/profanity";

import { CreateHaikuForm } from "../../components/form";
import Layout from "../../components/layout";
import Loader from "../loader/Loader";
// import { useAnonUser } from "../../hooks/useAnonUser";

export default function Create() {
  const navigate = useNavigate();




  const { state, updateAll } = useCreateHaiku();

  const {

    setIsDeniedAccessOpen,
    setIsProfanityAlertOpen,
  } = useModal();

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
      zipPairs.push([state.haikuLines[i], state.chordLines[i]]);
    }
    setZipPairs(zipPairs);
  }, [state]);





  /* -------------------------------- handlers -------------------------------- */


  return (
    <>
      <Layout>
        <section className="create" key="create">
          <AnimatePresence mode="wait">
            {!isLoading && (
              <>
                {!isRestricted && (
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
                {/* <motion.div
                  className="create__container"
                  transition={{ ease: "linear", duration: 1 }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  key="form"
                >
                  <CreateHaikuForm handleSubmitClick={handleSubmitClick} />
                </motion.div> */}
              </>
            )}
          </AnimatePresence>

          {isLoading && (
            <>
              <Loader isError={isError} isLoading={isLoading} />
            </>
          )}
        </section>
      </Layout>
    </>
  );
}
