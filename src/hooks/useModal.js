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
    closeAllModals,
  } = useContext(ModalContext);



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
