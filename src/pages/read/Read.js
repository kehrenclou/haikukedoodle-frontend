import React, { useEffect, useState } from "react";

import { ToggleButtonGroup, ToggleButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import _ from "lodash";
import "./read.css";

import { api } from "../../utils/apis";
import {
  transformAiDataArr,
  transformAiDataObject,
  formatSongForDownload,
} from "../../helpers/transformData";
import { useCards, useModal, useUser, useAuth } from "../../hooks";

import Layout from "../../components/layout";
import Card from "../../components/card/Card";

import { ConfirmDeleteModal } from "../../components/modals";

export default function Read() {
  const [cardToDelete, setCardToDelete] = useState({});
  const [selection, setSelection] = useState("all");

  const { cards, setCards } = useCards();
  const { currentUser } = useUser();
  const { isLoggedIn, token } = useAuth();
  const {
    setIsConfirmDeleteOpen,
    setIsLoading,
    setStatus,
    setIsStatusModalOpen,
  } = useModal();
  /* -------------------------- styled toggle button -------------------------- */
  const StyledToggleBtn = styled(ToggleButton)({
    color: "white",
    minWidth: "70px",
    border: "1px solid white",
    borderRadius: "10px",
    fontFamily: "Montserrat, Arial, sans-serif",
    fontSize: "12px",
    "&.Mui-selected, &.Mui-selected:hover": {
      color: "black",
      backgroundColor: "#fdc9ef",
      border: "1px solid white",
      opacity: "1",
      cursor: "default",
    },
    "&:hover": {
      color: "gray",

      border: "1px solid white",
    },
  });
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
  function handleToggleChange(event, newSelection) {
    if (newSelection !== null) {
      setSelection(newSelection);
    }
  }

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
      <Layout>
        <section className="read" id="cards">
          <h2 className="read__heading">Hall of Fame</h2>
          {isLoggedIn ? (
            <ToggleButtonGroup
              className="read__toggle-group"
              color="secondary"
              value={selection}
              size="small"
              exclusive
              onChange={handleToggleChange}
              aria-label="Filter Selection"
            >
              <StyledToggleBtn value="all">All</StyledToggleBtn>
              <StyledToggleBtn value="mine">My Haikus</StyledToggleBtn>
              <StyledToggleBtn value="bookmarks">Bookmarks</StyledToggleBtn>
            </ToggleButtonGroup>
          ) : null}
          <ul className="read__cards" id="read-cards">
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
      </Layout>
      <ConfirmDeleteModal onClick={handleConfirmDelete} />
    </>
  );
}