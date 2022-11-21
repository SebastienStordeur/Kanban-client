import React, { useContext } from "react";
import SignupForm from "../components/forms/signup/SignupForm";
import { ThemeContext } from "../store/theme-context";

const Signup = () => {
  const theme = useContext(ThemeContext);
  return (
    <main
      id="main"
      className={`${
        theme.theme === "dark" ? "bg-veryDarkGrey" : "bg-lightGrey"
      } h-screen flex items-center justify-center px-4`}
    >
      <SignupForm />
    </main>
  );
};

export default Signup;
