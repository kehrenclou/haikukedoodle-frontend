//src/App.js
/* --------------------------------- imports -------------------------------- */
import React from "react";
// import ReactDom from "react-dom";
import { StateMachineProvider, createStore } from "little-state-machine";
import subjectDetails from "../states/subjectDetails";

import Main from "../pages/main/Main";

//implement routes here

/* ---------------------------------- store --------------------------------- */
// initializes store from states/subjectDetails

createStore({
  subjectDetails
});
/* ----------------------------------- App ---------------------------------- */
function App() {
  return (
    <StateMachineProvider>
      <div className="page">
        <Main></Main>
      </div>
    </StateMachineProvider>
  );
}

export default App;
