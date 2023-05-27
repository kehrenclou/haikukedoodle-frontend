import { createContext, useState, useMemo } from "react";

export const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("jwt"));
  const [isLoaded, setIsLoaded] = useState(false); //tracks if finished loading info

  const store = useMemo(() => {
    return {
      isLoggedIn,
      token,
      isLoaded,
      setToken,
      setIsLoggedIn,
      setIsLoaded,
    };
  }, [isLoggedIn, token, isLoaded, setToken, setIsLoggedIn, setIsLoaded]);

  return <AuthContext.Provider value={store}>{children}</AuthContext.Provider>;
};
