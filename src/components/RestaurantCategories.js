import React from "react";
import ItemList from "../components/ItemList";
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
        <span>
          {showItems ? (
            <i className="fa-solid fa-angle-up"></i>
          ) : (
            <i className="fa-solid fa-angle-down"></i>
          )}
        </span>
      </div>
      <div>{showItems && <ItemList items={data.itemCards} />}</div>
    </div>
  );
};

export default RestaurantCategories;
