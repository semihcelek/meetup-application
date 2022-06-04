import { Field, Form, Formik } from "formik";
import React from "react";
import { useHistory } from "react-router";
import { registerUser } from "../services/user-service";

const Register = () => {
  const history = useHistory();
  const handleSubmit = async (values, { setSubmitting }) => {
    const response = await registerUser(values);
    console.log(response);
    setSubmitting(false);
    if (response) {
      history.push("/");
    }
  };

  return (
    <div>
      <h3>Register</h3>
      <Formik
        initialValues={{
          username: "",
          firsName: "",
          lastName: "",
          email: "",
          password: "",
        }}
        onSubmit={handleSubmit}
      >
        <Form>
          <label>Username:</label>
          <Field name="username" type="text" />

          <label>First Name:</label>
          <Field name="firstName" type="text" />

          <label>Last Name (optional):</label>
          <Field name="lastName" type="text" />

          <label>email:</label>
          <Field name="email" type="email" />

          <label>password</label>
          <Field name="password" type="password" />
          <button type="submit">register</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Register;
