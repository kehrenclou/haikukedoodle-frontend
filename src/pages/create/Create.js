import React, { useState } from "react";
import "./create.css";

import SubjectForm from "../../components/form/subjectForm";
import { SubjectModal } from "../../components/modal/SubjectModal";

export default function Create() {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpenModal() {
    setIsOpen(true);
  }
  function handleCloseModal() {
    setIsOpen(false);
  }
  return (
    <>
      <section className="create">
        <button onClick={handleOpenModal}>open modal</button>
        {/* <SubjectForm/> */}
      </section>
      <SubjectModal isOpen={isOpen} onClose={handleCloseModal} />
    </>
  );
}
