
import React from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { updateSubjectDetails } from "../../actions/subjectDetails";
import { useStateMachine } from "little-state-machine";
import "./form.css";


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


  const { state, actions } = useStateMachine({ updateSubjectDetails });


  //set chat gpt statement with input
  function generatePrompt(input) {
    const capitalizedSubject =
      input[0].toUpperCase() + input.slice(1).toLowerCase();

    const prompt = `Write a "Haiku" about subject ${capitalizedSubject} with the first line has 5 syllables, the second line has 7 syllables, the third line has 5 syllables.
    next, write three lines of guitar chords to accompany the haiku.`;
  }

  //submit handler - set state with form data
  //data set with input name as key (subject:data)
  const onSubmit = (data) => {
    actions.updateSubjectDetails(data);
    console.log("data", data.subject); //subject:dog
    console.log("store", state.subjectDetails); //still null
    //variable passed from where it is called?
    generatePrompt(data.subject);
    //visibility prop
    //where its at in the flow
  };


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
