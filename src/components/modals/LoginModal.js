import React from "react";

import { UserModal } from "./UserModal";
import { useModal, useAuth, useUser, useCreateHaiku } from "../../hooks";
import { checkCounterLimit, checkTimeoutLimit } from "../../helpers/checkDate";

import * as auth from "../../utils/apis";
import { api } from "../../utils/apis";

export function LoginModal() {
  /* ---------------------------------- hooks --------------------------------- */

  const { setToken, setIsLoggedIn } = useAuth();
  const {
    setCurrentUser,
    isRestricted,
    setIsRestricted,
  } = useUser();
  const { state, updateAuthorOwner } = useCreateHaiku();

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
      .login(data.email, data.password) //login

      .then((res) => {
        if (res) {
          localStorage.setItem("jwt", res.token); //if token, set local storage, set token, set headers
          setToken(res.token);

          api.setHeaders({
            authorization: `Bearer ${res.token}`,
            "Content-Type": "application/json",
          });

          api.getInfo().then((res) => {
            if (res) {
              setIsLoggedIn(true);
              setCurrentUser(res);
              setIsLoginOpen(false);
              {
                state.terms &&
                  api.updateCardOwner(res.name, state._id).then((haiku) => {
                    updateAuthorOwner(haiku.author, haiku.owner);
                  });
              }
              {
                checkCounterLimit(res.counter, res.counterMax) &&
                checkTimeoutLimit(res.counterTimeStamp, 1)
                  ? setIsRestricted(true)
                  : setIsRestricted(false);
              }
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
        title={
          isRestricted
            ? "Please log in to create more haikus."
            : "Please Log in."
        }
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
