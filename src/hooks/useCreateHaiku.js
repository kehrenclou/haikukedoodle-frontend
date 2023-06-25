import { useContext, useCallback } from "react";
import { CreateHaikuContext } from "../contexts";

export const useCreateHaiku = () => {
  const { state, resetAll,updateState, updateSubject, updateTerms, updateAll } =
    useContext(CreateHaikuContext);



  return {
    state,
    updateState,
    updateSubject,
    updateTerms,
    updateAll,
    resetAll,
  };
};
