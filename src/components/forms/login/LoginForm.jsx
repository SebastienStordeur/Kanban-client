import React, { useRef, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import Input from "../../UI/Input";
import Button from "../../UI/Button";
import { emailValidation } from "../../../services/FormValidations/EmailValidation";
import { sendLoginRequest } from "../../../services/requests/LoginRequest";

const LoginForm = () => {
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  const [emailHasError, setEmailHasError] = useState(false);
  const [emailMessageError, setEmailMessageError] = useState("");

  const headers = {
    "Content-Type": "application/json",
  };
  let formIsValid = false;

  const submitLogin = (event) => {
    event.preventDefault();

    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;

    emailValidation(email, setEmailHasError, setEmailMessageError);
    console.log(emailHasError);
    if (!emailHasError) {
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
          });
      } catch (err) {
        console.log(err);
      }
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
        <p className="text-red font-bold text-sm">Message Error</p>
      </div>
      <Button type="submit" className="bg-purple transition-all hover:bg-lightPurple text-bold h-8 mt-8">
        Submit
      </Button>
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
