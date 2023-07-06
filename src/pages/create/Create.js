import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence, usePresence } from "framer-motion";

import "./create.css";

import { useUser, useAuth, useCreateHaiku } from "../../hooks";
import * as openAiApi from "../../utils/apis/openaiApi";

import { transformAiDataObject } from "../../helpers/transformData";

import { CreateHaikuForm } from "../../components/form";
import Layout from "../../components/layout";
import Loader from "../loader/Loader";
import { useAnonUser } from "../../hooks/useAnonUser";

export default function Create() {
  const navigate = useNavigate();

  const { currentUser, setExpDate } = useUser();
  const { isLoggedIn } = useAuth();
  const { state, updateAll } = useCreateHaiku();
  const { initializeAnonUser } = useAnonUser();

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
  console.log(currentUser);
  console.log(setExpDate());
  /* -------------------------------- handlers -------------------------------- */
  const handleSubmitClick = async (subject, terms) => {
    setIsLoading(true);
    let userData = currentUser;

    try {
      //1. if !isLoggedIn, create a new anonymous user
      if (!isLoggedIn) {
        const newAnonUser = await initializeAnonUser();
        userData = newAnonUser;
      }

      const openAiData = await openAiApi.generateHaiku(
        subject,
        userData,
        terms
      );
      if (!openAiData) {
        return console.log("fail");
      }
      const tsfResponse = transformAiDataObject(openAiData);
      updateAll(tsfResponse[0], openAiData);
      navigate("/result");
    } catch (err) {
      setIsError(true);
      navigate("/");
      console.log(err);
    }
  };

  return (
    <>
      <Layout>
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
      </Layout>
    </>
  );
}
