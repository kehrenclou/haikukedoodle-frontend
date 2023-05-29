import React from "react";
import "./modal.css";
import ModalWithForm from "./Modal";
import { useModal } from "../../hooks/useModal";

export function ConfirmDeleteModal({ onClick }) {
  const { isConfirmDeleteOpen, setIsConfirmDeleteOpen, isLoading } = useModal();

  const handleCloseModal = () => {
    setIsConfirmDeleteOpen(false);
  };

  return (
    <ModalWithForm
      isOpen={isConfirmDeleteOpen}
      onClose={handleCloseModal}
      name="check-delete"
    >
      <div className="modal__status">
        <h2 className="modal__title">Are you sure you </h2>
        <h2 className="modal__title">want to delete this ?</h2>
        <button
          type="buton"
          aria-label="delete button"
          onClick={onClick}
          className="button  button_type_form_submit"
        >
          {isLoading ? "Deleting" : "Yes"}
        </button>
      </div>
    </ModalWithForm>
  );
}
