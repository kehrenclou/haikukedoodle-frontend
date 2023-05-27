import ModalWithForm from "./ModalWithForm";
import { UserForm, LoginForm } from "../form";

export function SignupModal({ isOpen, onClose, onLinkClick, onSubmitClick }) {
  return (
    <>
      <ModalWithForm
        isOpen={isOpen}
        onClose={onClose}
        name="signup"
        title="Sign up to save your Haiku."
      >
        <UserForm
    
          submitText="Sign Up"
          text="Already have an account?"
          linkText="Log in here!"
          onLinkClick={onLinkClick}
          onSubmit={onSubmitClick}
        />
      </ModalWithForm>
    </>
  );
}
