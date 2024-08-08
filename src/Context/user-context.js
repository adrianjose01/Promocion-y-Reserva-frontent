import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const ContextContainer = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState();

  const logout = () => {
    setCurrentUser(null);
    setIsLoggedIn(false);
  };

  const value = {
    isLoggedIn,
    setIsLoggedIn,
    setCurrentUser,
    currentUser,
    logout,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
