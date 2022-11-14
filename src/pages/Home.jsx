import React from "react";
import SidePanel from "../components/boardLists/SidePanel";
import HomeSection from "../components/home/HomeSection";

const Home = () => {
  return (
    <main id="main" className="flex">
      <SidePanel />
      <HomeSection />
    </main>
  );
};

export default Home;
