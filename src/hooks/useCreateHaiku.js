import { useContext, useCallback } from "react";
import { CreateHaikuContext } from "../contexts";

export const useCreateHaiku = () => {
  const {
    state,
    resetAll,
    updateState,
    updateSubject,
    updateTerms,
    updateAll,
    updateAuthorOwner,
  } = useContext(CreateHaikuContext);

  return {
    state,
    updateState,
    updateAuthorOwner,
    updateSubject,
    updateTerms,
    updateAll,
    resetAll,
  };
};
