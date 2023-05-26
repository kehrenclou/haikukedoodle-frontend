import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence, usePresence } from "framer-motion";

import "./result.css";
import { CreateHaikuContext } from "../../context";

import { SignupModal } from "../../components/modal/SignupModal";
import Flower from "../../components/flower/Flower";

export default function Result() {
  const navigate = useNavigate();
  const haikuCtx = useContext(CreateHaikuContext);
  const [isPresent, safeToRemove] = usePresence();

  const [zipPairs, setZipPairs] = useState([]);
  const [isSaveOpen, setIsSaveOpen] = useState(false);
  const [isLoginOpen,setIsLoginOpen]=useState(false);

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

  const handleStartOverClick = () => {
    navigate("/");
  };

  const handleSaveClick = () => {
    setIsSaveOpen(true);
  };

  const handleCloseModal = () => {
    setIsSaveOpen(false);
  };

  function handleSubmitClick() {
    console.log("clicked");
  }
  function handleLinkClick() {
    console.log("link clicked");
    setIsSaveOpen(false);
    setIsLoginOpen(true);
  }
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
            disabled={isSaveOpen}
            aria-label="start over button"
          >
            Start Over
          </button>

          <button
            className="button button_type_primary"
            onClick={handleSaveClick}
            disabled={isSaveOpen}
            aria-label="save haiku button"
          >
            Save Haiku
          </button>
        </div>
      </section>
      <SignupModal
        isOpen={isSaveOpen}
        onClose={handleCloseModal}
        onLinkClick={handleLinkClick}
        onSubmitClick={handleSubmitClick}
      />
    </>
  );
}
