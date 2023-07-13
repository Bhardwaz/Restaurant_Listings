import { createContext, useState } from "react";

export const selectedCuisinesContext = createContext();

export const UserSelectedCuisines = ({ children }) => {
  const [selectedCuisines, setSelectedCuisines] = useState([]);
  return (
    <selectedCuisinesContext.Provider
      value={{ selectedCuisines, setSelectedCuisines }}
    >
      {children}
    </selectedCuisinesContext.Provider>
  );
};
