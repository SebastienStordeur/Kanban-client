import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { Home, Login, BoardPage, Signup } from "./pages";
import Header from "./components/layout/Header";
import { useState } from "react";

const App = () => {
  const token = localStorage.getItem("token");
  const [isAuthenticated, setIsAuthenticated] = useState(token ? true : false);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {!isAuthenticated && <Route path="/login" element={<Login />} />}
        {!isAuthenticated && <Route path="/signup" element={<Signup />} />}
        <Route path="/board/:id" element={<BoardPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
