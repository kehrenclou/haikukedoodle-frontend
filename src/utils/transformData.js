//utils/transforData.js
//functions to extract data from backupData.js

/* --------------------------------- imports -------------------------------- */
import React, { useState } from "react";
// import { songs } from "./backupData";
import { useStateMachine } from "little-state-machine";
import { updateBackupDetails } from "../actions/backupDetails";

/* ------------------------- transformData function ------------------------- */

export function transformData(songs) {
  //state
  // const {state,actions}=useStateMachine({updateBackupDetails});

  // export default {
  //     title: "",
  //     songArray: [],
  //     chordArray: [],
  //   };
  //call this actions.updateBackupDetails(data)

  // const input = '{"result":"\nTender steak so fine\nGm F C Dsus4 Dsus2\nTastes like sweet red wine\nA7 Dsus4 Dsus2 Bm\nMouth-watering divine! Gm F C Dsus4 Dsus2"}';
  //   const input = songs[0];
  // Extract the string of lyrics and chords from the input object
  //   const data = JSON.parse(JSON.stringify(songs));

  // const data = JSON.parse(input);
  //   const songData = data.result.trim();
  // const songData = input.result.trim();

  //   const linesArr = data.map((song) => {
  //     const [lines] = song.split("\n");
  //     return { lines };
  //   });



const resultArrays = [];

for (let i = 0; i < songs.length; i++) {
    const subject = songs[i].subject;
    const lines = songs[i].result.split("\n").filter(line => line !== "");
    resultArrays.push([subject, lines]);
  }
// return resultArrays;


const songObjects = [];

for (let i = 0; i < songs.length; i++) {
  const subject = songs[i].subject;
  const lines = songs[i].result.split("\n").filter(line => line !== "");
  const haikuLines=lines.slice(0,3);
  const chordLines=lines.slice(3,6);
  songObjects.push({subject, haikuLines,chordLines});
  //slice
  //lines.slice(0,3)
  //lines.slice(3,6)
}


return songObjects;





}
