import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const setAuthUser = (user) => {
    setUser(user);
  };

  const setUserData = (data) => {
    setUser(data);
  };

  return (
    <AuthContext.Provider value={{ user, setAuthUser, setUserData }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
