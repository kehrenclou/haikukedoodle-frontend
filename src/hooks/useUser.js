import { useContext, useCallback } from "react";
import { UserContext } from "../contexts";

import { ulid } from "ulid";

export const useUser = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const setUserDefault = () => {
    setCurrentUser({
      name: "AnonUser",
      email: "kedoodle@kedoodledev",
      _id: ulid(),
      isAnonymous: "true",
    });
  };
  return { currentUser, setCurrentUser, setUserDefault };
};
