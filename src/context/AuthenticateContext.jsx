import {createContext, useContext, useState} from "react";

const AuthenticateContext = createContext();

export const AuthenticateProvider = ({children}) => {
  const [isAuthenticate, setIsAuthenticate] = useState(true);

  const onClickLabel = (e) => {
    e.preventDefault();
    setIsAuthenticate(!isAuthenticate);
  };
  
  const onClickSaveRegister = (e) => {
    e.preventDefault();
    setIsAuthenticate(!isAuthenticate);    
  }

  return (
    <AuthenticateContext.Provider value={{
      isAuthenticate,
      onClickLabel,
      onClickSaveRegister
    }}>
      {children}
    </AuthenticateContext.Provider>
  );
}

export const useAuthenticateContext = () => useContext(AuthenticateContext);