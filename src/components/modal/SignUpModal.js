import { UserModal } from "./UserModal";
import { useModal } from "../../hooks/useModal";
import * as auth from "../../utils/apis"

export function SignUpModal({
  // isSignUp,
  // isLoginOpen,
  // handleCloseModal,
  // handleSignUpClick,
  // handleLoginSubmit,
}) {
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
    setIsSignUpOpen(false);
  };

  const handleLoginClick = () => {
    setIsSignUp(false);
    setIsLoginOpen(true);
    setIsSignUpOpen(false);
  };

  const handleSignUpSubmit = (data) => {
    //auth stuff
    console.log(data);
    auth.signUp(data.nickname,data.email,data.password)
  };

  return (
    <>
      <UserModal
      signUp={isSignUp}
      isOpen={isSignUpOpen}
      onClose={handleCloseModal}
      name="signup"
      title="Sign up to save your Haiku"
      onLinkClick={handleLoginClick}
      onSubmitClick={handleSignUpSubmit}
      submitText="Sign Up"
      text="Already have an account?"
      linkText="Log in here!"
      />
    </>
  );
}
