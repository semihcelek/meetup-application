import React from "react";
import { Field, Form, Formik } from "formik";
import { loginUser, saveLocalUser } from "../services/user-service";
import { useUserStore } from "../store/userStore";

const Login = () => {
  const setUser = useUserStore((state) => state.setUser);

  const handleSubmit = async (values, { setSubmitting }) => {
    console.log(values);
    const userObj = await loginUser(values);
    setUser(userObj);
    saveLocalUser(userObj);
    setSubmitting(false);
  };
  
  return (
    <div className="container p-5 mt-5 m-5">
      <h3>Login</h3>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
      >
        <Form>
          <label className="form-label">email:</label>
          <Field className="form-control" name="email" type="email" />

          <label className="form-label">password</label>
          <Field className="form-control" name="password" type="password" />
          <button className="mt-4 btn btn-primary" type="submit">login</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
