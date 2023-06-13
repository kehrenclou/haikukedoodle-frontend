import React, { useEffect } from "react";
import "./card.css";

import { Bookmark, Trash, Heart, Download } from "../iconButtons";
import { Flower } from "../flower/Flower";

import { useUser, useAuth } from "../../hooks";

export default function Card({
  onDownloadClick,
  onDeleteClick,
  onLikeClick, //this will be implemented when backend connected
  onBookmarkClick, //this will be implemented when backend connected
  card,
}) {
  const { currentUser } = useUser();
  const { isLoggedIn } = useAuth();

  //TODO: implement after backend connected
  const likeCount = card.likes.length;

  const isOwn = card.owner === currentUser._id; //TODO-needs back end
  const isLiked = card.likes.some((user) => user === currentUser._id);
  const isBookmarked = card.bookmarks.some((user) => user === currentUser._id);

  var zipPairs = [];

  for (let i = 0; i < 3; i++) {
    zipPairs.push([card.haikuLines[i], card.chordLines[i]]);
  }

  function handleLikeClick() {
    onLikeClick(card);
 
  }
  function handleDownloadClick() {
    onDownloadClick(card);
  }

  function handleBookmarkClick() {
    onBookmarkClick(card);
  }
  function handleDeleteClick() {
    onDeleteClick(card);
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
          <h2 className="card__title">{card.subject}</h2>
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
            {`~ by anonymous ${card.createdOn}`}
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
