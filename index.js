import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./src/Navbar";
import Home from "./src/Home";
import { makeServer } from "./src/utils/server";
import Tabs from "./src/Tabs";
import Banner from "./src/components/Banner";
import { MyRestaurantProvider } from "./src/context/restaurantContext";
const root = ReactDOM.createRoot(document.getElementById("root"));

if (process.env.NODE_ENV === "development") {
  makeServer({ environment: "development" });
}

const AppLayout = () => {
  return (
    <MyRestaurantProvider>
      <Navbar />
      <Banner />
      <Tabs />
      <Home />
    </MyRestaurantProvider>
  );
};

root.render(<AppLayout />);
