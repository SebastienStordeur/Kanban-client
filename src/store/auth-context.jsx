import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = React.createContext({
  isAuthenticated: false,
  checkIfAuthenticated: () => {},
  token: null,
});

export const AuthContextProvider = (props) => {
  const token = localStorage.getItem("token");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const checkIfAuthenticated = () => {
    token ? setIsAuthenticated(true) : setIsAuthenticated(false);
    return isAuthenticated;
  };

  const defaultValue = {
    isAuthenticated,
    checkIfAuthenticated,
    token,
  };

  return <AuthContext.Provider value={defaultValue}>{props.children}</AuthContext.Provider>;
};
