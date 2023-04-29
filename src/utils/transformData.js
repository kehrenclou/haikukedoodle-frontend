//utils/transforData.js
//functions to extract data from backupData.js

/* --------------------------------- imports -------------------------------- */
import React, {useState} from "react";
import backupData from "./backupData";
import { useStateMachine } from "little-state-machine";
import { updateBackupDetails } from "../actions/backupDetails";

/* ------------------------- transformData function ------------------------- */

function transformData(){
//state
const {state,actions}=useStateMachine({updateBackupDetails});

// export default {
//     title: "",
//     songArray: [],
//     chordArray: [],
//   };
//call this actions.updateBackupDetails(data)
}