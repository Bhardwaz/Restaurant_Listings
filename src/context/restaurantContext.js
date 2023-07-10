import React, { useEffect, useState } from "react";

export const RestaurantContext = React.createContext({});

export const MyRestaurantProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    fetch("/api/restaurants")
      .then((response) => response.json())
      .then((json) => {
        setFilteredRestaurants(json);
        setRestaurants(json);
      });
  }, []);
  return (
    <RestaurantContext.Provider
      value={{
        restaurants,
        setRestaurants,
        filteredRestaurants,
        setFilteredRestaurants,
      }}
    >
      {children}
    </RestaurantContext.Provider>
  );
};
