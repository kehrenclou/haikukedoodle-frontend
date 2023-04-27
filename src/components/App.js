//src/App.js
/* --------------------------------- imports -------------------------------- */
import React from "react";
import { Route, Routes } from "react-router-dom";
// import ReactDom from "react-dom";

import { StateMachineProvider, createStore } from "little-state-machine";
import subjectDetails from "../states/subjectDetails";

import Header from "./header/Header";
import Main from "../pages/main/Main";
import Step1 from "../pages/haikuWizard/Step1";

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

        <Route path="/"element={<Main/>}/>
        <Route path="/create" element={Step1}/>
        {/* <Main></Main> */}
        </Routes>
      </StateMachineProvider>
    </div>
  );
}

export default App;
