import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence, usePresence } from "framer-motion";
import { ulid } from "ulid";
import "./create.css";

import { CreateHaikuContext } from "../../contexts";
import { useUser, useAuth } from "../../hooks";
import * as openAiApi from "../../utils/apis/openaiApi";
import * as auth from "../../utils/apis/auth";
import { api } from "../../utils/apis";
import { transformAiDataObject } from "../../helpers/transformData";

import { CreateHaikuForm } from "../../components/form";
import Layout from "../../components/layout";
import Loader from "../loader/Loader";
import { useAnonUser } from "../../hooks/useAnonUser";

export default function Create() {
  const navigate = useNavigate();
  const haikuCtx = useContext(CreateHaikuContext);
  const { currentUser, setCurrentUser } = useUser();
  const { isLoggedIn, setIsLoggedIn, token, setToken } = useAuth();
  const { anonUser, initializeAnonUser } = useAnonUser();

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

  /* -------------------------------- handlers -------------------------------- */
  const handleSubmitClick = async (subject, terms) => {
    setIsLoading(true);
    let userData = currentUser;

    try {
      //1. if !isLoggedIn, create a new anonymous user
      if (!isLoggedIn) {
        initializeAnonUser();
        userData = anonUser;
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
      haikuCtx.updateAll(tsfResponse[0], openAiData);
      navigate("/result");
    } catch (err) {
      setIsError(true);
      navigate("/");
      console.log(err.response);
      console.log(err.response.data);
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
