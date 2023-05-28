import { useCallback, useContext } from "react";
import { ModalContext } from "../contexts";

export const useModal = () => {
  const {
    isLoginOpen,
    isSignUpOpen,
    isConfirmDeleteOpen,
    isToolTipOpen,
    isLoading,
    status,
    isSignUp,
    setIsLoginOpen,
    setIsSignUpOpen,
    setIsConfirmDeleteOpen,
    setIsToolTipOpen,
    setIsLoading,
    setStatus,
    setIsSignUp,
  } = useContext(ModalContext);

  const closeAllModals = useCallback(() => {
    setIsLoginOpen(false);
    setIsSignUpOpen(false);

    setIsConfirmDeleteOpen(false);
    setIsToolTipOpen(false);
  }, []);

  return {
    isLoginOpen,
    isSignUpOpen,
    isConfirmDeleteOpen,
    isToolTipOpen,
    isLoading,
    status,
    isSignUp,
    setIsLoginOpen,
    setIsSignUpOpen,
    setIsConfirmDeleteOpen,
    setIsToolTipOpen,
    setIsLoading,
    setStatus,
    setIsSignUp,
    closeAllModals,
  };
};
