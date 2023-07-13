import { configureStore } from "@reduxjs/toolkit";
import menuSlice from "./cuisineSlice";

const store = configureStore({
  reducer: {
    menu: menuSlice,
  },
});

export default store;
