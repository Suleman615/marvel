
// MyContext.js
import React, { createContext, useState, useContext } from 'react';

// Create a Context
const DetailContext = createContext();

// Create a provider component
export const DetailProvider = ({ children }) => {
  const [details, setDetails] = useState({}); // Initial state

  // You can define functions to update the state here
  const updateState = (newValue) => {
    setDetails(newValue);
  };

  return (
    <DetailContext.Provider value={{ details, setDetails }}>
      {children}
    </DetailContext.Provider>
  );
};

// Custom hook for using the context
export const useDetailContext = () => {
  return useContext(DetailContext);
};
