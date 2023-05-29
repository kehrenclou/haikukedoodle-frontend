import React from "react";
import ModalWithForm from "./ModalWithForm";
import { UserForm } from "../form";

export function UserModal({
  isOpen,
  onClose,
  name,
  title,
  signUp,
  submitText,
  text,
  linkText,
  onLinkClick,
  onSubmitClick,
  onCancelClick,
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
          signUp={signUp}
          submitText={submitText}
          text={text}
          linkText={linkText}
          onLinkClick={onLinkClick}
          onSubmit={onSubmitClick}
          onCancel={onCancelClick}
        />
      </ModalWithForm>
    </>
  );
}
