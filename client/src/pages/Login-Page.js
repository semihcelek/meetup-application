import React from "react";
import { Redirect } from "react-router";
import Login from "../components/Login";
import { useUserStore } from "../store/userStore";

const LoginPage = () => {
  const user = useUserStore((state) => state.user);

  return <div>{user.token ? <Redirect to="/" /> : <Login />}</div>;
};

export default LoginPage;
