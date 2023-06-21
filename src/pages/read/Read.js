import React, { useEffect } from "react";
import _ from "lodash";
import "./read.css";

import { api } from "../../utils/apis";
import {
  transformAiDataArr,
  transformAiDataObject,
  formatSongForDownload,
} from "../../helpers/transformData";
import { useCards, useModal, useUser, useAuth } from "../../hooks";

import Card from "../../components/card/Card";
import { ConfirmDeleteModal } from "../../components/modals";

export default function Read() {
  const { cards, setCards } = useCards();
  const { currentUser } = useUser();
  const { isLoggedIn, token } = useAuth();
  const {
    setIsConfirmDeleteOpen,
    setIsLoading,
    setStatus,
    setIsStatusModalOpen,
  } = useModal();
  /* ------------------------------- useEffects ------------------------------- */
  useEffect(() => {
    api
      .getCards()
      .then((resCards) => {
        setCards(transformAiDataArr(resCards));
      })
      .catch((err) => {
        api.handleErrorResponse(err);
      });
  }, [setCards]);

  /* -------------------------------- handlers -------------------------------- */

  function handleDeleteCardClick(card) {
    setIsConfirmDeleteOpen(true);
    setCardToDelete(card);
    console.log({ card });
  }

  function handleSongLike(card) {
    const isLiked = card.likes.some((user) => user === currentUser._id);

    api
      .changeLikeCardStatus(card.id, currentUser._id, !isLiked) //id vs._id
      .then((newCard) => {
        const tsfNewCard = transformAiDataObject(newCard);

        setCards((state) =>
          state.map((currentCard) =>
            currentCard.id === card.id ? tsfNewCard[0] : currentCard
          )
        );
      })
      .catch((err) => {
        api.handleErrorResponse(err);
      });
  }

  function handleBookmarkStatus(card) {
    const isBookmarked = card.bookmarks.some(
      (user) => user === currentUser._id
    );
    api
      .changeBookmarkCardStatus(card.id, currentUser._id, !isBookmarked)

      .then((newCard) => {
        const tsfNewCard = transformAiDataObject(newCard);
        setCards((state) =>
          state.map((currentCard) =>
            currentCard.id === card.id ? tsfNewCard[0] : currentCard
          )
        );
      })
      .catch((err) => {
        api.handleErrorResponse(err);
      });
  }

  function handleConfirmDelete() {
    setIsLoading(true);

    api
      .deleteCard(cardToDelete.id)
      .then(() => {
        // deleteCardFromCards(cardToDelete);//temporary
        setCards(
          cards.filter(function (item) {
            return item.id !== cardToDelete.id;
          })
        );
        setIsConfirmDeleteOpen(false);
      })
      .catch((err) => {
        api.handleErrorResponse(err);
        setStatus("fail");
        setIsConfirmDeleteOpen(false);
        setIsStatusModalOpen(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
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
      <section className="main__cards" id="cards">
        <h2 className="main__heading main__heading_sub">The Haiku Songs</h2>
        <ul className="main__cards_list" id="cards-list">
          {cards.map((card) => (
            <Card
              key={_.uniqueId("card-")}
              id={card.id}
              onDownloadClick={handleDownloadClick}
              onDeleteClick={handleDeleteCardClick}
              onLikeClick={handleSongLike}
              onBookmarkClick={handleBookmarkStatus}
              card={card}
            />
          ))}
        </ul>
      </section>
      <ConfirmDeleteModal onClick={handleConfirmDelete} />
    </>
  );
}
