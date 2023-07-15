import React from "react";
import Modal from "./Modal";
import Logo from "../logo";
import "../logo/logo.css";

function ModalWithForm({ isOpen, onClose, name, title, children }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} name={name}>
      <Logo className="logo logo__form" fill="#000" stroke="#000" />
      <h2 className="modal__title">{title}</h2>
      {children}
    </Modal>
  );
}
export default ModalWithForm;
