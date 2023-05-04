import ModalWithForm from "./ModalWithForm";
import SubjectForm from "../form/subjectForm";

export function SubjectModal({isOpen,onClose}) {
  return (
    <>
      <ModalWithForm
        isOpen={isOpen}
        onClose={onClose}
        name="subject"
        title="Enter a one-word subject to use for your Haiku."
      >
        <SubjectForm/>
      </ModalWithForm>
    </>
  );
}
