import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import _ from "lodash";
import { motion, AnimatePresence, usePresence } from "framer-motion";
import { ExpandMore } from "@mui/icons-material";
import "./main.css";

//components
import Yinyang from "../../components/yinyang/Yinyang";
import Card from "../../components/card/Card";

//utils/helpers
import {api} from "../../utils/apis"
import { backupAiDataArr } from "../../utils/data/backupData";
import {
  transformAiDataArr,
  formatSongForDownload,
} from "../../helpers/transformData";

export default function Main() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(true);//controls visibility of yinyang 
  const [isPresent, safeToRemove] = usePresence();

  const [songObjects, setSongObjects] = useState([]);

  useEffect(() => {
    setSongObjects(transformAiDataArr(backupAiDataArr));
  }, []); //transform backup data Arr to subject,haikulines,chordlines//SongObjects mapped in rendering cards

  useEffect(() => {
    !isPresent && setTimeout(safeToRemove, 900);
  }, [isPresent]); //for animation component unmount

  function handleCreateClick() {
    setIsVisible(false);
    navigate("/create");
  }

  function handleDownloadClick(song) {
    const title = song.subject;
    const data = formatSongForDownload(song);
    const url = URL.createObjectURL(data);
    const link = document.createElement("a");
    link.href = url;
    link.download = title;
    link.click();
    URL.revokeObjectURL(url);
  }

  return (
    <>
      <main className="main" id="main">
        <section className="main__hero" id="hero">
          <h1 className="main__heading">Haiku song generator using chat GPT</h1>

          <AnimatePresence mode="wait">
            {isVisible && (
              <motion.div
                className="main__image"
              
                transition={{ ease: "anticipate", duration: 1 }}
                initial={{ opacity: 0, scale: 0.75 }}
                animate={{ opacity: 1, rotate: 360, scale: 1 }}
                exit={{ opacity: 0, rotate: 360, scale: 0 }}
                key="container"
              >
                <Yinyang
                  className="main__image_size"
                  href="#cards"
                  onCreateClick={handleCreateClick}
                  key="yinyang"
                />
              </motion.div>
            )}
          </AnimatePresence>
          <a
            href="#cards"
            className="main__show-more"
            aria-label="show more link"
          >
            <ExpandMore
              sx={{
                backgroundColor: "#2b2d42",
                fill: "white",
                fontSize: "48px",
              }}
            />
          </a>
        </section>

        <section className="main__cards" id="cards">
          <h2 className="main__heading main__heading_sub">The Haiku Songs</h2>
          <ul className="main__cards_list" id="cards-list">
            {songObjects.map((song) => (
              <Card
                key={_.uniqueId("card-")}
                subject={song.subject}
                createdOn={song.createdOn}
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
