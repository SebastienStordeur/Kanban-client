import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AuthContext } from "./store/auth-context";

import { Home, Login, BoardPage, Signup } from "./pages";
import Header from "./components/layout/Header";

const App = () => {
  const auth = useContext(AuthContext);

  useEffect(() => {
    auth.checkIfAuthenticated();
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {!auth.isAuthenticated && <Route path="/login" element={<Login />} />}
        {!auth.isAuthenticated && <Route path="/signup" element={<Signup />} />}
        {auth.isAuthenticated && <Route path="/board/:id" element={<BoardPage />} />}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
