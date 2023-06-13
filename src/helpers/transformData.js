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
    const owner = songs[i].owner;
    const likes = songs[i].likes;
    const bookmarks = songs[i].bookmarks;
    const id=songs[i]._id;
    const lines = songs[i].choices[0].text
      .split("\n")
      .filter((line) => line !== "");
    const haikuLines = lines.slice(0, 3);
    const chordLines = lines.slice(3, 6);

    songObjects.push({
      subject,
      createdOn,
      haikuLines,
      chordLines,
      owner,
      likes,
      bookmarks,
      id
    });
  }
  return songObjects;
}

/* ---------------- Transform backup Object Data - from State --------------- */
export function transformAiDataObject(song) {
  const songObjects = [];
  const subject=song.subject;//no subject in data passed in
  const createdOn = transformTimeStamp(song.created);
  const lines = song.choices[0].text.split("\n").filter((line) => line !== "");
  const haikuLines = lines.slice(0, 3);
  const chordLines = lines.slice(3, 6);
  const owner=song.owner;//owner is undefined
  const likes=song.likes;//likes undefined
  const bookmarks=song.bookmarks;//bookmarks undefined
  const id=song._id;//_id undefined
  songObjects.push( {subject,createdOn, haikuLines, chordLines, owner,likes,bookmarks,id} );

  return songObjects;
  // return({createdOn, haikuLines, chordLines, id})
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
