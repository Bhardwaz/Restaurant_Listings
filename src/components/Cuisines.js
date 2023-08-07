import React, { useEffect, useState, useContext } from "react";
import { RestaurantContext } from "../context/restaurantContext";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../reduxStore/cuisineSlice";
import CuisineCheckbox from "./CuisineCheckbox";
import {
  UserSelectedCuisines,
  selectedCuisinesContext,
} from "../context/selectedCuisineContext";

const Cuisines = () => {
  // making overflow hidden when user open the modal window for cuisines
  //   useEffect(() => {
  //     document.documentElement.style.overflow = "hidden";

  //     return () => {
  //       document.documentElement.style.overflow = "auto";
  //     };
  //   }, []);

  // getting context values
  const { restaurants, setFilteredRestaurants, filteredRestaurants } =
    useContext(RestaurantContext);

  // setting user selected restaurant which contain user selected cuisines //

  const isMenuOpen = useSelector((store) => store.menu.isMenuOpen);

  // updating restaurant based upon selected cuisines
  const dispatch = useDispatch();

  const userSelected = useContext(selectedCuisinesContext);
  const { selectedCuisines, setSelectedCuisines } = userSelected;
  let [a] = useState();

  useEffect(() => {
    a = restaurants.filter((r) => {
      return r.info.cuisines.some((v) => selectedCuisines.includes(v));
    });
    setFilteredRestaurants(a);
  }, [selectedCuisines]);

  // todos -> making this function's working properly. applying all the filters onto web page and showing selected cuisines onto web page. Building a Product Page and Cart Functionality. Thats it

  function addCuisines(menu) {
    if (selectedCuisines.includes(menu)) {
      const menuTobeRemoved = selectedCuisines.indexOf(menu);
      for (let i = menuTobeRemoved; i < selectedCuisines.length - 1; i++) {
        selectedCuisines[i] = selectedCuisines[i + 1];
      }
      selectedCuisines.length--;

      setSelectedCuisines([...selectedCuisines]);
      return;
    } else {
      setSelectedCuisines(Array(...selectedCuisines, menu));
    }
  }
  // getting all cuisines
  let allCuisines;
  const handleCuisines = () => {
    allCuisines = restaurants.flatMap((restaurant) => {
      return restaurant.info.cuisines;
    });
    allCuisines = [...new Set(allCuisines)];
    // setAllMenu(allCuisines);
  };
  handleCuisines();
  // checking if modal is opened or not
  if (!isMenuOpen) return;
  return (
    <>
      <div
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          backdropFilter: "blur(3px)",
          zIndex: "5",
        }}
      >
        <span
          style={{
            height: "70px",
            width: "70px",
            fontSize: "50px",
            color: "red",
            backgroundColor: "white",
            cursor: "pointer",
          }}
          onClick={() => {
            dispatch(toggleMenu(false));
            if (selectedCuisines.length === 0)
              setFilteredRestaurants(restaurants);
          }}
        >
          &times;
        </span>
      </div>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "70%",
          height: "70%",
          backgroundColor: "white",
          padding: "6rem",
          borderRadius: "5px",
          boxShadow: "0 3rem 5rem rgba(0, 0, 0, 0.3)",
          zIndex: "100",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {allCuisines.map((menu, index) => (
          <CuisineCheckbox
            menu={menu}
            index={index}
            key={index}
            addCuisines={addCuisines}
            selectedCuisines={selectedCuisines}
          />
        ))}
      </div>
      <button className="btn btn-outline-success"> Apply </button>
    </>
  );
};

export default Cuisines;
