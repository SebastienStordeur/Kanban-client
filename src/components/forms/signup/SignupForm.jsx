import React, { useContext, useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import Input from "../../UI/Input";
import Modal from "../../UI/Modal";
import Button from "../../UI/Button";
import Label from "../Label";
import InputValidator from "../InputValidator";
import ThemeSwitch from "../../themeSwitch/ThemeSwitch";
import { ThemeContext } from "../../../store/theme-context";

const SignupForm = () => {
  const theme = useContext(ThemeContext);
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  const submitSignup = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:8000/user/signup", {
        email: emailInputRef.current.value,
        password: passwordInputRef.current.value,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <Modal>
      <form id="signup-form" onSubmit={submitSignup} className="flex flex-col">
        <h1 className={`${theme.theme === "dark" ? "text-white" : "text-black"} font-bold text-lg`}>Sign up</h1>
        <InputValidator className="flex flex-col">
          <Label htmlFor="signup-email">Email</Label>
          <Input type="email" id="signup-email" ref={emailInputRef} />
        </InputValidator>
        <InputValidator className="flex flex-col">
          <Label htmlFor="signup-password">Password</Label>
          <Input type="password" id="signup-password" ref={passwordInputRef} />
        </InputValidator>
        <Button type="submit" className="bg-purple text-white transition-all hover:bg-lightPurple text-bold mt-8">
          Sign Up
        </Button>
        <p
          className={`${theme.theme === "dark" ? "text-white" : "text-black"} font-bold text-sm mb-2 text-center mt-2`}
        >
          Already have an account? &nbsp;
          <Link to="/login" className="text-purple cursor-pointer font-bold">
            Login
          </Link>
        </p>
      </form>
      <ThemeSwitch />
    </Modal>
  );
};

export default SignupForm;
