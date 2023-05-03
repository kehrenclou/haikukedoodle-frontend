
import React from "react";
import Modal from "./Modal";
import SubjectForm from "../form/subjectForm";


function ModalWithForm({
  isOpen,
  onClose,
  onSubmit,
  name,
  title,
  children,
  submitText,
}) {


  function handleSubmit(event) {
    event.preventDefault();
    onSubmit();
  }


  return (
    <Modal isOpen={isOpen} onClose={onClose} name={name}>
      <h2 className="modal__title">{title}</h2>
      <SubjectForm/>


    </Modal>
  );
}
export default ModalWithForm;