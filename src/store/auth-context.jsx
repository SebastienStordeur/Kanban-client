import React, { useState } from "react";

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

  return (
    <AuthContext.Provider value={defaultValue}>
      {props.children}
    </AuthContext.Provider>
  );
};
