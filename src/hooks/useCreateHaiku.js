import { useContext } from "react";
import { CreateHaikuContext } from "../contexts";

export const useCreateHaiku = () => {
  const { state, updateSubject, updateTerms,updateAll } = useContext(CreateHaikuContext);

  return{
    state,updateSubject,updateTerms,updateAll
  }
};
