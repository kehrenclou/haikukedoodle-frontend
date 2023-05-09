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
/* ----------------------- Transform backup Array Data ---------------------- */
//extract subject, haikuLines and chordLines from backupdata Array from JSON
//called useEffect in Main.js on load to populate cards from backupdata
export function transformAiDataArr(songs) {
  const songObjects = [];

  for (let i = 0; i < songs.length; i++) {
    const subject = songs[i].subject;
    const lines = songs[i].choices[0].text
      .split("\n")
      .filter((line) => line !== "");
    const haikuLines = lines.slice(0, 3);
    const chordLines = lines.slice(3, 6);
    songObjects.push({ subject, haikuLines, chordLines });
  }
  return songObjects;
}

//trying again without map?
export function transformAiDataObject(songs) {

  const songObjects = [];
  const subject = songs.subject;
  const lines = songs.choices[0].text.split("\n").filter((line) => line !== "");
  const haikuLines = lines.slice(0, 3);
  const chordLines = lines.slice(3, 6);
  songObjects.push({ subject, haikuLines, chordLines });

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
