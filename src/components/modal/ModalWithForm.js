/* --------------------------------- imports -------------------------------- */
import React from "react";
import Modal from "./Modal";
import SubjectForm from "../form/subjectForm";

/* ------------------------- function ModalWIthForm ------------------------- */
function ModalWithForm({
  isOpen,
  onClose,
  onSubmit,
  name,
  title,
  children,
  submitText,
}) {

  /* -------------------------------- handlers -------------------------------- */
  function handleSubmit(event) {
    event.preventDefault();
    onSubmit();
  }

  /* --------------------------------- return --------------------------------- */
  return (
    <Modal isOpen={isOpen} onClose={onClose} name={name}>
      <h2 className="modal__title">{title}</h2>
      <SubjectForm/>
      {/* 2nd form */}
      {/* <form
        className={`modal__form modal__form_type_${name}`}
        id={`modal-form-${name}`}
        name={`form-${name}`}
        onSubmit={handleSubmit}
      >
        {children}
        <button
          aria-label="Submit Form Button"
          type="submit"
          id={`${name}-submit-button`}
          className="button modal__button-submit"
        >
          {submitText}
        </button>
      </form> */}
    </Modal>
  );
}
export default ModalWithForm;