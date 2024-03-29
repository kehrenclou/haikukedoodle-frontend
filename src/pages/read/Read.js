import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, usePresence } from "framer-motion";

import { ToggleButtonGroup, ToggleButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ThreeDots } from "react-loading-icons";

import "./read.css";

import { api } from "../../utils/apis";
import {
  transformAiDataArr,
  transformAiDataObject,
  formatSongForDownload,
} from "../../helpers/transformData";
import { useCards, useModal, useUser, useAuth, useAnonUser } from "../../hooks";

import Layout from "../../components/layout";
import Card from "../../components/card";
import { ScrollTop } from "../../components/iconButtons";

import { ConfirmDeleteModal } from "../../components/modals";

export default function Read() {
  const [isVisible, setIsVisible] = useState(true); //controls visibility of yinyang wrt animation
  const [isPresent, safeToRemove] = usePresence(); //controls component remove from DOM

  const [cardToDelete, setCardToDelete] = useState({});
  const [selection, setSelection] = useState("all");

  const { cards, setCards, cardCount, setCardCount } = useCards();
  const { currentUser } = useUser();
  const { isLoggedIn } = useAuth();
  const { initializeAnonUser } = useAnonUser();
  const {
    isLoading,
    setIsConfirmDeleteOpen,
    setIsLoading,
    setStatus,
    setIsStatusModalOpen,
  } = useModal();

  /* -------------------------- styled toggle button -------------------------- */
  const StyledToggleBtn = styled(ToggleButton)({
    color: "silver",
    minWidth: "70px",
    boxShadow: 3,
    fontFamily: "Montserrat, Arial, sans-serif",
    fontSize: "12px",
    backgroundColor: "#212233",

    "&.Mui-selected, &.Mui-selected:hover": {
      color: "black",
      fontWeight: "700",
      backgroundColor: "#719ef1",
      cursor: "default",
    },
    "&:hover": {
      color: "pink",
      backgroundColor: "transparent",
    },
  });

  /* ------------------------------- useEffects ------------------------------- */

  useEffect(() => {
    loadInitialCards();
    setSelection("all");
  }, [isLoggedIn]);

  useEffect(() => {
    if (selection === "bookmarks") {
      handleBookmarkToggle();
    } else if (selection === "mine") {
      handleMineToggle();
    } else if (selection === "all") {
      loadInitialCards();
    }
  }, [selection]);

  useEffect(() => {
    !isPresent && setTimeout(safeToRemove, 900);
  }, [isPresent]); //for animation component unmount

  /* -------------------------------- handlers -------------------------------- */

  function loadInitialCards() {
    api
      .getCards(5)
      .then((res) => {
        setCards(transformAiDataArr(res.cards));
        setCardCount(res.cardCount);
      })
      .catch((err) => {
        api.handleErrorResponse(err);
      });
  }
  /* ---------------------------- loadMore Handlers --------------------------- */
  function handleLoadMoreCards() {
    if (selection === "bookmarks") {
      loadMoreBookmarks(cards.length, currentUser._id);
    } else if (selection === "mine") {
      loadMoreOwnerCards(cards.length, currentUser._id);
    } else {
      loadMoreCards();
    }
  }
  function loadMoreCards() {
    setIsLoading(true);
    api
      .loadMoreCards(cards.length)
      .then((resCards) => {
        setCards((currentCards) => {
          return [
            ...currentCards, //current cards
            ...transformAiDataArr(resCards), //appends new cards to array
          ];
        });
      })
      .catch((err) => {
        api.handleErrorResponse(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }
  function loadMoreBookmarks(length, userId) {
    api
      .loadMoreBookmarks(length, userId)
      .then((resCards) => {
        setCards((currentCards) => {
          return [
            ...currentCards, //current cards
            ...transformAiDataArr(resCards), //appends new cards to array
          ];
        });
      })
      .catch((err) => {
        api.handleErrorResponse(err);
      });
  }
  function loadMoreOwnerCards(length, userId) {
    api
      .loadMoreOwnerCards(length, userId)
      .then((resCards) => {
        setCards((currentCards) => {
          return [
            ...currentCards, //current cards
            ...transformAiDataArr(resCards), //appends new cards to array
          ];
        });
      })
      .catch((err) => {
        api.handleErrorResponse(err);
      });
  }

  /* ----------------------------- Toggle Handlers ---------------------------- */
  function handleToggleChange(event, newSelection) {
    if (newSelection !== null) {
      setSelection(newSelection);
    }
  }

  function handleBookmarkToggle() {
    const user = currentUser._id;
    const element = document.getElementById("back-to-top-anchor");
    api
      .getBookmarks(user)
      .then((res) => {
        setCards(transformAiDataArr(res.bookmarks));
        setCardCount(res.cardCount);
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      })
      .catch((err) => {
        api.handleErrorResponse(err);
      });
  }
  function handleMineToggle() {
    const user = currentUser._id;
    const element = document.getElementById("back-to-top-anchor");
    api
      .getOwnerCards(user)
      .then((res) => {
        setCards(transformAiDataArr(res.ownerCards));
        setCardCount(res.cardCount);
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      })
      .catch((err) => {
        api.handleErrorResponse(err);
      });
  }

  /* ----------------------------- Delete Handler ----------------------------- */
  function handleDeleteCardClick(card) {
    setIsConfirmDeleteOpen(true);
    setCardToDelete(card);
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
  /* ------------------------------ Like handler ----------------------------- */
  async function handleCardLike(card) {
    let userData = currentUser;
    try {
      if (!isLoggedIn) {
        const newAnonUser = await initializeAnonUser();
        userData = newAnonUser;
      }
      const isLiked = card.likes.some((user) => user === userData._id);

      await api.changeLikeCardStatus(card.id, !isLiked).then((newCard) => {
        const tsfNewCard = transformAiDataObject(newCard);

        setCards((state) =>
          state.map((currentCard) =>
            currentCard.id === card.id ? tsfNewCard[0] : currentCard
          )
        );
      });
    } catch (err) {
      api.handleErrorResponse(err);
    }
  }

  /* ---------------------------- Bookmark Handler --------------------------- */
  function handleBookmarkStatus(card) {
    const isBookmarked = card.bookmarks.some(
      (user) => user === currentUser._id
    );
    api
      .changeBookmarkCardStatus(card.id, !isBookmarked)

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

  /* ---------------------------- Download Handler ---------------------------- */
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
      <Layout id="cards">
        <AnimatePresence mode="wait">
          {isVisible && (
            <motion.div
              transition={{ ease: "linear", duration: 0.5 }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              key="cards"
            >
              <section className="read" >
                {isLoggedIn & !currentUser.isAnonymous ? (
                  <div className="read__fixed-container">
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
                      <StyledToggleBtn value="bookmarks">
                        Bookmarks
                      </StyledToggleBtn>
                    </ToggleButtonGroup>
                  </div>
                ) : null}
                <h2
                  className={`read__heading ${
                    isLoggedIn & !currentUser.isAnonymous
                      ? "read__heading_logged-in"
                      : ""
                  }`}
                  id="back-to-top-anchor"
                >
                  Hall of Fame
                </h2>

                <ul className="read__cards" id="read-cards">
                  <ScrollTop />
                  {cards.map((card) => (
                    <li key={card.id}>
                      <Card
                        onDownloadClick={handleDownloadClick}
                        onDeleteClick={handleDeleteCardClick}
                        onLikeClick={handleCardLike}
                        onBookmarkClick={handleBookmarkStatus}
                        card={card}
                      />
                    </li>
                  ))}
                </ul>

                {cards.length < cardCount
                  ? [
                      isLoading && !setIsConfirmDeleteOpen ? (
                        <button
                          className="button button_type_primary"
                          type="button"
                          aria-label="show more"
                        >
                          <ThreeDots
                            height="1em"
                            width="60px"
                            stroke="#2b24d2"
                          />
                        </button>
                      ) : (
                        <button
                          className="button button_type_primary"
                          type="button"
                          aria-label="show more"
                          onClick={handleLoadMoreCards}
                        >
                          Show More
                        </button>
                      ),
                    ]
                  : null}
              </section>
            </motion.div>
          )}
        </AnimatePresence>
      </Layout>
      <ConfirmDeleteModal onClick={handleConfirmDelete} />
    </>
  );
}
