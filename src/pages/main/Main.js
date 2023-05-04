import _ from "lodash";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./main.css";

import { songs } from "../../utils/backupData";
import { transformData, formatSongForDownload } from "../../utils/transformData";

import Yinyang from "../../components/yinyang/Yinyang";
import Card from "../../components/card/Card";

export default function Main() {
  const navigate = useNavigate();
  const [songObjects, setSongObjects] = useState([]);


  useEffect(() => {
    setSongObjects(transformData(songs));
  }, []); //set backupsong data

  function createClickHandler() {
    console.log(songs);
    navigate("/create");
  }


  function handleDownloadClick(song) {
    const title = song.subject;
    const data = formatSongForDownload(song);
    const url = URL.createObjectURL(data);
    const link = document.createElement("a");
    link.href = url;
    link.download = song.subject;
    link.click();
    URL.revokeObjectURL(url);
  }

  return (
    <>
      <main className="main" id="main">
        <section className="main__hero" id="hero">
          <h1 className="main__heading">Haiku song generator using chat GPT</h1>
          <div className="main__image">
            <Yinyang
              className="main__image_size"
              href="#cards"
              onCreateClick={createClickHandler}
            />
          </div>
        </section>

        <section className="main__cards" id="cards">
          <h2 className="main__heading main__heading_sub">The Haiku Songs</h2>
          <ul className="main__cards_list">
            {songObjects.map((song) => (
              <Card
                key={_.uniqueId("card-")}
                subject={song.subject}
                haikuLines={song.haikuLines}
                chordLines={song.chordLines}
                likeCount="11"
                onDownloadClick={handleDownloadClick}
                song={song}
              />
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}
