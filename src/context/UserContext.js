import { createContext, useCallback, useMemo, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [state, updateState] = useState({
    nickname: "",
    email: "email@email.com",
    id: "",
  });

  const updateNickname = useCallback(
    (nickname) => {
      updateState({
        ...state,
        nickname: nickname,
      });
    },
    [state]
  );
  const updateEmail = useCallback(
    (email) => {
      updateState({
        ...state,
        email: email,
      });
    },
    [state]
  );

  const store = useMemo(() => {
    return { state, updateEmail, updateNickname };
  }, [state, updateEmail, updateNickname]);

  return <UserContext.Provider value={store}>{children}</UserContext.Provider>;
};
