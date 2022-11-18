import React from "react";
import LoginForm from "../components/forms/login/LoginForm";

const Login = () => {
  return (
    <main id="main" className="bg-lightGrey h-[calc(100vh-64px)] flex items-center justify-center">
      <LoginForm />
    </main>
  );
};

export default Login;
