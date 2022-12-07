import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { AuthContextProvider } from "./store/auth-context";
import { ThemeContextProvider } from "./store/theme-context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>
);
