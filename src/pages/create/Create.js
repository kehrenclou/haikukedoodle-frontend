import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence, usePresence } from "framer-motion";
import "./create.css";

import { CreateHaikuContext } from "../../contexts";
import { useUser } from "../../hooks";
import * as openAiApi from "../../utils/apis/openaiApi";
import { transformAiDataObject } from "../../helpers/transformData";

import { CreateHaikuForm } from "../../components/form";
import Loader from "../loader/Loader";

export default function Create() {
  const navigate = useNavigate();
  const haikuCtx = useContext(CreateHaikuContext);
  const { currentUser } = useUser();

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
  const handleSubmitClick = (subject, terms) => {
    const sub = subject;
    const term = terms;
    setIsLoading(true);
    openAiApi
      .generateHaiku(subject, currentUser, terms)
      .then((res) => {
        console.log(res);
        if (res) {
          const tsfResponse = transformAiDataObject(res);
          // haikuCtx.updateAll(sub, term, tsfResponse[0], res, currentUser);
          haikuCtx.updateAll(tsfResponse[0], res);
        } else {
          console.log("fail");
        }
      })
      .then(() => navigate("/result"))
      .catch((error) => {
        console.log("openaierror", error);
        setIsError(true);
        navigate("/");
      });
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
