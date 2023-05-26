import ModalWithForm from "./ModalWithForm";
import UserForm from "../form/UserForm";

export function LoginModal({ isOpen, onClose }) {
  function handleSubmitClick() {
    console.log("clicked");
  }
  return (
    <>
      <ModalWithForm
        isOpen={isOpen}
        onClose={onClose}
        name="login"
        title="Login"
      >
        <UserForm
          title="Login"
          submitText="Log in"
          text="No account? "
          linkText="Sign up here"
          onSubmit={handleSubmitClick}
        />
      </ModalWithForm>
    </>
  );
}
