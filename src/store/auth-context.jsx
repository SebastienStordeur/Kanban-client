import React, { useState } from "react";

export const AuthContext = React.createContext({
  isAuthenticated: false,
  checkIfAuthenticated: () => {},
});

export const AuthContextProvider = (props) => {
  const token = localStorage.getItem("token");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  console.log(token !== "");

  const checkIfAuthenticated = () => {
    token !== "" ? setIsAuthenticated(true) : setIsAuthenticated(false);
  };

  const defaultValue = {
    isAuthenticated,
    checkIfAuthenticated,
  };

  return <AuthContext.Provider value={defaultValue}>{props.children}</AuthContext.Provider>;
};
