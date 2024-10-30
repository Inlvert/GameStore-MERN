import React from "react";
import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import * as yup from "yup";
import style from "./RegistrationForm.module.scss";
import { registration } from "../../redux/slices/authSlice";

const REGISTRATION_SCHEMA = yup.object({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const initialValues = {
  firstName: "user",
  lastName: "Userenko",
  email: "user@mail.com",
  password: "user12345",
};

const RegistrationForm = (props) => {
  const dispatch = useDispatch();
  const hendleSubmit = (values, formikBag) => {
    dispatch(registration(values));
    formikBag.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={hendleSubmit}
      validationSchema={REGISTRATION_SCHEMA}
    >
      <Form className={style.wrapper}>
        <h1 className={style.text}>Registration</h1>
        <Field
          name="firstName"
          placeholder="FirstName"
          className={style.textInput}
        />
        <Field
          name="lastName"
          placeholder="LastName"
          className={style.textInput}
        />
        <Field
          name="email"
          type="email"
          placeholder="Email"
          className={style.textInput}
        />
        <Field
          name="password"
          type="password"
          placeholder="Password"
          className={style.textInput}
        />
        <button type="submit" className={style.btn}>
          Registration
        </button>
        <a href="/login">
          <button type="button" className={style.btn}>
            Login
          </button>
        </a>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
