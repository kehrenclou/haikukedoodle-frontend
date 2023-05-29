import React from "react";

import { UserModal } from "./UserModal";
import { useModal, useAuth } from "../../hooks";
import * as auth from "../../utils/apis";

export function LoginModal() {
  /* ---------------------------------- hooks --------------------------------- */

  const { setToken, setIsLoggedIn } = useAuth();

  const {
    isLoginOpen,
    setIsLoginOpen,
    setIsSignUpOpen,
    setIsLoading,
    setIsStatusModalOpen,
    isSignUp,
    setIsSignUp,
    setStatus,
  } = useModal();

  /* -------------------------------- handlers -------------------------------- */

  const handleSignUpClick = () => {
    setIsSignUp(true);
    setIsLoginOpen(false);
    setIsSignUpOpen(true);
  };

  const handleLoginSubmit = (data) => {
    //auth stuff

    setIsLoading(true);

    auth
      .logIn(data)

      .then((res) => {
        if (res) {
          localStorage.setItem("jwt", res.token);
          setToken(res.token);
          setIsLoading(false);
          setIsLoginOpen(false);
        } else {
          setStatus("fail");
        }
      })
      .catch((error) => {
        console.log(error);
        setStatus("fail");
      })
      .finally(() => {
        setIsLoading(false);
        setIsStatusModalOpen(true);
      });
  };

  const handleCloseModal = () => {
    setIsLoginOpen(false);
  };

  const handleLoginCancel = () => {
    setIsLoginOpen(false);
  };

  return (
    <>
      <UserModal
        signUp={isSignUp}
        isOpen={isLoginOpen}
        onClose={handleCloseModal}
        name="login"
        title="Please Log in."
        onLinkClick={handleSignUpClick}
        onSubmitClick={handleLoginSubmit}
        onCancelClick={handleLoginCancel}
        submitText="Log in"
        text="Don't have an account?"
        linkText="Sign up Here"
      />
    </>
  );
}
