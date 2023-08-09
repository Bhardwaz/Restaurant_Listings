import React from "react";
import { cloudinary } from "../utils/mockdata";
const ItemList = ({ items }) => {
  return (
    <div className="item-container">
      {items.map((item) => (
        <div className="item" key={item?.card?.info?.id}>
          <div className="item-image-container">
            <img
              className="item-image"
              src={cloudinary + item?.card?.info?.imageId}
              alt=""
            />
          </div>

          <div className="item-details-container">
            <div className="namePrice">
              <span> {item?.card?.info?.name} </span>
              <span>
                ₹
                {item?.card?.info?.price
                  ? item?.card?.info?.price / 100
                  : item?.card?.info?.defaultPrice / 100}
              </span>
            </div>
            <p className="item-description">
              {" "}
              {item?.card?.info?.description}{" "}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
