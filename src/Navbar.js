import React, { useState, useContext } from "react";
import MyContext from "./context/restaurantContext";
const Navbar = () => {
  let [search, setSearch] = useState("");

  const {
    restaurants,
    filteredRestaurants,
    setRestaurants,
    setFilteredRestaurants,
  } = useContext(MyContext);

  const searchHandler = () => {
    search = search.toLowerCase();
    return restaurants.filter((restaurant) => {
      return restaurant.data.name.toLowerCase().includes(search);
    });
  };

  return (
    <div>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand text-success font-monospace text-lg">
            Potato
          </a>
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
              placeholder="Search"
              aria-label="Search"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
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
