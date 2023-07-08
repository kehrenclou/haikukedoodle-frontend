import { useContext, useCallback } from "react";
import { UserContext } from "../contexts";
import {
  checkDate,
  checkCounterLimit,
  checkTimeoutLimit,
} from "../helpers/checkDate";

import { ulid } from "ulid";

export const useUser = () => {
  const { currentUser, setCurrentUser, isRestricted, setIsRestricted } =
    useContext(UserContext);

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

  const isCounterLimit = checkCounterLimit(
    currentUser.counter,
    currentUser.counterMax
  );

  const isDateRestricted = checkTimeoutLimit(currentUser.counterTimeStamp, 1);

  // const checkAndSetIsRestricted = () => {
  //   const result =
  //     isCounterLimit && isDateRestricted
  //       ? setIsRestricted(true)
  //       : setIsRestricted(false);
  //   return result;
  // };

  return {
    currentUser,
    setCurrentUser,
    setUserDefault,
    isAccessRestrictedByDate,
    isRestricted,
    setIsRestricted,
    isCounterLimit,
    isDateRestricted,
    // checkAndSetIsRestricted,
  };
};
