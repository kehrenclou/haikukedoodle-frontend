import { createContext, useState } from "react";
import { ulid } from "ulid";

export const UserContext = createContext();

export const useInitializeUserStore = () => {
  const [currentUser, setCurrentUser] = useState({
    name: "Anonymous",
    email: "kedoodle@kedoodledev",
    _id: ulid(),
    isAnonymous: "true",
  });

  return {
    currentUser,
    setCurrentUser,
  };
};
