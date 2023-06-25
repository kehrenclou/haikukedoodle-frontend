import React from "react";
import Modal from "./Modal";

function ModalWithForm({ isOpen, onClose, name, title, img, alt, children }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} name={name}>
      <img className="modal__image" src={img} alt={alt} />
      <h2 className="modal__title">{title}</h2>
      {children}
    </Modal>
  );
}
export default ModalWithForm;
