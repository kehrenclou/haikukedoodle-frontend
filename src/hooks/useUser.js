import { useContext, useCallback } from "react";
import { UserContext } from "../contexts";
import { checkDate } from "../helpers/checkDate";

import { ulid } from "ulid";

export const useUser = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const setUserDefault = () => {
    setCurrentUser({
      name: "AnonUser",
      email: "kedoodle@kedoodledev",
      _id: ulid(),
      isAnonymous: "true",
      counter: "0",
      counterTimeStamp: new Date(),
    });
  };

  const checkIfRestricted = () => {
    const dateStamp = currentUser.counterTimeStamp.setHours(0, 0, 0, 0);
    const isRestricted = checkDate(dateStamp, 1);//true if currentDate < expirationDate

    return isRestricted;
  };
  return { currentUser, setCurrentUser, setUserDefault, checkIfRestricted };
};
