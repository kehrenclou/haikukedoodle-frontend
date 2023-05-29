// import _ from "lodash";
import React, { useState } from "react";
import "./card.css";

import { Bookmark, Trash, Heart, Download } from "../iconButtons";
import Flower from "../flower/Flower";

import { useUser } from "../../hooks";

export default function Card({
  onDownloadClick,
  onDeleteClick,
  onLikeClick,//this will be implemented when backend connected
  song,
}) {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const { currentUser } = useUser();
  //TODO: implement after backend connected
  const likeCount = song.likes.length;

  const isOwn = song.owner === currentUser.id;//TODO-needs back end

  const zipPairs = [];
  for (let i = 0; i < 3; i++) {
    zipPairs.push([song.haikuLines[i], song.chordLines[i]]);
  }

  function handleLikeClick() {
    setIsLiked(!isLiked);
    // onLikeClick(song);
  }
  function handleDownloadClick() {
    onDownloadClick(song);
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
          colora="rgba(213,157,169,.2)"
          colorb="rgba(213,157,169,.3)"
          colorc="rgba(213,157,169,.5)"
          className="card__bg"
        />

        <section className="card__section card__section_header ">
          <h2 className="card__title">{song.subject}</h2>
          <div className="card__icon-bookmark">
            <Bookmark
              onClick={handleBookmarkClick}
              isBookmarked={isBookmarked}
            />
          </div>
        </section>

        <section className="card__section card__section_body">
          {zipPairs.map(([line, chord], i) => (
            <div key={i}>
              <p className="card__text">{line}</p>
              <p className="card__text card__text_med ">{chord}</p>
            </div>
          ))}

          <p className="card__text card__text_author">
            {`~ by anonymous ${song.createdOn}`}
          </p>
        </section>

        <section className="card__section card__section_footer">
          <div className="card__button-group">
            <Download onClick={handleDownloadClick} />
            <Trash onClick={onDeleteClick} />
          </div>
          <div className="card__button-group">
            <div className="card__like-container">
              <p className="card__like-count">{` ${likeCount} `}</p>
              <Heart onClick={handleLikeClick} isLiked={isLiked} />
            </div>
          </div>
        </section>
      </li>
    </>
  );
}
