import React, { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { formValidation } from "../../../services/FormValidations/EmailValidation";
import { sendLoginRequest } from "../../../services/requests/LoginRequest";
import { ThemeContext } from "../../../store/theme-context";
import Input from "../../UI/Input";
import Button from "../../UI/Button";
import Modal from "../../UI/Modal";
import InputValidator from "../InputValidator";
import Label from "../Label";
import ThemeSwitch from "../../themeSwitch/ThemeSwitch";

const LoginForm = () => {
  const theme = useContext(ThemeContext);

  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  const [emailHasError, setEmailHasError] = useState(false);
  const [emailMessageError, setEmailMessageError] = useState("");
  const [passwordHasError, setPasswordHasError] = useState(false);
  const [passwordMessageError, setPasswordMessageError] = useState();
  const [credentialsError, setCredentialsError] = useState(false);

  const submitLogin = (event) => {
    event.preventDefault();
    setCredentialsError(false);
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
    sendLoginRequest(email, password, setCredentialsError);
  };

  return (
    <Modal>
      <form id="login-form" onSubmit={submitLogin} className="flex flex-col">
        <h1 className={`${theme.theme === "dark" ? "text-white" : "text-black"} font-bold text-lg`}>Login</h1>
        <InputValidator>
          <Label htmlFor="login-email" className="font-bold">
            Email
          </Label>
          <Input type="email" id="login-email" ref={emailInputRef} className={emailHasError ? "border-red" : ""} />
          {emailHasError && <p className="text-red font-bold text-sm">{emailMessageError}</p>}
        </InputValidator>
        <InputValidator>
          <Label htmlFor="login-password" className="font-bold">
            Password
          </Label>
          <Input
            type="password"
            id="login-password"
            ref={passwordInputRef}
            className={passwordHasError ? "border-red" : ""}
          />
          {passwordHasError && <p className="text-red font-bold text-sm">{passwordMessageError}</p>}
        </InputValidator>
        <Button type="submit" className="bg-purple text-white transition-all hover:bg-lightPurple text-bold mt-8">
          Submit
        </Button>
        {credentialsError && <p className="text-center text-red text-sm font-bold">Wrong email/password combination</p>}
        <p
          className={`${theme.theme === "dark" ? "text-white" : "text-black"} font-bold text-sm mb-2 text-center mt-2`}
        >
          Need an account? &nbsp;
          <Link to="/signup" className="text-purple cursor-pointer font-bold">
            Sign up
          </Link>
        </p>
      </form>
      <ThemeSwitch />
    </Modal>
  );
};

export default LoginForm;
