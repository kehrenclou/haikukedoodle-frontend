import React from "react";
import "./card.css";
import _ from "lodash";
import { Bookmark, Trash, Heart, Download } from "../iconButtons";
import { Flower } from "../flower";

import { useUser, useAuth } from "../../hooks";

export default function Card({
  onDownloadClick,
  onDeleteClick,
  onLikeClick,
  onBookmarkClick,
  card,
}) {
  const { currentUser } = useUser();
  const { isLoggedIn } = useAuth();

  const likeCount = card.likes.length;

  const isOwn = card.owner === currentUser._id;
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
    <div className="card">
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
        {isLoggedIn && !currentUser.isAnonymous ? (
          <div className="card__icon-bookmark">
            <Bookmark
              onClick={handleBookmarkClick}
              isBookmarked={isBookmarked}
            />
          </div>
        ) : null}
      </section>

      <section className="card__section card__section_body">
        {zipPairs.map(([line, chord]) => (
          <div key={_.uniqueId("zip-")}>
            <p className="card__text">{line}</p>
            <p className="card__text card__text_med ">{chord}</p>
          </div>
        ))}

        <p className="card__text card__text_author">
          {`~ by ${card.author} ${card.createdOn}`}
        </p>
      </section>

      <section className="card__section card__section_footer">
        <div className="card__button-group">
          <Download onClick={handleDownloadClick} />
          {isLoggedIn && isOwn && !currentUser.isAnonymous ? (
            <Trash onClick={handleDeleteClick} />
          ) : null}
        </div>
        <div className="card__button-group">
          <div className="card__like-container">
            <p className="card__like-count">{` ${likeCount} `}</p>
            <Heart onClick={handleLikeClick} isLiked={isLiked} />
          </div>
        </div>
      </section>
    </div>
  );
}
