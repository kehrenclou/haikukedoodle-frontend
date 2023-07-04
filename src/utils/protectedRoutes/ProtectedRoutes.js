import React, { useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useAuth, useUser } from "../../hooks";
import { api } from "../apis";

function ProtectedRoutes() {
  const { isLoggedIn, setIsLoggedIn, token } = useAuth();
  const { setCurrentUser } = useUser();

  // on load - Protected route
  //checks for token
  //if token, update headers, getInfo, setIsLoggedIn, , setCurrentUser
  useEffect(() => {
    if (!token) {
      return;
    }
    //update token in headers
    api.setHeaders({
      authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    });
    api
      .getInfo()
      .then((res) => {
        if (res) {
          setIsLoggedIn(true);

          setCurrentUser(res);
        }
      })
      .catch((err) => {
        api.handleErrorResponse(err);
      });
  }, []);

  return isLoggedIn ? <Outlet /> : <Navigate to="/" />;
}

export default ProtectedRoutes;
