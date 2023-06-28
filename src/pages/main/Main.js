import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import _ from "lodash";
import { motion, AnimatePresence, usePresence } from "framer-motion";

import "./main.css";

import { api } from "../../utils/apis";
import { useUser, useAuth, useModal, useCards } from "../../hooks";

import Layout from "../../components/layout/";
import Yinyang from "../../components/yinyang/Yinyang";

export default function Main() {
  const [isVisible, setIsVisible] = useState(true); //controls visibility of yinyang wrt animation
  const [isPresent, safeToRemove] = usePresence(); //controls component remove from DOM

  const navigate = useNavigate();
  const { setCurrentUser } = useUser();
  const { setIsLoggedIn, setIsLoaded, token } = useAuth();

  /* ------------------------------- useEffects ------------------------------- */
  useEffect(() => {
    if (!token) {
      return;
    }
    api.setHeaders({
      authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    });

    api
      .getInfo()
      .then((res) => {
        if (res) {
          setIsLoggedIn(true);
          setIsLoaded(true);
          setCurrentUser(res);
        }
      })
      .catch((err) => {
        api.handleErrorResponse(err);
      });
  }, []);

  useEffect(() => {
    api.setHeaders({
      authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    });
  }, [token]);

  useEffect(() => {
    !isPresent && setTimeout(safeToRemove, 900);
  }, [isPresent]); //for animation component unmount

  /* -------------------------------- handlers -------------------------------- */
  function handleCreateClick() {
    setIsVisible(false);
    navigate("/create");
  }

  function handleReadClick() {
    setIsVisible(false);
    navigate("/read");
  }

  return (
    <>
      <Layout>
        <main className="main" id="main">
          <h1 className="main__heading">Haiku song generator using chat GPT</h1>

          <AnimatePresence mode="wait">
            {isVisible && (
              <motion.div
                className="main__image"
                transition={{ ease: "anticipate", duration: 1 }}
                initial={{ opacity: 0, scale: 0.75 }}
                animate={{ opacity: 1, rotate: 360, scale: 1 }}
                exit={{ opacity: 0, rotate: 360, scale: 0 }}
                key="container"
              >
                <Yinyang
                  className="main__image_size"
                  href="#cards"
                  onRightClick={handleCreateClick}
                  onLeftClick={handleReadClick}
                  key="yinyang"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </Layout>
    </>
  );
}
