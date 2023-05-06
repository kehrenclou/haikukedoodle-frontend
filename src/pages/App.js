import React, { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import { StateMachineProvider, createStore } from "little-state-machine";
import subjectDetails from "../states/subjectDetails";

import Header from "../components/header";
import Main from "./main";
import Footer from "../components/footer/Footer";
import About from "./about";
import Create from "./create";
import Step1 from "./haikuWizard/Step1";
import Faq from "./faq/Faq";
import ModalWithForm from "../components/modal/ModalWithForm";

/* ---------------------------------- store --------------------------------- */
// initializes store from states/subjectDetails

createStore({
  subjectDetails,
});

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  return (
    <div className="page">
      <StateMachineProvider>
      
          <Header />
          <AnimatePresence mode="wait">
          <Routes location={location} key={location.key}>
            <Route path="/" element={<Main />} />
            <Route path="/create" element={<Create />} />
            <Route path="/about" element={<About />} />
            <Route path="/faq" element={<Faq />} />
          </Routes>
          </AnimatePresence>
          <Footer />
       
        <ModalWithForm isOpen={isOpen} />
      </StateMachineProvider>
    </div>
  );
}

export default App;
