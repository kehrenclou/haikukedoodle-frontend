import { useContext } from "react";
import { ModalContext } from "../contexts";

export const useModal = () => {
  const {
    isLoginOpen,
    isSignUpOpen,
    isConfirmDeleteOpen,
    isStatusModalOpen,
    isDeniedAccessOpen,
    isLoading,
    status,
    isSignUp,

    setIsLoginOpen,
    setIsSignUpOpen,
    setIsConfirmDeleteOpen,
    setIsStatusModalOpen,
    setIsDeniedAccessOpen,
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
    isDeniedAccessOpen,
    isLoading,
    status,
    isSignUp,

    setIsLoginOpen,
    setIsSignUpOpen,
    setIsConfirmDeleteOpen,
    setIsStatusModalOpen,
    setIsDeniedAccessOpen,
    setIsLoading,
    setStatus,
    setIsSignUp,

    closeAllModals,
  };
};
