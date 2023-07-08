import React from "react";
import { useNavigate } from "react-router-dom";
import "./modal.css";
import Modal from "./Modal";
import { useModal } from "../../hooks/useModal";

import {  BlockOutlined } from "@mui/icons-material";
import { ThreeDots } from "react-loading-icons";

export function DeniedAccessModal() {
  const { isDeniedAccessOpen, setIsDeniedAccessOpen, isLoading, setIsLoading } =
    useModal();
  const navigate = useNavigate();

  const handleCloseModal = () => {
    setIsDeniedAccessOpen(false);
    setIsLoading(false);
    navigate("/");
  };
  const handleHallOfFameClick = () => {
    setIsDeniedAccessOpen(false);
    navigate("/read");
  };
  return (
    <>
      <Modal
        isOpen={isDeniedAccessOpen}
        onClose={handleCloseModal}
        name="deniedmodal"
      >
        <div className="modal__status">
          <p className="modal__title">Daily Haiku Limit Reached.</p>
          <p className="modal__title">Please come back tomorrow!</p>
          <BlockOutlined
            sx={{ fontSize: "52px", color: "red" }}
            aria-label="Fail graphic"
          />

          <p className="modal__title modal__title_sub">In the meantime,</p>
          <p className="modal__title modal__title_sub">
            read and like some Haikus!
          </p>
          {!isLoading ? (
            <button
              className="button button_type_primary"
              onClick={handleHallOfFameClick}
              aria-label="save haiku button"
            >
              Hall of Fame
            </button>
          ) : (
            <button
              className="button button_type_primary"
              type="button"
              aria-label="show more"
            >
              <ThreeDots height="1em" width="60px" stroke="#2b24d2" />
            </button>
          )}
        </div>
      </Modal>
    </>
  );
}
