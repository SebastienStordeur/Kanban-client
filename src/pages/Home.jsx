import React, { useState } from "react";
import SidePanel from "../components/boardLists/SidePanel";
import AddBoardForm from "../components/forms/create-board/AddBoardForm";
import HomeSection from "../components/home/HomeSection";

const Home = () => {
  const [addBoardIsOpen, setAddBoardIsOpen] = useState(false);
  return (
    <main id="main" className="flex h-[calc(100vh-64px)]">
      <SidePanel addBoardIsOpen={setAddBoardIsOpen} />
      <HomeSection />
      {addBoardIsOpen && <AddBoardForm />}
    </main>
  );
};

export default Home;
