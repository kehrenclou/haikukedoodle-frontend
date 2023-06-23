import React from "react";

import { UserModal } from "./UserModal";
import { useModal, useAuth, useUser, useCreateHaiku } from "../../hooks";
import * as auth from "../../utils/apis";
import { api } from "../../utils/apis";

export function LoginModal() {
  /* ---------------------------------- hooks --------------------------------- */

  const { setToken, setIsLoggedIn } = useAuth();
  const { currentUser, setCurrentUser } = useUser();
  const { state } = useCreateHaiku();
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
        if (res) {
          localStorage.setItem("jwt", res.token); //if token set local storage, set token, set headers
          setToken(res.token);

          api.setHeaders({
            authorization: `Bearer ${res.token}`,
            "Content-Type": "application/json",
          });

          //  api.saveCard()//save here pass card somehow

          api
            .getInfo()
            .then((res) => {
              console.log(res)
              if (res) {
                setIsLoggedIn(true);
                setCurrentUser(res);
                setIsLoginOpen(false);
              }
            })
            .then(() => {
              console.log(currentUser);
              if (state.terms === true) {
                //currently not getting updated user info
                api
                  .updateCardOwner(currentUser._id, currentUser.name, state._id)
                  .then((card) => {
                    if (card) {
                      console.log(card);
                    }
                  });
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
