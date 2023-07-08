import { createContext, useState } from "react";
import { ulid } from "ulid";


export const UserContext = createContext();

export const useInitializeUserStore = () => {
  const[isRestricted,setIsRestricted]=useState(false);
  const [currentUser, setCurrentUser] = useState({
    name: "AnonUser",
    email: "kedoodle@kedoodledev",
    _id: ulid(),
    isAnonymous: "true",
    counter: 0,
    counterTimeStamp: new Date(),
    counterMax:1,
    
  });

  return {
    currentUser,
    setCurrentUser,
    isRestricted,
    setIsRestricted,
  };
};
