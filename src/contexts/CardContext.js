import { createContext, useState } from "react";

export const CardContext = createContext();

export const useInitializeCardStore = () => {
  const [cards, setCards] = useState([]); //call to transform data array
  const [cardCount, setCardCount] = useState(0);
  return { cards, cardCount, setCards, setCardCount };
};
