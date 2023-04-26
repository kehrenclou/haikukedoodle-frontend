import React from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "./form.css"

export default function SubjectForm() {
  const yupValidation = Yup.object().shape({
    subject: Yup.string()
      .required("Please enter a one word subject.")
      .min(2, "Add between 2 and 15 characters with no spaces")
      .max(15, "Add between 2 and 15 characters with no spaces"),
  });

  const formOptions = { resolver: yupResolver(yupValidation) };
  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors } = formState;

  //   const {
  //     register,
  //     handleSubmit,
  //     formState: { errors },
  //   } = useForm();
  function onSubmit(data) {
    console.log(JSON.stringify(data, null, 4));
    return false;
  }

//   const handleError = (errors) => console.log(errors);
//   console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <div className="form__body">
        <label>Enter Subject to write about</label>
        <input
          name="subject"
          type="text"
          placeholder="Subject"
          className={`form-control ${errors.name ? 'is-invalid' :""}`}
          {...register("subject", {
            required: true,
            max: 15,
            min: 2,
            maxLength: 15,
            pattern: /\b[A-Za-z]+\b/i,
          })}
        />

        {errors?.subject?.type === "required" && (
          <p className="main__heading">this field is required</p>
        )}
      </div>
      <input type="submit" />
      <button>Submit</button>
    </form>
  );
}
