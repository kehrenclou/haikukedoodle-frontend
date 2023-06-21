import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import _ from "lodash";
import { motion, AnimatePresence, usePresence } from "framer-motion";
import { ExpandMore } from "@mui/icons-material";
import "./main.css";

import {
  transformAiDataArr,
  transformAiDataObject,
  formatSongForDownload,
} from "../../helpers/transformData";
import { api } from "../../utils/apis";
import { useUser, useAuth, useModal, useCards } from "../../hooks";

import Layout from "../../components/layout/";
import Yinyang from "../../components/yinyang/Yinyang";
import Card from "../../components/card/Card";
import { ConfirmDeleteModal } from "../../components/modals";

export default function Main() {
  const [isVisible, setIsVisible] = useState(true); //controls visibility of yinyang
  const [isPresent, safeToRemove] = usePresence(); //controls component remove from DOM

  const [selectedCard, setSelectedCard] = useState(null);
  const [cardToDelete, setCardToDelete] = useState({});

  const navigate = useNavigate();
  const { currentUser } = useUser();
  const { isLoggedIn, token } = useAuth();
  const {
    setIsConfirmDeleteOpen,
    setIsLoading,
    setStatus,
    setIsStatusModalOpen,
  } = useModal();
  const { cards, setCards } = useCards();
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

  useEffect(() => {
    if (!isLoggedIn) {
      return;
    }
    api.setHeaders({
      authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    });
  }, [isLoggedIn]);

  useEffect(() => {
    !isPresent && setTimeout(safeToRemove, 900);
  }, [isPresent]); //for animation component unmount

  const deleteCardFromCards = (cardId) => {
    const cardIndex = cards.findIndex((card) => card.id === cardId);
    console.log(cards); //before
    if (cardIndex !== -1) {
      cards.splice(cardIndex, 1);

      console.log("card removed from cards");
      console.log(cards); //after
    } else {
      console.log("Card not found.");
    }
  };
  /* -------------------------------- handlers -------------------------------- */
  function handleCreateClick() {
    setIsVisible(false);
    navigate("/create");
  }

  function handleReadClick() {
    setIsVisible(false);
    navigate("/read");
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
     
        <main className="main" id="main">
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
                  onRightClick={handleCreateClick}
                  onLeftClick={handleReadClick}
                  key="yinyang"
                />
              </motion.div>
            )}
          </AnimatePresence>
          {/* <a
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
          </a> */}
        </main>
{/* 
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
   
        <ConfirmDeleteModal onClick={handleConfirmDelete} /> */}
      </Layout>
    </>
  );
}
