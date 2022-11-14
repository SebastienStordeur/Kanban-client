import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home, Login, BoardPage, Signup } from "./pages";
import Header from "./components/layout/Header";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/board/:id" element={<BoardPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
