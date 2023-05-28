import React, { useEffect, useState } from "react";

import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import "./form.css";

export const UserForm = ({
  signUp,
  submitText,
  text,
  linkText,
  onSubmit,
  onLinkClick,
}) => {
  //form- Yup schema
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email()
      .required("Please enter a valid email.")

      .matches(
        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
        "Please enter a valid email"
      ),
    username: Yup.string()
      .required("Please enter a user name for your account.")
      .min(2, "Add between 2 and 15 characters with no spaces")
      .max(15, "Add between 2 and 15 characters with no spaces"),

    password: Yup.string()
      .required("Please enter a password between 4 and 8 characters.")
      .min(4, "Add between 4 and 8 characters with no spaces")
      .max(8, "Add between 4 and 8 characters with no spaces"),
  });

  //form - config
  const emptyInput = {
    username: "",
    email: "",
    password: "",
  };
  const formOptions = {
    resolver: yupResolver(validationSchema),
    defaultValues: { ...emptyInput },
  };
  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { isSubmitSuccessful },
  } = useForm(formOptions);
  const { errors } = formState;
  const [isSafeToReset, setIsSafeToReset] = useState(true);

  useEffect(() => {
    reset({...emptyInput});
  }, [formState.isSubmitSuccessful, reset]);
  console.log(formState.isSubmitSuccessful);

  return (
    <>
      <form onSubmit={handleSubmit((data) => onSubmit(data))} className="form">
        <section className="form__body">
          {signUp ? (
            <>
              <label className="form__label">User Name</label>
              <input
                name="username"
                type="text"
                placeholder="Enter a user name"
                className={` ${
                  errors.username ? "is-invalid" : ""
                } form__input`}
                {...register("username", {
                  required: true,
                  max: 15,
                  min: 2,
                  maxLength: 15,
                })}
              />
              <div className="form__invalid-feedback">
                {errors.username?.message}
              </div>
            </>
          ) : null}

          <label className="form__label">Email</label>
          <input
            name="email"
            type="email"
            placeholder="email"
            id="input-email"
            className={` ${errors.email ? "is-invalid" : ""} form__input`}
            {...register("email", {
              required: true,

              pattern:
                /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            })}
          />
          <div className="form__invalid-feedback">{errors.email?.message}</div>

          <label className="form__label">Password</label>
          <input
            name="password"
            type="text"
            placeholder="Enter a password"
            className={` ${errors.password ? "is-invalid" : ""} form__input`}
            {...register("password", {
              required: true,
              max: 8,
              min: 4,
              maxLength: 8,
            })}
          />
          <div className="form__invalid-feedback">
            {errors.password?.message}
          </div>
        </section>
        <div className="form__button-container">
          <button
            type="button"
            className="button button_type_form button_type_form_cancel"
            onClick={() => reset()}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="button button_type_form button_type_form_submit"
          >
            {submitText}
          </button>
        </div>
      </form>
      <div className="form__text-container">
        {text}
        <button
          className="button button_type_transparent"
          onClick={onLinkClick}
        >
          {linkText}
        </button>
      </div>
    </>
  );
};
