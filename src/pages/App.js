import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

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
  return (
    <div className="page">
      <StateMachineProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/create" element={<Create />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<Faq />} />
        </Routes>

        <Footer />
        <ModalWithForm isOpen={isOpen} />
      </StateMachineProvider>
    </div>
  );
}

export default App;
