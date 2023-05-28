import { useCallback, useContext } from "react";
import { ModalContext } from "../contexts";

export const useModal = () => {
  const {
    isLoginOpen,
    isSignUpOpen,
    isConfirmDeleteOpen,
    isStatusModalOpen,
    isLoading,
    status,
    isSignUp,
    setIsLoginOpen,
    setIsSignUpOpen,
    setIsConfirmDeleteOpen,
    setIsStatusModalOpen,
    setIsLoading,
    setStatus,
    setIsSignUp,
  } = useContext(ModalContext);

  const closeAllModals = useCallback(() => {
    setIsLoginOpen(false);
    setIsSignUpOpen(false);

    setIsConfirmDeleteOpen(false);
    setIsStatusModalOpen(false);
  }, []);

  return {
    isLoginOpen,
    isSignUpOpen,
    isConfirmDeleteOpen,
    isStatusModalOpen,
    isLoading,
    status,
    isSignUp,
    setIsLoginOpen,
    setIsSignUpOpen,
    setIsConfirmDeleteOpen,
    setIsStatusModalOpen,
    setIsLoading,
    setStatus,
    setIsSignUp,
    closeAllModals,
  };
};
