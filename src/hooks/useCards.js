import { useContext } from "react";
import { CardContext } from "../contexts";

export const useCards = () => {
  const { cards, setCards } = useContext(CardContext);
  return { cards, setCards };
};
