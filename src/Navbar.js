import React, { useState, useContext } from "react";
import { RestaurantContext } from "./context/restaurantContext";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  let [search, setSearch] = useState("");
  const { restaurants, setFilteredRestaurants } = useContext(RestaurantContext);

  const searchHandler = () => {
    search = search.toLowerCase();
    return restaurants.filter((restaurant) => {
      return restaurant.info.name.toLowerCase().includes(search);
    });
  };

  return (
    <div>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <NavLink
            to={"/"}
            className="navbar-brand text-success font-monospace text-lg"
          >
            Potato
          </NavLink>
          <form
            className="d-flex"
            role="search"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            <input
              className="form-control me-2"
              type="search"
              aria-label="Search"
              placeholder="Search"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  setSearch(e.target.value);
                }
              }}
            />
            <button
              className="btn btn-outline-success"
              type="submit"
              onClick={() => {
                const data = searchHandler();
                setFilteredRestaurants(data);
              }}
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
