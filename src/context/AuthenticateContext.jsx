import { createContext, useContext, useState } from "react";
import { saveUser, userEmailExist, authenticate } from "../service/db.js";
import { useNavigate } from "react-router-dom";
import { useApi } from "../context/RickAndMortyApiContext.jsx";
import { toast } from "sonner";

const AuthenticateContext = createContext();

const authenticateInitialValues = {
  email: "",
  password: "",
};

const registerInitialValues = {
  fullName: "",
  address: "",
  email: "",
  password: "",
  token: "",
};

export const AuthenticateProvider = ({ children }) => {
  const [isAuthenticate, setIsAuthenticate] = useState(true);
  const [registerFormData, setRegisterFormData] = useState(
    registerInitialValues
  );

  const [authenticateData, setAauthenticateData] = useState(
    authenticateInitialValues
  );

  const navigate = useNavigate();

  const onSubmitAuthenticate = (e) => {
    e.preventDefault();
    if (!authenticate(authenticateData)) {
      toast.info("Usuario no encontrado, favor de registrarse");
    } else {
      setAauthenticateData(authenticateInitialValues);
      handleIsLoggedIn(true);
      navigate("/home");
    }
  };

  const onClickLabel = (e) => {
    e.preventDefault();
    setIsAuthenticate(!isAuthenticate);
  };

  const onSubmiSaveRegister = (e) => {
    e.preventDefault();
    if (userEmailExist(registerFormData.email)) {
      toast.info("Usuario existente, regresa al login y autentícate!");
    } else {
      saveUser(registerFormData);
      setIsAuthenticate(!isAuthenticate);
      setRegisterFormData(registerInitialValues);

      toast.success("Registro satisfactorio, autentícate porfavor!");
    }
  };

  const handleAuthenticateChange = (event) => {
    event.preventDefault();
    setAauthenticateData({
      ...authenticateData,
      [event.target.name]: event.target.value,
    });
  };

  const handleRegisterChange = (event) => {
    event.preventDefault();
    setRegisterFormData({
      ...registerFormData,
      [event.target.name]: event.target.value,
    });
  };

  const { handleIsLoggedIn } = useApi();

  return (
    <AuthenticateContext.Provider
      value={{
        isAuthenticate,
        onClickLabel,
        handleRegisterChange,
        handleAuthenticateChange,
        onSubmiSaveRegister,
        onSubmitAuthenticate,
      }}
    >
      {children}
    </AuthenticateContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthenticateContext = () => useContext(AuthenticateContext);
