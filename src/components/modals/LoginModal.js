import React from "react";

import { UserModal } from "./UserModal";
import { useModal, useAuth, useUser } from "../../hooks";
import * as auth from "../../utils/apis";
import { api } from "../../utils/apis";

export function LoginModal() {
  /* ---------------------------------- hooks --------------------------------- */

  const { setToken, setIsLoggedIn } = useAuth();
  const { setCurrentUser } = useUser();

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
      .login(data.email, data.password)

      .then((res) => {
        console.log("loginthenres", res); //returns token
        //res = returns token
        //if token set local storage, set token, set headers
        if (res) {
          localStorage.setItem("jwt", res.token);
          setToken(res.token);

          api.setHeaders({
            authorization: `Bearer ${res.token}`,
            "Content-Type": "application/json",
          });

          //  api.saveCard()//save here pass card somehow

          api.getInfo().then((res) => {
            console.log("res", res);
            if (res) {
              setIsLoggedIn(true);
              setCurrentUser(res);
              // setIsLoading(false);
              setIsLoginOpen(false);
            }
          });
        } else {
          setStatus("fail");
        }
      })
      .catch((error) => {
        console.log("loginerror", error);
        setStatus("fail");
        setIsStatusModalOpen(true);
      })
      .finally(() => {
        setIsLoading(false);
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
