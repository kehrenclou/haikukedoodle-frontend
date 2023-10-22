import { useContext } from "react";
import { UserContext } from "../contexts";
import {
  checkCounterLimit,
  isTimeInRestrictedZone,
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

  const isCounterLimit = checkCounterLimit(
    currentUser.counter,
    currentUser.counterMax
  );

  const isDateRestricted = isTimeInRestrictedZone(currentUser.counterTimeStamp);
  return {
    currentUser,
    setCurrentUser,
    setUserDefault,
    isRestricted,
    setIsRestricted,
    isCounterLimit,
    isDateRestricted,
  };
};
