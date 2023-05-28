import { UserModal } from "./UserModal";
import { useModal } from "../../hooks/useModal";
import * as auth from "../../utils/apis";

export function SignUpModal({}) {
  const {
    isLoginOpen,
    setIsLoginOpen,
    isSignUpOpen,
    setIsSignUpOpen,
    isLoading,
    setIsLoading,
    isSignUp,
    setIsSignUp,
    isStatusModalOpen,
    setIsStatusModalOpen,
    setStatus,
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
    //TODO: update with backend logic
    setIsLoading(true);

    auth
      .signUp(data.nickname, data.email, data.password)
      .then((res) => {
        if (res) {
          setStatus("success");
          setIsLoading(false);
          setIsSignUpOpen(false);
          setIsStatusModalOpen(true);
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
