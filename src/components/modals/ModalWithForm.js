import React from "react";
import Modal from "./Modal";

function ModalWithForm({ isOpen, onClose, name, title, children }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} name={name}>
      <h2 className="modal__title">{title}</h2>
      {children}
    </Modal>
  );
}
export default ModalWithForm;
