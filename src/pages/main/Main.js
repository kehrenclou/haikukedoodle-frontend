import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import _ from "lodash";
import { motion, AnimatePresence, usePresence } from "framer-motion";
import { ExpandMore } from "@mui/icons-material";
import "./main.css";

import { backupAiDataArr } from "../../utils/data/backupData";
import {
  transformAiDataArr,
  formatSongForDownload,
} from "../../helpers/transformData";
import { api } from "../../utils/apis";
import { useUser, useAuth, useModal, useCards } from "../../hooks";

import Yinyang from "../../components/yinyang/Yinyang";
import Card from "../../components/card/Card";
import { ConfirmDeleteModal } from "../../components/modals";

export default function Main() {
  const [songObjects, setSongObjects] = useState([]);
  const [isVisible, setIsVisible] = useState(true); //controls visibility of yinyang
  const [isPresent, safeToRemove] = usePresence(); //controls component remove from DOM

  // const [cards, setCards] = useState([]);

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

  // useEffect(() => {
  //   setCards(transformAiDataArr(backupAiDataArr));
  // }, []); 
  //transform backup data Arr to subject,haikulines,chordlines//cards mapped in rendering cards
 //this should only happen where it wont remount - app.js
  console.log(cards);
  useEffect(() => {
    !isPresent && setTimeout(safeToRemove, 900);
  }, [isPresent]); //for animation component unmount

  /* ------------------ temp functions before backend set up ------------------ */

  const changeStat = (newCard, statType) => {
    const cardId = newCard.id; // ID of the card you want to modify
    const itemIdToRemove = currentUser.id; // ID of the item you want to remove
    //  const sType=statType;

    const cardIndex = cards.findIndex((card) => card.id === cardId);
    if (cardIndex !== -1) {
      const typeIndex = cards[cardIndex][statType].indexOf(itemIdToRemove);
      if (typeIndex !== -1) {
        cards[cardIndex][statType].splice(typeIndex, 1);
        console.log(`Item removed from ${statType} array.`, cards);
      } else {
        cards[cardIndex][statType].push(itemIdToRemove);
        console.log(`Item not found in ${statType} array.`);
      }
    } else {
      console.log("Card not found.");
    }
  };

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

  function handleDeleteCardClick(card) {
    setIsConfirmDeleteOpen(true);
    setCardToDelete(card.id);
  }

  //TODO this will be implemented when backend is connected
  function handleSongLike(card) {
    const isLiked = card.likes.some((user) => user === currentUser.id);
    api
      .changeLikeCardStatus(card)
      .then((newCard) => {
        changeStat(newCard, "likes");
        setCards((state) =>
          state.map((currentCard) =>
            currentCard.id === card.id ? newCard : currentCard
          )
        );
      })
      .catch((err) => {
        api.handleErrorResponse(err);
      });
  }

  //TODO this will be implemented when backend is connected
  function handleBookmarkStatus(card) {
    // const isBookmarked = card.bookmarks.some((user) => user === currentUser.id);
    api
      .changeBookmarkCardStatus(card)

      .then((newCard) => {
        changeStat(newCard, "bookmarks");
        setCards((state) =>
          state.map((currentCard) =>
            currentCard.id === card.id ? newCard : currentCard
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
      .deleteCard(cardToDelete)
      .then((cardToDelete) => {
        deleteCardFromCards(cardToDelete);
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
            {cards.map((song) => (
              <Card
                key={_.uniqueId("card-")}
                id={song.id}
                onDownloadClick={handleDownloadClick}
                onDeleteClick={handleDeleteCardClick}
                onLikeClick={handleSongLike}
                onBookmarkClick={handleBookmarkStatus}
                song={song}
              />
            ))}
          </ul>
        </section>
      </main>
      <ConfirmDeleteModal onClick={handleConfirmDelete} />
    </>
  );
}
