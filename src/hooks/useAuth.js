import { useCallback, useContext } from "react";
import { AuthContext } from "../contexts";

export const useAuth = () => {

  const { isLoggedIn, token, setToken, setIsLoggedIn, isLoaded, setIsLoaded } =
    useContext(AuthContext);

  const onLogOut = useCallback(() => {
    setIsLoggedIn(false);
    localStorage.removeItem("jwt");
    setToken(undefined);
  }, []); 

  return {
    isLoaded,
    isLoggedIn,
    token,
    setToken,
    setIsLoggedIn,
    setIsLoaded,
    onLogOut,
  };
};