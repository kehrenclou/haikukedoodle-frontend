//functions to extract data from backupData.js

/* ------------------------- transformData function ------------------------- */

export function transformData(songs) {
  const songObjects = [];

  for (let i = 0; i < songs.length; i++) {
    const subject = songs[i].subject;

    const lines = songs[i].result.split("\n").filter((line) => line !== "");
    const haikuLines = lines.slice(0, 3);
    const chordLines = lines.slice(3, 6);
    songObjects.push({ subject, haikuLines, chordLines });
    //slice
    //lines.slice(0,3)
    //lines.slice(3,6)
  }

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
