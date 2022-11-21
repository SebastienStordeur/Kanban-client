import React, { useContext } from "react";
import { ThemeContext } from "../store/theme-context";

import LoginForm from "../components/forms/login/LoginForm";

const Login = () => {
  const theme = useContext(ThemeContext);
  return (
    <main
      id="main"
      className={`${
        theme.theme === "dark" ? "bg-veryDarkGrey" : "bg-lightGrey"
      } h-screen flex items-center justify-center px-4`}
    >
      <LoginForm />
    </main>
  );
};

export default Login;
