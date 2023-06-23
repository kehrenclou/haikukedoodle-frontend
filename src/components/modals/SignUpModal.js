import React from "react";
import { UserModal } from "./UserModal";
import { useModal, useAuth, useUser } from "../../hooks";
import * as auth from "../../utils/apis";

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

  const { setIsLoggedIn,setToken } = useAuth();
  const { setCurrentUser } = useUser();

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
          console.log(res)
          setStatus("success");
          setCurrentUser(res)
          setIsLoading(false);
          setIsSignUpOpen(false);
          setIsStatusModalOpen(true);
          setIsLoggedIn(true);
          setToken(res.token)
          //?need to ensure that view updates
          //need to save haiku to user account
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
