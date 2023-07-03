import { useCallback, useState } from "react";
import * as auth from "../utils/apis/auth";
import { ulid } from "ulid";

import { api } from "../utils/apis";
import { useAuth, useUser } from "../hooks";

export const useAnonUser = () => {
  const [anonUser, setAnonUser] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const { setToken, setIsLoggedIn } = useAuth();
  const { setCurrentUser } = useUser();

  const initializeAnonUser = useCallback(async () => {
    if (!anonUser) {
      const anonEmail = `anon${ulid()}@anon.com`;
      const anonUserData = await auth.signup(
        "Anonymous",
        anonEmail,
        "1234",
        "true"
      );
      localStorage.setItem("jwt", anonUser.token);
      setToken(anonUser.token);
      api.setHeaders({
        authorization: `Bearer ${anonUser.token}`,
        "Content-Type": "application/json",
      });
      setAnonUser(anonUserData);
      setCurrentUser(anonUser);
      setIsLoggedIn(true); //move to hook
    }
  }, []);

  return { anonUser, isLoading, initializeAnonUser };
};
