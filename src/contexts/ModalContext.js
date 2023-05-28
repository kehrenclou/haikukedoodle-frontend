import { createContext, useState } from "react";

export const ModalContext = createContext();

export const useInitializeModalStore = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState(""); //used for tooltip fail/sucess

  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [isToolTipOpen, setIsToolTipOpen] = useState(false);
  const [isConfirmDeleteOpen, setIsConfirmDeleteOpen] = useState(false);

  function closeAllPopups() {
    setIsLoginOpen(false);
    setIsSignUpOpen(false);
   
    setIsConfirmDeleteOpen(false);
    setIsToolTipOpen(false);
  }

  return {
    isLoginOpen,
    isSignUpOpen,
    isConfirmDeleteOpen,
    isToolTipOpen,
    isLoading,
    status,
    setIsLoginOpen,
    setIsSignUpOpen,
    setIsConfirmDeleteOpen,
    setIsToolTipOpen,
    setIsLoading,
    setStatus,
    closeAllPopups,
  };
};
