import _ from "lodash";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./main.css";
import {
  motion,
  useAnimation,
  AnimatePresence,
  usePresence,
} from "framer-motion";

import { songs } from "../../utils/data/backupData";
import {
  transformData,
  formatSongForDownload,
} from "../../utils/transformData";

import Yinyang from "../../components/yinyang/Yinyang";
import Card from "../../components/card/Card";
import OpenAiRequest from "../../utils/testApi";

export default function Main() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(true);
  const [isPresent, safeToRemove] = usePresence();

  const [songObjects, setSongObjects] = useState([]);

  useEffect(() => {
    !isPresent && setTimeout(safeToRemove, 900);
  }, [isPresent]);

  useEffect(() => {
    setSongObjects(transformData(songs));
  }, []); //set backupsong data


  function createClickHandler() {
    console.log(songs);
    setIsVisible(false);
  
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
       <OpenAiRequest/>
          <AnimatePresence mode="wait">
            {isVisible && (
              <motion.div
                className="main__image"
                animate={{ opacity: 1, rotate: 360, scale: 1 }}
                // animate={{  rotate: 360, scale: 1.2 }}
                transition={{ ease: "anticipate", duration: 1 }}
                initial={{ opacity: 0, scale: 0.75 }}
                exit={{ opacity: 0, rotate: 360, scale: 0 }} //1.2
                key="container"
              >
                <Yinyang
                  className="main__image_size"
                  href="#cards"
                  onCreateClick={createClickHandler}
                  key="yinyang"
                />
              </motion.div>
            )}
          </AnimatePresence>
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
