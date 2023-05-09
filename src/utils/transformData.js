//functions to extract data from backupData.js

/* ------------------------- transformData function ------------------------- */
//extract subject, haikuLines and chordLines from JSON (rawdata)
export function transformData(songs) {
  const songObjects = [];

  for (let i = 0; i < songs.length; i++) {
    const subject = songs[i].subject;

    const lines = songs[i].result.split("\n").filter((line) => line !== "");
    const haikuLines = lines.slice(0, 3);
    const chordLines = lines.slice(3, 6);
    songObjects.push({ subject, haikuLines, chordLines });
  }

  return songObjects;
}
/* ------------------------- transformData function ------------------------- */
//extract subject, haikuLines and chordLines from JSON (rawdata)-testingAIData
//called useEffect in Main.js on load to populate cards from backupdata
//called in Create.js on handleSubmitClick to transform json
//when passing in the state.subject Details it breaks
//i think because state.subject Details is an object not an array
export function transformAiDataArr(songs) {
  const songObjects = [];
debugger;
  for (let i = 0; i < songs.length; i++) {
    const subject = songs[i].subject;
    const lines = songs[i].choices[0].text.split("\n").filter((line) => line !== "");
    const haikuLines = lines.slice(0, 3);
    const chordLines = lines.slice(3, 6);
    songObjects.push({ subject, haikuLines, chordLines });
  }
  return songObjects;
}

//trying again without map?
export function transformAIData(songs) {
  const songObjects = [];
debugger;
//   for (let i = 0; i < songs.length; i++) {
//     const subject = songs[i].subject;
//     //need to grab subject some other way ?from state and combine it
//     // console.log(songs[i].choices[0].text);
//     const lines = songs[i].choices[0].text.split("\n").filter((line) => line !== "");
//     const haikuLines = lines.slice(0, 3);
//     const chordLines = lines.slice(3, 6);
//     songObjects.push({ subject, haikuLines, chordLines });
//     console.log(subject);
//     console.log(lines);
//   }

const subject=songs.subject;
const lines=songs.choices[0].text.split("\n").filter((line) => line !== "");
const haikuLines=lines.slice(0,3);
const chordLines=lines.slice(3,6);
songObjects.push({subject,haikuLines,chordLines});

  return songObjects;
}



//function to transform song format for text download
export function formatSongForDownload(song) {
  let zipPairs = [];

  for (let i = 0; i < 3; i++) {
    zipPairs.push([song.haikuLines[i], song.chordLines[i]]);
  }

  zipPairs.forEach((innerArr, index) => {
    zipPairs[index] = innerArr.join(" ");
  });

  zipPairs.unshift(song.subject);
  const data = new Blob([zipPairs.join("\r\n")], { type: "text/plain" });
  return data;
}
