import ModalWithForm from "./ModalWithForm";
import UserForm from "../form/UserForm";

export function SignupModal({ isOpen, onClose }) {
  function handleSubmitClick(){
    console.log("clicked");
  }
  return (
    <>
      <ModalWithForm
        isOpen={isOpen}
        onClose={onClose}
        name="subject"
        title="Sign up to save your Haiku."
      >
        <UserForm
          title="Sign up"
          submitText="Sign Up"
          text="Already have an account?"
          linkText="Log in here!"
          link="/signin"
          onSubmit={handleSubmitClick}
        />
      </ModalWithForm>
    </>
  );
}
