import { useContext } from "react";
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
  } = useContext(ModalContext);

  return {
    isLoginOpen,
    isSignUpOpen,
    isConfirmDeleteOpen,
    isStatusModalOpen,
    isLoading,
    status,
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
