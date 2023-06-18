import { createContext, useState } from "react";
import {ulid}from'ulid';

export const UserContext = createContext();

export const useInitializeUserStore = () => {
  const [currentUser, setCurrentUser] = useState({
    name: "Anonymous",
    email: "kedoodle@kedoodledev",
    _id: ulid(),
    // _id: "6429c559315c60dbbe0427b3",
    isAnonymous: "true",
  });

  return {
    currentUser,
    setCurrentUser,
  };
};
