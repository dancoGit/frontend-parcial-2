import {createContext, useContext, useState} from "react";
import {saveUser, userEmailExist } from "../service/db.js";

const AuthenticateContext = createContext();

export const AuthenticateProvider = ({children}) => {
  const [isAuthenticate, setIsAuthenticate] = useState(true);
  const [loginData, setLoginData] = useState({
    fullName: "",
    address: "",
    email: "",
    password: "",
    token: "",
  });

  const onClickLabel = (e) => {
    e.preventDefault();
    setIsAuthenticate(!isAuthenticate);
  };
  
  const onClickSaveRegister = (e) => {
    e.preventDefault();
    if(userEmailExist(loginData.email)) {
      console.log("Error, usuario ya existe");
      alert("Usuario existente, regresa al login y autentícate!");
    } else {  
      saveUser(loginData);
      setIsAuthenticate(!isAuthenticate);
    }
  }

  const handleChange = (event) => {
		setLoginData({
			...loginData,
			[event.target.name]: event.target.value,
		});
	};

  return (
    <AuthenticateContext.Provider value={{
      isAuthenticate,
      onClickLabel,
      onClickSaveRegister,
      handleChange
    }}>
      {children}
    </AuthenticateContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthenticateContext = () => useContext(AuthenticateContext);