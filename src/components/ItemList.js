import React from "react";
import { cloudinary } from "../utils/mockdata";
const ItemList = ({ items }) => {
  return (
    <div>
      <div className="singleItem">
        {items.map((item) => (
          <div key={item?.card?.info?.id}>
            <img
              className="item-image"
              src={cloudinary + item?.card?.info?.imageId}
              alt=""
            />
            <div>
              <span> {item?.card?.info?.name} </span>
              <span>
                - ₹
                {item?.card?.info?.price
                  ? item?.card?.info?.price / 100
                  : item?.card?.info?.defaultPrice / 100}
              </span>
            </div>
            <p className="nameprice"> {item?.card?.info?.description} </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList;
