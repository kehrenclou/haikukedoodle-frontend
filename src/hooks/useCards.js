import { useContext } from "react";
import { CardContext } from "../contexts";

export const useCards = () => {
  const { cards, setCards, cardCount, setCardCount } = useContext(CardContext);
  return { cards, setCards, cardCount, setCardCount };
};
