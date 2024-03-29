import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence, usePresence } from "framer-motion";

import "./create.css";

import {
  useUser,
  useAuth,
  useCreateHaiku,
  useAnonUser,
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

export default function Create() {
  const navigate = useNavigate();

  const {
    currentUser,
    setCurrentUser,
    isRestricted,
    setIsRestricted,
    isCounterLimit,
    isDateRestricted,
  } = useUser();

  const { isLoggedIn } = useAuth();
  const { state, updateAll } = useCreateHaiku();
  const { initializeAnonUser } = useAnonUser();
  const {
    setIsSignUpOpen,
    setIsSignUp,
    setIsDeniedAccessOpen,
    setIsProfanityAlertOpen,
    isLoading,
    setIsLoading,
  } = useModal();

  const [isPresent, safeToRemove] = usePresence();
  const [zipPairs, setZipPairs] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
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

  useEffect(() => {
    if (currentUser.isAnonymous && isRestricted) {
      setIsSignUp(true);
      setIsSignUpOpen(true);
    } else if (!currentUser.isAnonymous && isRestricted) {
      navigate("/");
      setIsDeniedAccessOpen(true);
    }
  }, [isRestricted, currentUser]);

  useEffect(() => {
    if (isCounterLimit && isDateRestricted) {
      setIsRestricted(true);
    } else if (isCounterLimit && !isDateRestricted) {
      //counterLimit but timeout limit is expired, update counter in db
      api
        .resetCount()
        .then((res) => {
          if (res) {
            setCurrentUser(res);
            setIsRestricted(false);
          }
        })
        .catch((err) => {
          api.handleErrorResponse(err);
        });
    } else {
      setIsRestricted(false);
    }
  }, [isLoggedIn, currentUser.isAnonymous]);

  /* -------------------------------- handlers -------------------------------- */
  const handleSubmitClick = async (subject, terms) => {
    setIsLoading(true);

    let userData = currentUser;

    try {
      //1.check subject for offensive words, if exist, throw error
      if (checkIfBlockedWord(subject.toLowerCase(), BLOCKED_WORDS)) {
        throw new NoProfanityAllowedError("Profanity Not Allowed as Subject");
      }
      //2. if not logged in, create a new anonymous user
      if (!isLoggedIn) {
        const newAnonUser = await initializeAnonUser();
        userData = newAnonUser;
      }
      //send call to openai
      const openAiData = await openAiApi.generateHaiku(
        subject,
        userData,
        terms
      );
      //update count after openai returns data
      const updatedUserData = await api.increaseCount();

      //it no openaidata or no updated count, return fail
      //?change to throw error
      if (!openAiData || !updatedUserData) {
        return console.log("fail");
      }
      //update context with new count
      setCurrentUser(updatedUserData);

      //transform openai data and set haiku context, navigate to result page
      const tsfResponse = transformAiDataObject(openAiData);
      updateAll(tsfResponse[0], openAiData);

      navigate("/result");
 
    } catch (err) {
      if (err instanceof NoProfanityAllowedError) {
        setIsProfanityAlertOpen(true);
      }
      setIsError(true);
      setIsLoading(false);
      navigate("/");
      console.log(err);
    }
  };

  return (
    <>
      <Layout id="create">
        <section className="create" key="create">
          <AnimatePresence mode="wait">
            {!isLoading && (
              <>
                {!isRestricted && (
                  <>
                    {isLoggedIn && !currentUser.isAnonymous ? (
                      <h2 className="create__heading create__heading_user">
                        Hello {currentUser.name}!
                      </h2>
                    ) : null}
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
