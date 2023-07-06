import { createContext, useState, useCallback } from "react";

export const ModalContext = createContext();

export const useInitializeModalStore = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState(""); //used for tooltip fail/sucess

  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [isStatusModalOpen, setIsStatusModalOpen] = useState(false);
  const [isConfirmDeleteOpen, setIsConfirmDeleteOpen] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [isMaxHaikus,setIsMaxHaikus]=useState(false);

  const closeAllModals = useCallback(() => {
    setIsLoginOpen(false);
    setIsSignUpOpen(false);
    setIsStatusModalOpen(false);
    setIsConfirmDeleteOpen(false);

  }, []);

  return {
    isLoading,
    status,
    isLoginOpen,
    isSignUpOpen,
    isConfirmDeleteOpen,
    isStatusModalOpen,
    isSignUp,
    isMaxHaikus,

    setIsLoginOpen,
    setIsSignUpOpen,
    setIsConfirmDeleteOpen,
    setIsStatusModalOpen,
    setIsLoading,
    setStatus,
    setIsSignUp,
    setIsMaxHaikus,

    closeAllModals,
  };
};
