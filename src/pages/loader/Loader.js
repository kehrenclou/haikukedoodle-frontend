import "./loader.css";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader({isLoading}) {
  // const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  return (
    <>
      {isLoading && (
        <>
          <AnimatePresence mode="wait">
            <motion.div
              animate={{ opacity: 1, scale: 1 }}
              transition={{ ease: "linear", duration: 0.75 }}
              initial={{ opacity: 0, scale: 0.75 }}
              exit={{ opacity: 0, rotate: 360, scale: 0 }}
              key="card"
            >
              <div className="loader">
                <h1 className="loader__heading">
                  Please enjoy this Haiku while you wait for your results...
                </h1>
                <p className="loader__text loader__animate loader__text_sub">
                  Code and algorithms,
                </p>
                <p className="loader__text loader__animate_2 loader__text_sub">
                  Aftifical mind at work,
                </p>
                <p className="loader__text loader__animate_3 loader__text_sub">
                  Haiku born from bytes...
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </>
      )}
      {isError && (
        <>
          <div className="loader">
            <h1 className="loader__heading">
              Something Went Wrong. Try again Later.
            </h1>
          </div>
        </>
      )}
    </>
  );
}
