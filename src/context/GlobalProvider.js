// src/context/GlobalProvider.js
import React, { useState } from 'react';
import { GlobalContext } from './GlobalContext';

export const GlobalProvider = ({ children }) => {
  const [theme, setTheme] = useState('light'); 
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <GlobalContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </GlobalContext.Provider>
  );
};
