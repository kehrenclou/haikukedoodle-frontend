//src/App.js
/* --------------------------------- imports -------------------------------- */
import React from "react";
import { Route, Routes } from "react-router-dom";
// import ReactDom from "react-dom";

import { StateMachineProvider, createStore } from "little-state-machine";
import subjectDetails from "../states/subjectDetails";

import Header from "./header";
import Main from "../pages/main";
import Footer from "./footer/Footer";
import About from "../pages/about";
import Step1 from "../pages/haikuWizard/Step1";
import ModalWithForm from "./modal/ModalWithForm";
import Card from "./card/card";

//implement routes here

/* ---------------------------------- store --------------------------------- */
// initializes store from states/subjectDetails

createStore({
  subjectDetails,
});
/* ----------------------------------- App ---------------------------------- */
function App() {
  return (
    <div className="page">
      <StateMachineProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/create" element={<Step1 />} />
          <Route path="/about" element={<About />} />
          {/* <Main></Main> */}
        </Routes>
        <Card/>
        <Footer />
        <ModalWithForm/>
        
      </StateMachineProvider>
    </div>
  );
}

export default App;
