import { UserModal } from "./UserModal";

export function LoginModal({
  isSignUp,
  isLoginOpen,
  handleCloseModal,
  handleSignUpClick,
  handleLoginSubmit,
}) {
  function handleSubmitClick() {
    console.log("clicked");
  }
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
