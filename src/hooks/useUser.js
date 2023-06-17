import { useContext, useCallback } from "react";
import { UserContext } from "../contexts";
import { ulid } from "ulid";

export const useUser = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const setAnonUser = useCallback(()=>{
    setCurrentUser({
      name: "Jane Doe",
      email: "kedoodle@kedoodledev",
      _id: ulid(),
      // _id: "6429c559315c60dbbe0427b3",
      isAnonymous: "true",
    });
  },[])


  return { currentUser, setCurrentUser, setAnonUser };
};
