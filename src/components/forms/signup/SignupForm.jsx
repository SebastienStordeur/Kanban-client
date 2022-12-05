import React, { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Input, Modal, Button } from "../../UI/index.js";
import { InputValidator, Label, Title, ErrorMessage } from "../index";
import ThemeSwitch from "../../themeSwitch/ThemeSwitch";
import { ThemeContext } from "../../../store/theme-context";
import { formValidation } from "../../../services/FormValidations/EmailValidation";
import { sendSignupRequest } from "../../../services/requests/SignupRequest";

const SignupForm = () => {
  const theme = useContext(ThemeContext);
  const formRef = useRef(null);
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  const [emailHasError, setEmailHasError] = useState(false);
  const [emailErrorMessage, setEmailMessageError] = useState("");
  const [passwordHasError, setPasswordHasError] = useState(false);
  const [passwordErrorMessage, setPasswordMessageError] = useState("");
  const [isSuccess, setIsSuccess] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  const submitSignup = (event) => {
    event.preventDefault();
    setIsSuccess(null);
    setSuccessMessage("");
    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;

    if (
      !formValidation(
        email,
        setEmailHasError,
        setEmailMessageError,
        password,
        setPasswordHasError,
        setPasswordMessageError
      )
    ) {
      return;
    }

    sendSignupRequest(
      email,
      password,
      setIsSuccess,
      setSuccessMessage,
      formRef
    );
  };

  return (
    <Modal>
      <form
        id="signup-form"
        ref={formRef}
        onSubmit={submitSignup}
        className="flex flex-col"
      >
        <Title> Sign up</Title>
        <InputValidator className="flex flex-col">
          <Label htmlFor="signup-email">Email</Label>
          <Input
            type="email"
            id="signup-email"
            ref={emailInputRef}
            className={emailHasError ? "border-red" : ""}
          />
          {emailHasError && <ErrorMessage>{emailErrorMessage}</ErrorMessage>}
        </InputValidator>
        <InputValidator className="flex flex-col">
          <Label htmlFor="signup-password">Password</Label>
          <Input
            type="password"
            id="signup-password"
            ref={passwordInputRef}
            className={passwordHasError ? "border-red" : ""}
          />
          {passwordHasError && (
            <ErrorMessage>{passwordErrorMessage}</ErrorMessage>
          )}
        </InputValidator>
        <Button
          type="submit"
          className="bg-purple text-white transition-all hover:bg-lightPurple text-bold mt-8"
        >
          Sign Up
        </Button>
        {isSuccess && (
          <p className="text-white font-bold text-sm text-center">
            {successMessage}
          </p>
        )}
        {!isSuccess && <ErrorMessage>{successMessage}</ErrorMessage>}
        <p
          className={`${
            theme.theme === "dark" ? "text-white" : "text-black"
          } font-bold text-sm mb-2 text-center mt-2`}
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
