import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence, usePresence } from "framer-motion";
import { ThreeDots } from "react-loading-icons";

import "./result.css";

import { useModal, useUser, useCreateHaiku } from "../../hooks";

import { Flower } from "../../components/flower";

export default function Result() {
  const navigate = useNavigate();

  const [isVisible, setIsVisible] = useState(true); //controls visibility of yinyang wrt animation
  const [isPresent, safeToRemove] = usePresence(); //used with animation

  const [zipPairs, setZipPairs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { isSignUpOpen, setIsLoginOpen, setIsSignUp, setIsDeniedAccessOpen } = useModal();
  const { state } = useCreateHaiku();
  const { currentUser } = useUser();

  /* ------------------------------- useEffects ------------------------------- */
  useEffect(() => {
    !isPresent && setTimeout(safeToRemove, 900);
  }, [isPresent]);

  useEffect(() => {
    const zipPairs = [];
    for (let i = 0; i < 3; i++) {
      zipPairs.push([state.haikuLines[i], state.chordLines[i]]);
    }
    setZipPairs(zipPairs);
  }, [state]);

  /* -------------------------------- handlers -------------------------------- */
  const handleStartOverClick = () => {
    navigate("/");

  };

  const handleHallOfFameClick = () => {
    setIsLoading(true);
    navigate("/read");
  };

  const handleLoginClick = () => {
    setIsLoginOpen(true);
    setIsSignUp(false);
  };

  return (
    <>
      <section className="result">
        <h2 className="result__heading">Nice Haiku!</h2>

        <AnimatePresence mode="wait">
          {isVisible && (
            <motion.div
              transition={{ ease: "linear", duration: 0.5 }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, rotate: 360, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              key="result"
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
                  {state.subject}
                </h2>
                {zipPairs.map(([line, chord], i) => (
                  <div className="result__line" key={i}>
                    <p className="result__text">{line}</p>
                    <p className="result__text result__text_med">{chord}</p>
                  </div>
                ))}
                <p className="result__author">{`~created by ${state.author} on ${state.createdOn}`}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        {currentUser.isAnonymous ? (
          <div className="result__heading-container">
            <button
              className="button button_type_transparent button_type_link"
              onClick={handleLoginClick}
            >
              Login
            </button>
            <h2 className="result__sub-heading">to save with your pen name!</h2>
          </div>
        ) : null}

        <div className="result__container_button">
          <button
            className="button button_type_secondary"
            onClick={handleStartOverClick}
            disabled={isSignUpOpen}
            aria-label="start over button"
          >
            Start Over
          </button>
          {!isLoading ? (
            <button
              className="button button_type_primary"
              onClick={handleHallOfFameClick}
              disabled={isSignUpOpen}
              aria-label="save haiku button"
            >
              Hall of Fame
            </button>
          ) : (
            <button
              className="button button_type_primary"
              type="button"
              aria-label="show more"
            >
              <ThreeDots height="1em" width="60px" stroke="#2b24d2" />
            </button>
          )}
        </div>
      </section>
    </>
  );
}
