import { createContext,useState, useEffect } from "react";
import {onAuthStateChangedListener, createUserDocFromAuth} from "../utils/firebase/firebase.utils"

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser]=useState(null);

    useEffect(() => {
      
       const unsubscribe = onAuthStateChangedListener((user)=>{
           if(user){
            createUserDocFromAuth(user);
           }
           setCurrentUser(user)
       })
    
      return unsubscribe
      
      
    }, [])
    

  return <UserContext.Provider value={{currentUser, setCurrentUser}}>{children}</UserContext.Provider>;
};
