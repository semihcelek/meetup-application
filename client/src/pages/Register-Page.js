import React from "react";
import { Redirect } from "react-router";
import Register from "../components/Register";
import { useUserStore } from "../store/userStore";

const RegisterPage = () => {
  const user = useUserStore((state) => state.user);

  return <div>{user.token ? <Redirect to="/" /> : <Register />}</div>;
};

export default RegisterPage;
