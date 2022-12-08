import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React, { lazy, Suspense, useContext, useEffect } from "react";
import { AuthContext } from "./store/auth-context";

const Home = lazy(() => import("./pages/Home"));
const BoardPage = lazy(() => import("./pages/BoardPage"));
const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./pages/Signup"));

const App = () => {
  const auth = useContext(AuthContext);

  useEffect(() => {
    auth.checkIfAuthenticated();
  }, []);

  return (
    <BrowserRouter>
      <Suspense fallback="">
        <Routes>
          {auth.isAuthenticated && <Route path="/" element={<Home />} />}
          {!auth.isAuthenticated && (
            <Route path="/" element={<Navigate to="/signup" />} />
          )}
          {!auth.isAuthenticated && <Route path="/login" element={<Login />} />}
          {!auth.isAuthenticated && (
            <Route path="/signup" element={<Signup />} />
          )}

          {auth.isAuthenticated && (
            <Route path="/board/:id" element={<BoardPage />} />
          )}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
