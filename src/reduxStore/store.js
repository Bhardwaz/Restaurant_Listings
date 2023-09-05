import { configureStore } from "@reduxjs/toolkit";
import menuSlice from "./cuisineSlice";
import cartSlice from "./cartSlice";

const store = configureStore({
  reducer: {
    menu: menuSlice,
    cart: cartSlice,
  },
});

export default store;
