import { useContext } from "react";
import { UserContext } from "../contexts";

export const useUser = () => {
  const { state, updateEmail, updateNickname } = useContext(UserContext);
  return {
    state,
    updateEmail,
    updateNickname,
  };
};
