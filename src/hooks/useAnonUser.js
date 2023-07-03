import { useCallback, useEffect, useState } from "react";
import * as auth from "../utils/apis/auth";
import { ulid } from "ulid";

import { api } from "../utils/apis";
import { useAuth, useUser } from "../hooks";

export const useAnonUser = () => {
  const [anonUser, setAnonUser] = useState(null);

  const { token, setToken, isLoggedIn, setIsLoggedIn } = useAuth();
  const { currentUser, setCurrentUser } = useUser();

  //if anonymous & token, set anonuser
  useEffect(() => {
    if (currentUser.isAnonymous && token) {
      setAnonUser(currentUser);
    }
  }, []);

  const initializeAnonUser = useCallback(async () => {
    if (currentUser.isAnonymous && !isLoggedIn) {
      const anonEmail = `anon${ulid()}@anon.com`;
      try {
        const anonUserData = await auth.signup(
          "Anonymous",
          anonEmail,
          "1234",
          "true"
        );
        localStorage.setItem("jwt", anonUserData.token);
        setToken(anonUserData.token);
        api.setHeaders({
          authorization: `Bearer ${anonUserData.token}`,
          "Content-Type": "application/json",
        });
        // setAnonUser(anonUserData);
        setAnonUser(anonUserData);
        setCurrentUser(anonUserData);
        setIsLoggedIn(true);
      } catch (err) {
        console.log("Error on SignUp", err);
      }
    }
  }, []);

  return { anonUser, setAnonUser, initializeAnonUser };
};
