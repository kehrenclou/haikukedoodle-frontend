import _ from "lodash";
import React, { useState } from "react";
import "./card.css";
import { IconButton, Tooltip } from "@mui/material";

import {
  FileDownloadOutlined,
  FavoriteBorder,
  Favorite,
} from "@mui/icons-material";
import { Bookmark, Trash, Heart, Download } from "../iconButtons";
import Flower from "../Flower/Flower";

export default function Card({
  subject,
  createdOn,
  haikuLines,
  chordLines,
  likeCount,
  onDownloadClick,
  onLikeClick,
  song,
}) {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const zipPairs = [];
  for (let i = 0; i < 3; i++) {
    zipPairs.push([haikuLines[i], chordLines[i]]);
  }

  function handleLikeClick() {
    setIsLiked(!isLiked);
    // onLikeClick(card);
  }
  function handleDownloadClick() {
    onDownloadClick(song);
  }
  function handleTrashClick() {
    console.log("clicked");
  }
  function handleBookmarkClick() {
    setIsBookmarked(!isBookmarked);
  }

  return (
    <>
      <li className="card">
        <Flower
          width="154"
          height="133"
          petalcolor="rgba(213,157,169,.2)"
          colorb="#47535c59"
          colorc="#171e2659"
          className="card__bg"
        />

        <section className="card__section card__header ">
          <div className="card__header_content">
            <h2 className="card__title">{subject}</h2>
          </div>
        </section>

        <section className="card__section">
          <div className=" card__icon-trash">
            <Trash onClick={handleTrashClick} />
          </div>
          {zipPairs.map(([line, chord], i) => (
            <div className="card__line card__line_column" key={i}>
              <p className="card__text">{line}</p>
              <p className="card__text card__text_med card__text_indent">
                {chord}
              </p>
            </div>
          ))}

          <p className="card__text card__text_small">
            {`~ by anonymous ${createdOn}`}
          </p>
        </section>

        <section className="card__section_footer">
          <div className="card__like-container">
            <p className="card__like-count">{likeCount}</p>
            <Heart onClick={handleLikeClick} isLiked={isLiked} />
          </div>
          <div className="card__button-group">
            <Download onClick={handleDownloadClick} />
            <Bookmark
              onClick={handleBookmarkClick}
              isBookmarked={isBookmarked}
            />
          </div>
        </section>
      </li>
    </>
  );
}
