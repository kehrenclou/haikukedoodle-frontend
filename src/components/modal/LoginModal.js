import { UserModal } from "./UserModal";
import { useModal } from "../../hooks/useModal";
import * as auth from "../../utils/apis";

export function LoginModal({}) {
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

  const handleCloseModal = () => {
    setIsLoginOpen(false);
  };
  const handleLoginCancel = () => {
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
      .logIn(data)
      .then((res) => {
        if (res) {
          console.log(res);
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
        onCancelClick={handleLoginCancel}
        submitText="Log in"
        text="Don't have an account?"
        linkText="Sign up Here"
      />
    </>
  );
}
