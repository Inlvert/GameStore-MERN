import React from "react";
import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import * as yup from "yup";
import style from "./LoginForm.module.scss";
import { login } from "../../redux/slices/authSlice";

const LIGIN_SCHEMA = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const initialValues = {
  email: "user2@mail.com", //test
  password: "user12345", //test
};

const LoginForm = (props) => {
  const dispatch = useDispatch();
  const hendleSubmit = (values, formikBag) => {
    dispatch(login(values));
    formikBag.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={hendleSubmit}
      validationSchema={LIGIN_SCHEMA}
    >
      <Form className={style.wrapper}>
        <h1 className={style.text}>LoginForm</h1>
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
          Login
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
