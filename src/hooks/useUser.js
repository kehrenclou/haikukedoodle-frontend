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
      counter: 0,
      counterTimeStamp: Date.now(),
      counterMax: 1,
    });
  };

  const isAccessRestrictedByDate = () => {
    const dateStamp = currentUser.counterTimeStamp;
    const isRestrictedDate = checkDate(dateStamp, 1); //runs checkDate

    // returns true if currentDate < expirationDate (calculated from dateStamp in checkDate)

    return isRestrictedDate;
  };

  //keep function based on something not rendering
  const setCounter = () => {
    setCurrentUser({
      ...currentUser,
      counter: currentUser.counter + 1,
    });
  };

  return {
    currentUser,
    setCurrentUser,
    setUserDefault,
    setCounter,
    isAccessRestrictedByDate,
  };
};
