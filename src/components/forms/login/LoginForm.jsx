import React, { useRef } from "react";
import axios from "axios";

import Input from "../../UI/Input";

const LoginForm = () => {
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  const headers = {
    "Content-Type": "application/json",
  };

  const submitLogin = (event) => {
    event.preventDefault();

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
  };

  return (
    <form id="login-form" onSubmit={submitLogin}>
      <div>
        <Input type="email" id="login-email" ref={emailInputRef} />
      </div>
      <Input type="password" id="login-password" ref={passwordInputRef} />
      <button type="submit">subtmit</button>
    </form>
  );
};

export default LoginForm;
