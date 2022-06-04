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
    <div className="container mt-5 m-5 p-5 ">
      <h3>Register</h3>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={handleSubmit}
      >
        <Form>
          <label className="form-label" >email:</label>
          <Field className="form-control" name="email" type="email" />

          <label className="form-label">password</label>
          <Field className="form-control" name="password" type="password" />
          <button className="mt-4 btn btn-primary" type="submit">register</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Register;
