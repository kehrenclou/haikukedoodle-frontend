import React, { useState } from "react";
import "./create.css";
import { motion, AnimatePresence } from "framer-motion";

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
      <section className="create" key="create">
        <h1 className="create__heading">
          Enter a one word subject to create your haiku.
        </h1>
        <AnimatePresence mode="wait">
          <motion.div
            className="create__container"
            animate={{ opacity: 1, scale: 1 }}
            transition={{ ease: "linear", duration: 0.75 }}
            initial={{ opacity: 1, scale: 0 }}
            exit={{ opacity: 0, rotate: 360, scale: 1.2 }}
          >
            <SubjectForm />
          </motion.div>
        </AnimatePresence>
      </section>
      <SubjectModal isOpen={isOpen} onClose={handleCloseModal} />
    </>
  );
}
