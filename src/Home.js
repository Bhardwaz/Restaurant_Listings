import React, { useContext } from "react";
import RestaurantCard from "./components/RestaurantCard";
import { RestaurantContext } from "./context/restaurantContext";
import { useDispatch } from "react-redux";
import { toggleMenu } from "./reduxStore/cuisineSlice";
const Home = () => {
  const { filteredRestaurants } = useContext(RestaurantContext);
  const dispatch = useDispatch();
  return (
    <div className="container">
      <div className="container ml-5">
        <div className="d-flex-column justify-content-between gap-3">
          <h2 className="mt-2"> {filteredRestaurants.length} Restaurants </h2>
          <button
            className="btn btn-outline-success"
            onClick={() => {
              dispatch(toggleMenu(true));
            }}
          >
            Cuisines 🍴
          </button>
        </div>
        <div className="row mx-auto gap-3 mt-3 col-12">
          {filteredRestaurants.length > 0 ? (
            filteredRestaurants.map((restaurant) => (
              <RestaurantCard payload={restaurant} key={restaurant.data.id} />
            ))
          ) : (
            <div className="container">
              {" "}
              No Restaurant Found. Please Search Some Other Favourite 🍴{" "}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Home;
