import React, { useRef, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { emailRegex } from "../../../utils/Regex/regex";
import Input from "../../UI/Input";
import Button from "../../UI/Button";
import { emailValidation } from "../../../services/FormValidations/EmailValidation";
import { sendLoginRequest } from "../../../services/requests/LoginRequest";
import Modal from "../../UI/Modal";
import InputValidator from "../InputValidator";
import Label from "../Label";

const LoginForm = () => {
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  const [emailHasError, setEmailHasError] = useState(false);

  const [emailMessageError, setEmailMessageError] = useState("");
  const [credentialsError, setCredentialsError] = useState(false);

  const headers = {
    "Content-Type": "application/json",
  };
  const submitLogin = (event) => {
    event.preventDefault();

    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;

    //emailValidation(email, error, setEmailMessageError);

    if (email.trim() === "") {
      setEmailHasError(true);
      setEmailMessageError("Email can't be empty");
    } else if (email.trim() !== "" && !emailRegex.test(email)) {
      setEmailHasError(true);
      setEmailMessageError("Wrong email format");
    } else {
      setEmailHasError(false);
      setEmailMessageError("");
    }
    console.log("hasError", emailHasError);

    if (emailHasError) {
      return;
    }

    sendLoginRequest(email, password);
    try {
      axios
        .post(
          "http://localhost:8000/user/login",
          {
            email: emailInputRef.current.value,
            password: passwordInputRef.current.value,
          },
          { headers }
        )
        .then((res) => {
          //localStorage token context
          localStorage.setItem("token", res.data.token);
          console.log("res", res);
        })
        .catch((err) => {
          console.log(err);
          setCredentialsError(true);
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Modal>
      <h1 className="text-black font-bold text-lg">Login</h1>
      <form id="login-form" onSubmit={submitLogin} className="flex flex-col">
        <InputValidator>
          <Label htmlFor="login-email" className="font-bold">
            Email
          </Label>
          <Input type="email" id="login-email" ref={emailInputRef} />
          {emailHasError && <p className="text-red">{emailMessageError}</p>}
        </InputValidator>
        <InputValidator>
          <Label htmlFor="login-password" className="font-bold">
            Password
          </Label>
          <Input type="password" id="login-password" ref={passwordInputRef} />
        </InputValidator>
        <Button type="submit" className="bg-purple text-white transition-all hover:bg-lightPurple text-bold h-8 mt-8">
          Submit
        </Button>
        {credentialsError && <p className="text-center text-red text-sm font-bold">Wrong email/password combination</p>}
        <p className="font-bold text-sm mb-2 text-center mt-2">
          Need an account ?
          <Link to="/signup" className="text-purple cursor-pointer font-bold">
            Sign up
          </Link>
        </p>
      </form>
    </Modal>
  );
};

export default LoginForm;
