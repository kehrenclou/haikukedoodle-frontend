import ModalWithForm from "./ModalWithForm";
import { UserForm } from "../form";

export function UserModal({
  isOpen,
  onClose,
  name,
  title,
  signup,
  submitText,
  text,
  linkText,
  onLinkClick,
  onSubmitClick,
}) {
  return (
    <>
      <ModalWithForm
        isOpen={isOpen}
        onClose={onClose}
        name={name}
        title={title}
      >
        <UserForm
          signup={signup}
          submitText={submitText}
          text={text}
          linkText={linkText}
          onLinkClick={onLinkClick}
          onSubmit={onSubmitClick}
        />
      </ModalWithForm>
    </>
  );
}
