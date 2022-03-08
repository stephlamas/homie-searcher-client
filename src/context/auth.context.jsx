import React, { createContext, useState } from "react";
import { useEffect } from "react";
import authService from "../services/auth.service";
import profileService from "../services/profile.service";

const AuthContext = createContext();

function AuthProviderWrapper(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);

  const storeToken = (token) => {
    localStorage.setItem("authToken", token);
  };

  const removeToken = () => {
    localStorage.removeItem("authToken");
  };

  const getToken = () => {
    return localStorage.getItem("authToken");
  };

  const loadUser = () => {
    setIsLoading(true)
    profileService.getUserProfile().then((response) => {
      setUser(response.data);
      setIsLoading(false)
    });
  };

  const authenticateUser = () => {
    const storedToken = getToken();
    setIsLoading(true);

    if (!storedToken) {
      logOutUser();
    } else {
      authService
        .verify(storedToken)
        .then(({ data }) => {
          setIsLoggedIn(true);
          // cargamos los datos de la base de datos
          loadUser();
        })
        .catch(() => logOutUser());
    }
  };

  const logOutUser = () => {
    removeToken();
    setIsLoggedIn(false);
    setIsLoading(false);
    setUser(null);
  };

  useEffect(() => authenticateUser(), []);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        isLoading,
        user,
        // lo exponemos en todo el contexto de la pagina para que se pueda refrescar cuando se necesite
        loadUser,
        storeToken,
        authenticateUser,
        logOutUser,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProviderWrapper };
