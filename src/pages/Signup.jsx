import React from "react";
import SignupForm from "../components/forms/signup/SignupForm";

const Signup = () => {
  return (
    <main id="main" className="bg-lightGrey h-[calc(100vh-64px)] flex items-center justify-center px-4">
      <SignupForm />
    </main>
  );
};

export default Signup;
