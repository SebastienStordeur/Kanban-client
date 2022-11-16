import React, { useRef } from "react";
import axios from "axios";

import Input from "../../UI/Input";
import Modal from "../../UI/Modal";
import Button from "../../UI/Button";
import Label from "../Label";
import InputValidator from "../InputValidator";

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
    <Modal>
      <form id="signup-form" onSubmit={submitSignup} className="flex flex-col">
        <h2 className="text-black font-bold text-lg">Sign up</h2>
        <InputValidator className="flex flex-col">
          <Label htmlFor="signup-email">Email</Label>
          <Input type="email" id="signup-email" ref={emailInputRef} />
        </InputValidator>
        <InputValidator className="flex flex-col">
          <Label htmlFor="signup-password">Password</Label>
          <Input type="password" id="signup-password" ref={passwordInputRef} />
        </InputValidator>
        <Button type="submit" className="bg-purple text-white">
          Sign Up
        </Button>
      </form>
    </Modal>
  );
};

export default SignupForm;
