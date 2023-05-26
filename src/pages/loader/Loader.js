import "./loader.css";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, usePresence } from "framer-motion";


export default function Loader({ isLoading, setIsLoading, isError }) {
  // const [isLoading, setIsLoading] = useState(false);
  // const [isError, setIsError] = useState(true);
  const [isPresent, safeToRemove] = usePresence();

  useEffect(() => {
    !isPresent && setTimeout(safeToRemove, 900);
  }, [isPresent]);
  //for animation component unmount

  return (
    <>
      {!isError && (
        <>
        
          <AnimatePresence mode="wait">
            <motion.div
              transition={{ delay: 1, ease: "linear", duration: 0.5 }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              key="loader"
            >
               
              <div className="loader">
                <p className="loader__text loader__animate">
                  Code and algorithms
                </p>
                <p className="loader__text loader__animate loader__animate_5s">
                  Aftifical mind at work
                </p>
                <p className="loader__text loader__animate loader__animate_4s">
                  Haiku born from bytes
                </p>
          
              </div>
         
              <div>
                <p className="loader__text loader__text_sub  loader__animate_sub">
                  Loading
                </p>
                
              </div>
              
            </motion.div>
            
          </AnimatePresence>
     
        </>
      )}
      {isError && (
        <>
          <div className="loader loader__error">
            <p >
              Something Went Wrong
            </p>
            <p>Try again Later.</p>
          </div>
        </>
      )}
    </>
  );
}
