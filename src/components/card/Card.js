import React from "react";
import "./card.css";

import { Bookmark, Trash, Heart, Download } from "../iconButtons";
import Flower from "../flower/Flower";

import { useUser, useAuth } from "../../hooks";

export default function Card({
  onDownloadClick,
  onDeleteClick,
  onLikeClick, //this will be implemented when backend connected
  onBookmarkClick, //this will be implemented when backend connected
  song,
}) {
  const { currentUser } = useUser();
  const { isLoggedIn } = useAuth();

  //TODO: implement after backend connected
  const likeCount = song.likes.length;

  const isOwn = song.owner === currentUser.id; //TODO-needs back end
  const isLiked = song.likes.some((user) => user === currentUser.id);
  const isBookmarked = song.bookmarks.some((user) => user === currentUser.id);

  const zipPairs = [];
  for (let i = 0; i < 3; i++) {
    zipPairs.push([song.haikuLines[i], song.chordLines[i]]);
  }

  function handleLikeClick() {
    // setIsLiked(!isLiked);
    onLikeClick(song);
  }
  function handleDownloadClick() {
    onDownloadClick(song);
  }

  function handleBookmarkClick() {
    onBookmarkClick(song);
  }
  function handleDeleteClick() {
    onDeleteClick(song);
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
          {isLoggedIn ? (
            <div className="card__icon-bookmark">
              <Bookmark
                onClick={handleBookmarkClick}
                isBookmarked={isBookmarked}
              />
            </div>
          ) : null}
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
            {isLoggedIn && isOwn ? <Trash onClick={handleDeleteClick} /> : null}
          </div>
          <div className="card__button-group">
            <div className="card__like-container">
              <p className="card__like-count">{` ${likeCount} `}</p>
              <Heart
                onClick={handleLikeClick}
                isLiked={isLiked}
                isLoggedIn={isLoggedIn}
              />
            </div>
          </div>
        </section>
      </li>
    </>
  );
}
