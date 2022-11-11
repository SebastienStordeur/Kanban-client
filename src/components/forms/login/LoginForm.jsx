import React, { useRef, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { emailRegex } from "../../../utils/Regex/regex";
import Input from "../../UI/Input";
import Button from "../../UI/Button";
import { emailValidation } from "../../../services/FormValidations/EmailValidation";
import { sendLoginRequest } from "../../../services/requests/LoginRequest";

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
    <form id="login-form" onSubmit={submitLogin} className="w-full sm:w-96 sm:mx-auto bg-lines h-96 flex flex-col p-4">
      <div className="w-full mt-6">
        <label htmlFor="login-email" className="font-bold">
          Email
        </label>
        <Input type="email" id="login-email" ref={emailInputRef} className="w-full h-8" />
        {emailHasError && <p className="text-red">{emailMessageError}</p>}
      </div>
      <div className="mt-4">
        <label htmlFor="login-password" className="font-bold">
          Password
        </label>
        <Input type="password" id="login-password" ref={passwordInputRef} className="w-full h-8" />
      </div>
      <Button type="submit" className="bg-purple transition-all hover:bg-lightPurple text-bold h-8 mt-8">
        Submit
      </Button>
      {credentialsError && <p className="text-center text-red text-sm font-bold">Wrong email/password combination</p>}
      <p>
        Need an account ?
        <Link to="/signup" className="text-purple cursor-pointer font-bold">
          Sign up
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;
