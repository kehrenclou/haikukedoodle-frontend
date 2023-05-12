import React, { useState, useEffect, useContext, Suspense, lazy } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence, usePresence } from "framer-motion";
import "../create/create.css";

import { CreateHaikuContext } from "../../context";

import Flower from "../../components/Flower/Flower";

export default function Result({}) {
    const navigate = useNavigate();
  const haikuCtx = useContext(CreateHaikuContext);
  const [zipPairs, setZipPairs] = useState([]);
  const [isSaveOpen, setIsSaveOpen] = useState(false);

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
  const handleStartOver = () => {
    navigate("/");
  };
  const handleSaveClick = () => {
    // setIsOpen(true);
    setIsSaveOpen(true);
  };

  return (
    <>
      <h1 className="create__heading create__heading_result">
        the Masterpiece.
      </h1>
      <AnimatePresence mode="wait">
        <motion.div
          animate={{ opacity: 1, scale: 1 }}
          transition={{ ease: "linear", duration: 0.75 }}
          initial={{ opacity: 1, scale: 0 }}
          exit={{ opacity: 0, rotate: 360, scale: 1.2 }}
          key="card"
        >
          <div className="create__container create__container_card">
            <Flower
              width="154"
              height="133"
              petalcolor="rgba(213,157,169,.2)"
              colorb="#47535c59"
              colorc="#171e2659"
              className="create__flower"
            />
            <h2 className="create__heading create__heading_card">
              {haikuCtx.state.subject}
            </h2>
            {zipPairs.map(([line, chord], i) => (
              <div className="create__card-line" key={i}>
                <p className="card__text">{line}</p>
                <p className="card__text card__text_med card__text_indent">
                  {chord}
                </p>
              </div>
            ))}{" "}
            <p>{`~created by Anonymous on ${haikuCtx.state.createdOn}`}</p>
          </div>
          <div className="create__result-btn-container">
            <button
              className="button button_type_secondary"
              onClick={handleStartOver}
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
              Save my Haiku
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
}
