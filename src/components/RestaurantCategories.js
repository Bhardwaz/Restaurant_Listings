import React from "react";
import ItemList from "./itemList";
const RestaurantCategories = ({ data, showItems, setOpened }) => {
  const handleClick = () => {
    setOpened();
  };
  return (
    <div className="categories-container">
      <div className="categories-header" onClick={handleClick}>
        <span>
          {data.title} ({data?.itemCards?.length}){" "}
        </span>
        <span>⬇️</span>
      </div>
      <div>{showItems && <ItemList items={data.itemCards} />}</div>
    </div>
  );
};

export default RestaurantCategories;
