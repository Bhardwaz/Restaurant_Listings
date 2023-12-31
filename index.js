import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./src/Navbar";
import Home from "./src/Home";
import Tabs from "./src/Tabs";
import Banner from "./src/components/Banner";
import { MyRestaurantProvider } from "./src/context/restaurantContext";
import { Provider } from "react-redux";
import store from "./src/reduxStore/store";
import Cuisines from "./src/components/Cuisines";
import { UserSelectedCuisines } from "./src/context/selectedCuisineContext";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import RestaurantsMenu from "./src/components/RestaurantsMenu";
const root = ReactDOM.createRoot(document.getElementById("root"));

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
      {
        path: "/restaurant/:id",
        element: <RestaurantsMenu />,
      },
    ],
  },
]);

root.render(<RouterProvider router={appRouter} />);
