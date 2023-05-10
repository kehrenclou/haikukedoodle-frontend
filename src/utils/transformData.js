/* ------------------- transform TimeStamp from AiData Response ------------------ */
//transforms created timestamp to MMM DD,YYYY
function transformTimeStamp(data) {
  const options = { month: "short", day: "numeric", year: "numeric" };
  const timestamp = data;
  const date = new Date(timestamp * 1000);
  const formattedDate = date.toLocaleString("en-US", options);
  return formattedDate;
}

/* ----------------------- Transform backup Array Data ---------------------- */
//extract subject, haikuLines and chordLines from backupAiDataArr JSON
//called useEffect to setSongObjects in Main.js on load
//to populate cards from backupdata
export function transformAiDataArr(songs) {
  const songObjects = [];

  for (let i = 0; i < songs.length; i++) {
    const subject = songs[i].subject;
    const createdOn = transformTimeStamp(songs[i].created);
    const lines = songs[i].choices[0].text
      .split("\n")
      .filter((line) => line !== "");
    const haikuLines = lines.slice(0, 3);
    const chordLines = lines.slice(3, 6);
    songObjects.push({ subject, createdOn, haikuLines, chordLines });
  }
  return songObjects;
}

/* ---------------- Transform backup Object Data - from State --------------- */
export function transformAiDataObject(song) {
  console.log(song);
  const songObjects = [];
  const subject = song.subject;
  const createdOn = transformTimeStamp(song.created);
  const lines = song.choices[0].text.split("\n").filter((line) => line !== "");
  const haikuLines = lines.slice(0, 3);
  const chordLines = lines.slice(3, 6);
  songObjects.push({ subject, createdOn, haikuLines, chordLines });

  return songObjects;
}

/* ----------- function to transform song format for text download ---------- */
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
