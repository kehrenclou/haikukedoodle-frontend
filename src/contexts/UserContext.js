import { createContext, useState } from "react";

export const UserContext = createContext();

export const useInitializeUserStore = () => {
  const [currentUser, setCurrentUser] = useState({
    name: "",
    email: "email@email.com",
    id: "",
  });

  return {
    currentUser,
    setCurrentUser,
  };
};