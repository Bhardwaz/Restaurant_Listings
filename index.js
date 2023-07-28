import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./src/Navbar";
import Home from "./src/Home";
import { makeServer } from "./src/utils/server";
import Tabs from "./src/Tabs";
import Banner from "./src/components/Banner";
import { MyRestaurantProvider } from "./src/context/restaurantContext";
import { Provider } from "react-redux";
import store from "./src/reduxStore/store";
import Cuisines from "./src/components/Cuisines";
import { UserSelectedCuisines } from "./src/context/selectedCuisineContext";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));

// if (process.env.NODE_ENV === "development") {
//   makeServer({ environment: "development" });
// }

const AppLayout = () => {
  return (
    <UserSelectedCuisines>
      <MyRestaurantProvider>
        <Provider store={store}>
          <Navbar />
          <Banner />
          <Tabs />
          <Cuisines />
          <Outlet />
        </Provider>
      </MyRestaurantProvider>
    </UserSelectedCuisines>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

root.render(<RouterProvider router={appRouter} />);
