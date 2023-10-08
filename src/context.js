import { createContext, useState } from "react";

const userContext = createContext();

const agreeContext = createContext();

const UserContextProvider = ({children}) => {
  const [userValue, setUserValue] = useState("");
  const [isTicket, setIsTicket] = useState("");
  const [loginState, setLoginState] = useState("");
  const [agreeState, setAgreeState] = useState(true);

  const ticketModal = (value) => {
    setIsTicket(value);
  };
  return (
    <userContext.Provider value={{userValue, setUserValue, isTicket, setIsTicket, ticketModal, loginState, setLoginState}}>
      <agreeContext.Provider value={{agreeState, setAgreeState}}>
        {children}
      </agreeContext.Provider>
    </userContext.Provider>
  )
}

export {userContext, agreeContext, UserContextProvider};