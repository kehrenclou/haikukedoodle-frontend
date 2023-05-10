import React, { useEffect, useContext, useState } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";



import "./form.css";

import { CreateHaikuContext } from "../../context";

export default function SubjectForm({ handleSubmitClick }) {
  //context
  const haikuCtx=useContext(CreateHaikuContext);

  //useState
  const [subject,setSubject]=useState("");

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
    acceptTerms: Yup.bool().oneOf(
      [true],
      "These terms are required to continue"
    ),
  });

  //form - config
  const formOptions = { resolver: yupResolver(validationSchema) };
  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors } = formState;




  const onSubmit = (data) => {
    //1. Format subject
    const capitalizedSubject =
      data.subject.charAt(0).toUpperCase() + data.subject.slice(1);

    //2. update SubjectDetails state with subject and acceptTerms from form
    haikuCtx.updateSubjectTerms(capitalizedSubject,data.acceptTerms);
   
  

    
    handleSubmitClick();
  };
  


  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <section className="form__body">
        <label className="form__label">Subject</label>
        <input
          name="subject"
          type="text"
          placeholder="Enter a one-word subject"
          className={`form-control ${
            errors.subject ? "is-invalid" : ""
          } form__input`}
          {...register("subject", {
            required: true,
            max: 15,
            min: 2,
            maxLength: 15,
            pattern: /\b[A-Za-z]+\b/i,
          })}
        />

        <div className="form__invalid-feedback">{errors.subject?.message}</div>

        <div className="form__checkbox-container">
          <input
            name="acceptTerms"
            type="checkbox"
            {...register("acceptTerms", { required: true })}
            id="acceptTerms"
            className={`form__button_type_checkbox form-control ${
              errors.acceptTerms ? "is-invalid" : ""
            }`}
          ></input>
          <label className="form__label form__label_type_checkbox">
            I understand that the information returned is generated by an
            experimental artificial intelligence. It may be incorrect,
            incomplete or offensive.
          </label>
        </div>
        <div className="form__invalid-feedback">
          {errors.acceptTerms?.message}
        </div>
      </section>
      <div>
        <button
          type="button"
          className="form__button form__button_type_cancel"
          onClick={() => reset()}
        >
          Cancel
        </button>
        <button type="submit" className="form__button form__button_type_submit">
          Create
        </button>
      </div>
    </form>
  );
}
