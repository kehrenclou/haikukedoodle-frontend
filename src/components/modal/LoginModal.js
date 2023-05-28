import { UserModal } from "./UserModal";
import { useModal } from "../../hooks/useModal";
import * as auth from "../../utils/apis";

export function LoginModal({}) {
  const {
    isLoginOpen,
    setIsLoginOpen,
    isSignUpOpen,
    setIsSignUpOpen,
    isLoading,
    setIsLoading,
    isStatusModalOpen,
    setIsStatusModalOpen,
    isSignUp,
    setIsSignUp,
    status,
    setStatus,
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
    setIsLoading(true);
    auth
      .logIn(data.email, data.password)
      .then((res) => {
        console.log(res);
        if (res) {
          localStorage.setItem("jwt", res.token);
          setStatus("success");
          setIsLoading(false);
          setIsLoginOpen(false);
          setIsStatusModalOpen(true);
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
