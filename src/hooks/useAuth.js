import { useCallback, useContext } from "react";
import { AuthContext, CreateHaikuContext } from "../contexts";
import {useUser} from "../hooks"


export const useAuth = () => {
  const { isLoggedIn, token, setToken, setIsLoggedIn, isLoaded, setIsLoaded } =
    useContext(AuthContext);
  const haikuCtx = useContext(CreateHaikuContext);
  const {setUserDefault, setIsRestricted}=useUser();

  const onLogOut = useCallback(() => {
    setIsLoggedIn(false);
    localStorage.removeItem("jwt");
    setToken(null);
    setUserDefault();
    setIsRestricted(false);
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
