import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence, usePresence } from "framer-motion";

import "./result.css";
import { api } from "../../utils/apis";
import { CreateHaikuContext } from "../../contexts";
import { useModal, useAuth, useCards } from "../../hooks";

import { Flower } from "../../components/flower/Flower";

export default function Result() {
  const navigate = useNavigate();
  const haikuCtx = useContext(CreateHaikuContext);

  const [isPresent, safeToRemove] = usePresence();//used with animation

  const [zipPairs, setZipPairs] = useState([]);

  const { isSignUpOpen, setIsSignUpOpen, setIsSignUp } = useModal();
  const { loggedIn, isLoggedIn } = useAuth();
  const { cards, setCards } = useCards();
  /* ------------------------------- useEffects ------------------------------- */
  useEffect(() => {
    !isPresent && setTimeout(safeToRemove, 900);
  }, [isPresent]);

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
  const handleStartOverClick = () => {
    navigate("/");
  };

  const handleSaveClick = () => {

    if (!isLoggedIn) {
      setIsSignUpOpen(true);
      setIsSignUp(true);
    } else {
      api
        .saveCard(haikuCtx.state)
        //push data to backend
        //add to cards and navigate to
        .then(() => {
          setCards([...cards, { ...haikuCtx.state, likes: [], bookmarks: [] }]);
          console.log({cards})
          //array destructiong and destructuring
          navigate("/"); //need to figure out transition here
        });
      // .then(() => {
      //   // haikuCtx.resetAll(); //use this to reset haikuCtx.
      // });
    }
  };
  console.log({cards})

  return (
    <>
      <section className="result">
        <AnimatePresence mode="wait">
          <motion.div
            transition={{ ease: "linear", duration: 0.5 }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, rotate: 360, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            key="card"
          >
            <div className="result__container">
              <Flower
                width="154"
                height="133"
                colora="rgba(213,157,169,.2)"
                colorb="rgba(213,157,169,.3)"
                colorc="rgba(213,157,169,.5)"
                className="result__flower"
              />
              <h2 className="result__heading result__heading_card">
                {haikuCtx.state.subject}
              </h2>
              {zipPairs.map(([line, chord], i) => (
                <div className="result__line" key={i}>
                  <p className="result__text">{line}</p>
                  <p className="result__text result__text_med">{chord}</p>
                </div>
              ))}
              <p>{`~created by Anonymous on ${haikuCtx.state.createdOn}`}</p>
            </div>
          </motion.div>
        </AnimatePresence>
        <div className="result__container_button">
          <button
            className="button button_type_secondary"
            onClick={handleStartOverClick}
            disabled={isSignUpOpen}
            aria-label="start over button"
          >
            Start Over
          </button>

          <button
            className="button button_type_primary"
            onClick={handleSaveClick}
            disabled={isSignUpOpen}
            aria-label="save haiku button"
          >
            Save Haiku
          </button>
        </div>
      </section>
    </>
  );
}
