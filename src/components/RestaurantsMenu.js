import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./RestaurantMenu.css";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategories from "./RestaurantCategories";

const RestaurantsMenu = () => {
  const [opened, setOpened] = useState(1);

  const { id } = useParams();

  const resInfo = useRestaurantMenu(id);

  if (resInfo === null) return;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  return (
    <div className="restaurant-page-container">
      <h3 className="restaurant-name"> {name} </h3>
      <p>
        {" "}
        {cuisines.join(", ")} {costForTwoMessage}{" "}
      </p>

      {categories.map((category, index) => (
        <RestaurantCategories
          data={category?.card?.card}
          key={index}
          showItems={index === opened ? true : false}
          setOpened={() => setOpened(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantsMenu;
