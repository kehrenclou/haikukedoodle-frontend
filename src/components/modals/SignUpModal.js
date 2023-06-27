import React from "react";
import { UserModal } from "./UserModal";
import { useModal, useAuth, useUser, useCreateHaiku } from "../../hooks";
import * as auth from "../../utils/apis";
import { api } from "../../utils/apis";

export function SignUpModal() {
  const {
    setIsLoginOpen,
    isSignUpOpen,
    setIsSignUpOpen,
    setIsLoading,
    isSignUp,
    setIsSignUp,
    setIsStatusModalOpen,
    setStatus,
  } = useModal();

  const { setIsLoggedIn, setToken, token } = useAuth();
  const { setCurrentUser } = useUser();
  const { state } = useCreateHaiku();

  const handleCloseModal = () => {
    setIsSignUpOpen(false);
  };

  const handleSignUpCancel = () => {
    setIsSignUpOpen(false);
  };
  const handleLoginClick = () => {
    setIsSignUp(false);
    setIsLoginOpen(true);
    setIsSignUpOpen(false);
  };

  const handleSignUpSubmit = (data) => {
    setIsLoading(true);

    auth
      .signup(data.name, data.email, data.password)
      .then((res) => {
        if (res) {
          setStatus("success");
          localStorage.setItem("jwt", res.token);
          setToken(res.token);
          setCurrentUser(res);
          setIsLoading(false);
          setIsSignUpOpen(false);
          setIsStatusModalOpen(true);
          setIsLoggedIn(true);

          {
            state.terms && api.updateCardOwner(res._id, res.name, state._id);
          }
        } else {
          setStatus("fail");
        }
      })
      .catch((err) => {
        console.log(err);
        setStatus("fail");
      })
      .finally(() => {
        setIsLoading(false);
        setIsStatusModalOpen(true);
        api.setHeaders({
          authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        });
      });
  };

  return (
    <>
      <UserModal
        signUp={isSignUp}
        isOpen={isSignUpOpen}
        onClose={handleCloseModal}
        name="signup"
        title="Sign up to create a pen name!"
        onLinkClick={handleLoginClick}
        onSubmitClick={handleSignUpSubmit}
        onCancelClick={handleSignUpCancel}
        submitText="Sign Up"
        text="Already have an account?"
        linkText="Log in here!"
      />
    </>
  );
}
