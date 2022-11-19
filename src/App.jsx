import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AuthContext } from "./store/auth-context";

import { Home, Login, BoardPage, Signup } from "./pages";

const App = () => {
  const auth = useContext(AuthContext);
  const [addBoardIsOpen, setAddBoardIsOpen] = useState(false);

  useEffect(() => {
    auth.checkIfAuthenticated();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home boardIsOpen={addBoardIsOpen} setBoardIsOpen={setAddBoardIsOpen} />} />
        {!auth.isAuthenticated && <Route path="/login" element={<Login />} />}
        {!auth.isAuthenticated && <Route path="/signup" element={<Signup />} />}
        <Route
          path="/board/:id"
          element={<BoardPage boardIsOpen={addBoardIsOpen} setBoardIsOpen={setAddBoardIsOpen} />}
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
