import React from "react";
import BoardSection from "../components/board/BoardSection";
import SidePanel from "../components/boardLists/SidePanel";

const BoardPage = () => {
  return (
    <main id="main" className="flex h-[calc(100vh-64px)]">
      <SidePanel />
      <BoardSection />
    </main>
  );
};

export default BoardPage;
