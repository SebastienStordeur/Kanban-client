import React, { useContext } from "react";
import { ThemeContext } from "../../store/theme-context";

const HomeSection = () => {
  const theme = useContext(ThemeContext);
  return (
    <section
      id="home-section"
      className={`${
        theme.theme === "dark" ? "bg-veryDarkGrey" : "bg-lightGrey"
      } px-2.5 w-full flex justify-center items-center font-bold text-mediumGrey text-center text-lg`}
    >
      <h2>Create or select one of your active boards</h2>
    </section>
  );
};

export default HomeSection;
