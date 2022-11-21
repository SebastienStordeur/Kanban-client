import React from "react";
import SidePanel from "../components/boardLists/SidePanel";
import HomeSection from "../components/home/HomeSection";
import Header from "../components/layout/Header";

const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <main id="main" className="flex h-[calc(100vh-64px)]">
        <SidePanel />
        <HomeSection />
      </main>
    </React.Fragment>
  );
};

export default Home;
