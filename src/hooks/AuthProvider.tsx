import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }: {children: any}) => {
  const [token, setToken] = useState('s');

  const login = (userToken: any) => {
    setToken(userToken);
    localStorage.setItem('token',userToken)
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem('token')
  };

  const isAuthenticated = !!token;

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};