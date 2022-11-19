import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { AuthContextProvider } from "./store/auth-context";
import { BoardContextProvider } from "./store/boards-context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <BoardContextProvider>
        <App />
      </BoardContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
