import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence, usePresence } from "framer-motion";

import "./result.css";
import { CreateHaikuContext, UserContext } from "../../contexts";

import { SignupModal, UserModal } from "../../components/modal";
import Flower from "../../components/flower/Flower";

export default function Result() {
  const navigate = useNavigate();
  const haikuCtx = useContext(CreateHaikuContext);
  const userCtx = useContext(UserContext);

  const [isPresent, safeToRemove] = usePresence();

  const [zipPairs, setZipPairs] = useState([]);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignUp, setIsSignUp] = useState(true);

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
    setIsSignUpOpen(true);
  };

  const handleCloseModal = () => {
    setIsSignUpOpen(false);
    setIsLoginOpen(false);
  };

  const handleSignUpSubmitClick = (data) => {
    userCtx.updateEmail(data.email); //this works
    setIsSignUp(true);
    
  };

  const handleLoginSubmitClick = (data) => {
    console.log("clicked");
  };

  const handleLoginClick = () => {
    console.log("link clicked");
    setIsSignUpOpen(false);
    setIsLoginOpen(true);
    setIsSignUp(false);
  };
  const handleSignUpClick = () => {
    console.log("clicked");
    setIsSignUp(true);
    setIsLoginOpen(false);
    setIsSignUpOpen(true);
  };
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
      <UserModal
        signup={isSignUp}
        isOpen={isSignUpOpen}
        onClose={handleCloseModal}
        name="signup"
        title="Sign up to save your Haiku"
        onLinkClick={handleLoginClick}
        onSubmitClick={handleSignUpSubmitClick}
        submitText="Sign Up"
        text="Already have an account?"
        linkText="Log in here!"
      />
      <UserModal
        signup={isSignUp}
        isOpen={isLoginOpen}
        onClose={handleCloseModal}
        name="login"
        title="Please Log in."
        onLinkClick={handleSignUpClick}
        onSubmitClick={handleLoginSubmitClick}
        submitText="Log in"
        text="Don't have an account?"
        linkText="Sign up Here"
      />
    </>
  );
}
