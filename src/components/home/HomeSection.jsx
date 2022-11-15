import React from "react";
import DeleteTaskForm from "../forms/delete-task/DeleteTaskForm";

const HomeSection = () => {
  return (
    <section
      id="home-section"
      className="px-2.5 w-full h-screen bg-lightGrey flex justify-center items-center font-bold text-mediumGrey text-center text-lg"
    >
      <h2>Create or select one of your active boards</h2>
      <DeleteTaskForm />
    </section>
  );
};

export default HomeSection;
