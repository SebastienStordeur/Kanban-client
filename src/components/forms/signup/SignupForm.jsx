import React, { useContext, useRef, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import Input from "../../UI/Input";
import Modal from "../../UI/Modal";
import Button from "../../UI/Button";
import Label from "../Label";
import InputValidator from "../InputValidator";
import ThemeSwitch from "../../themeSwitch/ThemeSwitch";
import { ThemeContext } from "../../../store/theme-context";
import { emailRegex } from "../../../utils/Regex/regex";

const SignupForm = () => {
  const theme = useContext(ThemeContext);
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  const [emailHasError, setEmailHasError] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [passwordHasError, setPasswordHasError] = useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");

  const [isSuccess, setIsSuccess] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  const submitSignup = (event) => {
    event.preventDefault();
    setIsSuccess(null);
    setSuccessMessage("");

    if (emailInputRef.current.value.trim() === "") {
      setEmailHasError(true);
      setEmailErrorMessage("Can't be empty");
      if (passwordInputRef.current.value.trim().length < 8) {
        setPasswordHasError(true);
        setPasswordErrorMessage("Password must be at least 8 caracters long");
      }
      return;
    }

    if (!emailRegex.test(emailInputRef.current.value)) {
      setEmailHasError(true);
      setEmailErrorMessage("Wrong email format");
    } else {
      setEmailHasError(false);
      setEmailErrorMessage("");
    }

    if (passwordInputRef.current.value.trim().length < 8) {
      setPasswordHasError(true);
      setPasswordErrorMessage("Password must be at least 8 caracters long");
      return;
    } else {
      setPasswordHasError(false);
      setPasswordErrorMessage("");
    }

    axios
      .post("http://localhost:8000/user/signup", {
        email: emailInputRef.current.value,
        password: passwordInputRef.current.value,
      })
      .then((res) => {
        if (res.status === 200) {
          setIsSuccess(true);
          setSuccessMessage("Your account has been created");
        }
        console.log("RESPONSE", res.response.data);
      })
      .catch((err) => {
        console.log(err);
        if (err.response.status === 400 && err.response.data.message === "Email already used") {
          setIsSuccess(false);
          setSuccessMessage("Email already used");
        } else {
          setIsSuccess(false);
          setSuccessMessage("An error has occured while processing your form");
        }
      });
  };

  return (
    <Modal>
      <form id="signup-form" onSubmit={submitSignup} className="flex flex-col">
        <h1 className={`${theme.theme === "dark" ? "text-white" : "text-black"} font-bold text-lg`}>Sign up</h1>
        <InputValidator className="flex flex-col">
          <Label htmlFor="signup-email">Email</Label>
          <Input type="email" id="signup-email" ref={emailInputRef} />
          {emailHasError && <p className="text-red font-bold text-sm">{emailErrorMessage}</p>}
        </InputValidator>
        <InputValidator className="flex flex-col">
          <Label htmlFor="signup-password">Password</Label>
          <Input type="password" id="signup-password" ref={passwordInputRef} />
          {passwordHasError && <p className="text-red font-bold text-sm">{passwordErrorMessage}</p>}
        </InputValidator>
        <Button type="submit" className="bg-purple text-white transition-all hover:bg-lightPurple text-bold mt-8">
          Sign Up
        </Button>
        {isSuccess && <p className="text-white font-bold text-sm text-center">{successMessage}</p>}
        {!isSuccess && <p className="text-red font-bold text-sm text-center">{successMessage}</p>}
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
