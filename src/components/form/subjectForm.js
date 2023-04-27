/* --------------------------------- imports -------------------------------- */
import React from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { updateSubjectDetails } from "../../actions/subjectDetails";
import { useStateMachine } from "little-state-machine";
import "./form.css";

/* ------------------------------- SubjectForm ------------------------------ */
export default function SubjectForm() {
  //form- Yup schema
  const validationSchema = Yup.object().shape({
    subject: Yup.string()
      .required("Please enter a one word subject.")
      .min(2, "Add between 2 and 15 characters with no spaces")
      .max(15, "Add between 2 and 15 characters with no spaces")
      .matches(
        /^[A-Za-z]+$/,
        "Subject must be a single word using only letters"
      ),
  });
  //form - config
  const formOptions = { resolver: yupResolver(validationSchema) };
  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors } = formState;

  //state
  const { state, actions } = useStateMachine({ updateSubjectDetails });


  /* -------------------------------- functions ------------------------------- */
  //set chat gpt statement with input
  function createStatement(input) {
    const statement = `Write a "Haiku" about ${input}`;
    console.log({ statement });
  }

  //submit handler - set state with form data
  //data set with input name as key (subject:data)
  const onSubmit = (data) => {
    actions.updateSubjectDetails( data );
    console.log("data", data.subject); //subject:dog
    console.log("store", state.subjectDetails);//still null
    //variable passed from where it is called?
    createStatement(data.subject)
  };

  /* --------------------------------- return --------------------------------- */
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <div className="form__body">
        <label>Enter Subject to write about</label>
        <input
          name="subject"
          type="text"
          placeholder="Subject"
          className={`form-control ${errors.subject ? "is-invalid" : ""}`}
          {...register("subject", {
            required: true,
            max: 15,
            min: 2,
            maxLength: 15,
            pattern: /\b[A-Za-z]+\b/i,
          })}
        />

        <div className="invalid-feedback">{errors.subject?.message}</div>
      </div>
      <input type="submit" />
      <button onClick={() => reset()}>Reset</button>
    </form>
  );
}
