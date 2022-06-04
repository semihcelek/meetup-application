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
    <div>
      <h3>Login</h3>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
      >
        <Form>
          <label>email:</label>
          <Field name="email" type="email" />

          <label>password</label>
          <Field name="password" type="password" />
          <button type="submit">login</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
