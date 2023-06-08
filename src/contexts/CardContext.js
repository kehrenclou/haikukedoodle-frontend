import { createContext, useState } from "react";
import { transformAiDataArr } from "../helpers/transformData";
import { backupAiDataArr } from "../utils/data/backupData";

export const CardContext = createContext();

export const useInitializeCardStore = () => {
  const [cards, setCards] = useState([]);//call to transform data array
  return { cards, setCards };
  
};

// export const useInitializeCardStore = () => {
//   const [cards, setCards] = useState(transformAiDataArr(backupAiDataArr));//call to transform data array
//   return { cards, setCards };
// };
//

//logic?
//1. set cardstore []
//2. on main load use effect get cards then set cards