import React from "react";
import "./modal.css";
import Modal from "./Modal";
import { useModal } from "../../hooks/useModal";

import {
  SentimentSatisfiedAlt,
  SentimentDissatisfied,
} from "@mui/icons-material";

export function StatusModal() {
  const { isStatusModalOpen, setIsStatusModalOpen, status } = useModal();

  const handleCloseModal = () => {
    setIsStatusModalOpen(false);
  };

  return (
    <Modal
      isOpen={isStatusModalOpen}
      onClose={handleCloseModal}
      name="statusmodal"
    >
      {status === "success" ? (
        <div className="modal__status">
          <p className="modal__title">Success!</p>
          <SentimentSatisfiedAlt
            sx={{ fontSize: "52px", color: "green" }}
            aria-label="Success graphic"
          />
          <p className="modal__status_text">You have now been registered.</p>
        </div>
      ) : (
        <div className="modal__status">
          <p className="modal__title">Oops</p>
          <p className="modal__title">Something went wrong!</p>
          <SentimentDissatisfied
            sx={{ fontSize: "52px", color: "red" }}
            aria-label="Fail graphic"
          />

          <p className="modal__status_text">Please try again.</p>
        </div>
      )}
    </Modal>
  );
}
