import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home, Login, Project, Signup } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/project/:id" element={<Project />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
