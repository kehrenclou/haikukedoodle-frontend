import { UserModal } from "./UserModal";
import { useModal } from "../../hooks/useModal";
import * as auth from "../../utils/apis"

export function LoginModal({}) {
  const {
    isLoginOpen,
    setIsLoginOpen,
    isSignUpOpen,
    setIsSignUpOpen,
    isLoading,
    setIsLoading,
    isSignUp,
    setIsSignUp,
  } = useModal();

  const handleCloseModal = () => {
    setIsLoginOpen(false);
  };

  const handleSignUpClick = () => {
    setIsSignUp(true);
    setIsLoginOpen(false);
    setIsSignUpOpen(true);
  };

  const handleLoginSubmit = (data) => {
    //auth stuff
    console.log("clicked");
    auth
      .logIn(data.email, data.password)
      .then((res) => {
        console.log(res);
        if (res) {
          localStorage.setItem("jwt", res.token);
        }
      })
      .catch((error) => {
        console.log(error);
      });
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
        submitText="Log in"
        text="Don't have an account?"
        linkText="Sign up Here"
      />
    </>
  );
}
