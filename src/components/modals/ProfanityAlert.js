import React from "react";
import { useNavigate } from "react-router-dom";
import "./modal.css";
import Modal from "./Modal";
import { useModal } from "../../hooks/useModal";

import { SentimentVeryDissatisfiedSharp } from "@mui/icons-material";

export function ProfanityAlertModal() {
  const {
    isProfanityAlertOpen,
    setIsProfanityAlertOpen,

    setIsLoading,
  } = useModal();
  const navigate = useNavigate();

  const handleCloseModal = () => {
    setIsProfanityAlertOpen(false);
    setIsLoading(false);
    navigate("/");
  };

  return (
    <>
      <Modal
        isOpen={isProfanityAlertOpen}
        onClose={handleCloseModal}
        name="profanitymodal"
      >
        <div className="modal__status">
          <p className="modal__title">Keep it Classy </p>
          <p className="modal__title"> folks!</p>
          <SentimentVeryDissatisfiedSharp
            sx={{ fontSize: "52px", color: "red" }}
            aria-label="Very dissatisfied graphic"
          />

          <p className="modal__title modal__title_sub">Please try again</p>
          <p className="modal__title modal__title_sub">
            with something that would make your grandmother proud.
          </p>
        </div>
      </Modal>
    </>
  );
}
