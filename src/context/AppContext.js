import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export function AppProvider({ children }) {
  const [user, setUser] = useState({
    name: 'Hung Nguyen',
    role: 'Mobile developer',
    bio: 'I have above 5 years of experience in native mobile apps development, now i am learning React Native',
    avatar: null,
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = (email, password) => {
    // Giả lập đăng nhập
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  const updateUser = (data) => setUser((prev) => ({ ...prev, ...data }));

  return (
    <AppContext.Provider value={{ user, updateUser, isLoggedIn, login, logout }}>
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => useContext(AppContext);
