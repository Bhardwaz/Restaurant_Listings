import React, { useContext, useState } from "react";
import RestaurantCard, {
  promotedRestaurants,
} from "./components/RestaurantCard";
import { RestaurantContext } from "./context/restaurantContext";
import { useDispatch } from "react-redux";
import { toggleMenu } from "./reduxStore/cuisineSlice";
import { selectedCuisinesContext } from "./context/selectedCuisineContext";
import FilteredCuisine from "./components/FilteredCuisine";
import { NavLink } from "react-router-dom";

const Home = () => {
  const [activeButton, setActiveButton] = useState("All");
  const { filteredRestaurants, restaurants, setFilteredRestaurants } =
    useContext(RestaurantContext);
  const userSelected = useContext(selectedCuisinesContext);
  const { selectedCuisines } = userSelected;
  const dispatch = useDispatch();

  // promoted reastaurants
  const RestaurantCardPromoted = promotedRestaurants(RestaurantCard);

  function filterRestaurantsBasedRatings(rating) {
    setActiveButton(rating);
    const userFilteredRestaurant = restaurants.filter(
      (res) => res.data.avgRating > rating && res.data.avgRating < rating + 1
    );
    setFilteredRestaurants(userFilteredRestaurant);
  }
  return (
    <div className="container">
      <div className="container ml-5">
        <div className="d-flex-row justify-content-between gap-3">
          <div>
            <h2 className="mt-2"> {filteredRestaurants.length} Restaurants </h2>
            <button
              className="btn btn-outline-success m-2"
              onClick={() => {
                dispatch(toggleMenu(true));
              }}
            >
              Cuisines 🍴
            </button>

            <button
              className={`btn btn-outline-success m-2 filter-button ${
                activeButton == "All" ? "active" : ""
              }`}
              type="submit"
              onClick={() => {
                setActiveButton("All");
                setFilteredRestaurants(restaurants);
              }}
            >
              All Restaurants
            </button>

            <button
              className={`btn btn-outline-success m-2 filter-button ${
                activeButton == 3 ? "active" : ""
              }`}
              type="submit"
              onClick={() => {
                filterRestaurantsBasedRatings(3);
              }}
            >
              3 Star Ratings
            </button>
            <button
              className={`btn btn-outline-success m-2 filter-button ${
                activeButton == 4 ? "active" : ""
              }`}
              type="submit"
              onClick={() => {
                filterRestaurantsBasedRatings(4);
              }}
            >
              4 Star Ratings
            </button>
          </div>
          {selectedCuisines.length > 0
            ? selectedCuisines.map((cuisine, index) => {
                return (
                  <>
                    {" "}
                    <FilteredCuisine cuisine={cuisine} key={index} />{" "}
                  </>
                );
              })
            : " "}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            alignItems: "center",
            alignContent: "baseline",
            gap: "20px",
          }}
        >
          {filteredRestaurants.length > 0 ? (
            filteredRestaurants.map((restaurant) =>
              restaurant.data.promoted ? (
                <NavLink
                  to={"/restaurant/" + restaurant.data.id}
                  key={restaurant?.data?.id}
                >
                  <RestaurantCardPromoted payload={restaurant} />{" "}
                </NavLink>
              ) : (
                <NavLink
                  to={"/restaurant/" + restaurant.data.id}
                  key={restaurant?.data?.id}
                >
                  <RestaurantCard payload={restaurant} />
                </NavLink>
              )
            )
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
