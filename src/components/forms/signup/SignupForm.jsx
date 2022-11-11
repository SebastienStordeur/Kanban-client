import React, { useRef } from "react";
import axios from "axios";

import Input from "../../UI/Input";

const SignupForm = () => {
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
    <form id="signup-form" onSubmit={submitSignup}>
      <div>
        <Input type="email" id="signup-email" ref={emailInputRef} />
      </div>
      <Input type="password" id="signup-password" ref={passwordInputRef} />

      <button type="submit">subtmit</button>
    </form>
  );
};

export default SignupForm;
