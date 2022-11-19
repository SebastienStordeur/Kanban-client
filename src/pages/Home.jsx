import React from "react";
import SidePanel from "../components/boardLists/SidePanel";
import AddBoardForm from "../components/forms/create-board/AddBoardForm";
import HomeSection from "../components/home/HomeSection";
import Header from "../components/layout/Header";

const Home = (props) => {
  return (
    <>
      <Header />
      <main id="main" className="flex h-[calc(100vh-64px)]">
        <SidePanel addBoardIsOpen={props.setBoardIsOpen} />
        <HomeSection />
        {props.boardIsOpen && <AddBoardForm />}
      </main>
    </>
  );
};

export default Home;
