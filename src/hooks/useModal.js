import { useContext } from "react";
import { ModalContext } from "../contexts";

export const useModal = () => {
  const {
    isLoginOpen,
    isSignUpOpen,
    isConfirmDeleteOpen,
    isStatusModalOpen,
    isDeniedAccessOpen,
    isProfanityAlertOpen,
    isLoading,
    status,
    isSignUp,

    setIsLoginOpen,
    setIsSignUpOpen,
    setIsConfirmDeleteOpen,
    setIsStatusModalOpen,
    setIsDeniedAccessOpen,
    setIsProfanityAlertOpen,
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
    isProfanityAlertOpen,
    isLoading,
    status,
    isSignUp,

    setIsLoginOpen,
    setIsSignUpOpen,
    setIsConfirmDeleteOpen,
    setIsStatusModalOpen,
    setIsDeniedAccessOpen,
    setIsProfanityAlertOpen,
    setIsLoading,
    setStatus,
    setIsSignUp,

    closeAllModals,
  };
};
