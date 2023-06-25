import { useCallback, useContext } from "react";
import { AuthContext, CreateHaikuContext } from "../contexts";
import { useUser } from "./useUser";

export const useAuth = () => {
  const { isLoggedIn, token, setToken, setIsLoggedIn, isLoaded, setIsLoaded } =
    useContext(AuthContext);
  const haikuCtx = useContext(CreateHaikuContext);
  const { setAnonUser } = useUser();

  const onLogOut = useCallback(() => {
    setIsLoggedIn(false);
    localStorage.removeItem("jwt");
    setToken(undefined);
    setAnonUser();
    haikuCtx.resetAll();
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
