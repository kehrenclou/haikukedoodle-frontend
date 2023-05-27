import React, { createContext, useState, useCallback, useMemo } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [state, updateState] = useState({
    isLoggedIn: false,
    token: localStorage.getItem("jwt"),
    isLoaded: false,
  });

  const updateIsLoggedIn = useCallback(
    (login) => {
      updateState({
        ...state,
        isLoggedIn: login,
      });
    },
    [state]
  );

  const updateToken = useCallback(
    (token) => {
      updateState({
        ...state,
        token: token,
      });
    },
    [state]
  );

  const store = useMemo(() => {
    return {
      state,
      updateIsLoggedIn,
      updateToken,
    };
  }, [state, updateIsLoggedIn, updateToken]);

  return <AuthContext.Provider value={store}>{children}</AuthContext.Provider>;
};
