import React, { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (storedUser) {
      setLoggedInUser(storedUser);
    }
  }, []);

  const handleLogin = (user) => {
    setLoggedInUser(user);
    localStorage.setItem("loggedInUser", JSON.stringify(user));
    toast.success("¡Sesion iniciada exitosamente!");
  };

  const handleLogout = () => {
    setLoggedInUser(null);
    localStorage.removeItem("loggedInUser");
    toast.success("¡Sesion cerrada exitosamente!");
  };

  return (
    <AuthContext.Provider
      value={{
        loggedInUser,
        handleLogin,
        handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
