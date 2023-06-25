import { useContext, useCallback } from "react";
import { UserContext } from "../contexts";
import { ulid } from "ulid";

export const useUser = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const setAnonUser = useCallback(() => {
    setCurrentUser({
      name: "Anonymous",
      email: "kedoodle@kedoodledev",
      _id: ulid(),

      isAnonymous: "true",
    });
  }, []);

  return { currentUser, setCurrentUser, setAnonUser };
};
