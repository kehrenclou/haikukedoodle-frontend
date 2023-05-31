
import { createContext, useState } from "react";

export const UserContext = createContext();

export const useInitializeUserStore = () => {
  const [currentUser, setCurrentUser] = useState({
    name: "Jane Doe",
    email: "kedoodle@kedoodledev",
    id: "6429c559315c60dbbe0427b3",
  });

  return {
    currentUser,
    setCurrentUser,
  };
};