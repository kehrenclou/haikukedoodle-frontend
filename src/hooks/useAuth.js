import { useCallback, useContext } from "react";
import { AuthContext, CreateHaikuContext } from "../contexts";
import {useUser} from "../hooks"


export const useAuth = () => {
  const { isLoggedIn, token, setToken, setIsLoggedIn, isLoaded, setIsLoaded } =
    useContext(AuthContext);
  const haikuCtx = useContext(CreateHaikuContext);
  const {setUserDefault}=useUser();

  const onLogOut = useCallback(() => {
    setIsLoggedIn(false);
    localStorage.removeItem("jwt");
    setToken(undefined);
    setUserDefault();
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
