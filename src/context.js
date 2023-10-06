import { createContext, useState } from "react";

const userContext = createContext();

const UserContextProvider = ({children}) => {
  const [userValue, setUserValue] = useState("");
  return (
    <userContext.Provider value={{userValue, setUserValue}}>
      {children}
    </userContext.Provider>
  )
}

export {userContext, UserContextProvider};