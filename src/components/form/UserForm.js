import React, { useEffect } from "react";

import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { ThreeDots } from "react-loading-icons";

import { useModal } from "../../hooks/useModal";
import "./form.css";

export const UserForm = ({
  signUp,
  submitText,
  text,
  linkText,
  onSubmit,
  onLinkClick,
  onCancel,
}) => {
  const { isLoading } = useModal();

  //form- Yup schema
  const validationSchemaSignUp = Yup.object().shape({
    email: Yup.string()
      .email()
      .required("Please enter a valid email.")

      .matches(
        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
        "Please enter a valid email"
      ),
    name: Yup.string()
      .required("Please enter a user name for your account.")
      .min(2, "Add between 2 and 15 characters with no spaces")
      .max(15, "Add between 2 and 15 characters with no spaces"),

    password: Yup.string()
      .required("Please enter a password between 4 and 8 characters.")
      .min(4, "Add between 4 and 25 characters with no spaces")
      .max(25, "Add between 4 and 25 characters with no spaces"),
  });

  const validationSchemaLogin = Yup.object().shape({
    email: Yup.string()
      .email()
      .required("Please enter a valid email.")

      .matches(
        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
        "Please enter a valid email"
      ),

    password: Yup.string()
      .required("Please enter a password between 4 and 8 characters.")
      .min(4, "Add between 4 and 25 characters with no spaces")
      .max(25, "Add between 4 and 25 characters with no spaces"),
  });

  //form - config
  const emptyInput = {
    name: "",
    email: "",
    password: "",
  };
  const formOptions = {
    resolver: yupResolver(
      signUp ? validationSchemaSignUp : validationSchemaLogin
    ),
    defaultValues: { ...emptyInput },
  };
  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors } = formState;

  useEffect(() => {
    reset({ ...emptyInput });
  }, [formState.isSubmitSuccessful, reset]);

  const handleCancelClick = () => {
    reset();
    onCancel();
  };

  return (
    <>
      <form onSubmit={handleSubmit((data) => onSubmit(data))} className="form">
        <section className="form__body">
          {signUp ? (
            <>
              <label className="form__label">Pen Name</label>
              <input
                name="name"
                type="text"
                // id="input-name"
                placeholder="Enter a pen name"
                className={` ${
                  errors.name ? "is-invalid" : ""
                } form__input`}
                {...register("name", {
                  required: true,
                  max: 15,
                  min: 2,
                  maxLength: 15,
                })}
              />
              <div className="form__invalid-feedback">
                {errors.name?.message}
              </div>
            </>
          ) : null}

          <label className="form__label">Email</label>
          <input
            name="email"
            type="email"
            placeholder="email"
            // id="input-email"
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
            type="password"
            placeholder="Enter a password"
            // id="input-password"
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
            onClick={handleCancelClick}
          >
            Cancel
          </button>

          {isLoading ? (
            <button
              type="submit"
              className="button button_type_form button_type_form_submit"
              aria-label="loading"
            >
              <ThreeDots height="1em" width="60px" stroke="#2b24d2" />
            </button>
          ) : (
            <button
              type="submit"
              className="button button_type_form button_type_form_submit"
            >
              {submitText}
            </button>
          )}
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
