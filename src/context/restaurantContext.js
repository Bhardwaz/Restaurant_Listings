import React, { useEffect, useState } from "react";

export const RestaurantContext = React.createContext({});

export const MyRestaurantProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  async function gettingAllRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6195574&lng=77.0549901&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data?.json();
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setRestaurants(json?.data?.cards[2]?.data.data?.cards);
  }

  useEffect(() => {
    gettingAllRestaurants();
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
