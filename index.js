import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./src/Navbar";
import Home from "./src/Home";
import { makeServer } from "./src/utils/server";
import Tabs from "./src/Tabs";
import Banner from "./src/components/Banner";
import MyContext, { MyProvider } from "./src/context/restaurantContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
if (process.env.NODE_ENV === "development") {
  makeServer({ environment: "development" });
}

const AppLayout = () => {
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
    <>
      <MyContext.Provider
        value={{
          restaurants,
          setRestaurants,
          filteredRestaurants,
          setFilteredRestaurants,
        }}
      >
        <Navbar />
      </MyContext.Provider>
      <Banner />
      <Tabs />
      <MyContext.Provider
        value={{
          restaurants,
          setRestaurants,
          filteredRestaurants,
          setFilteredRestaurants,
        }}
      >
        <Home />
      </MyContext.Provider>
    </>
  );
};

root.render(<AppLayout />);
