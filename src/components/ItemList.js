import React from "react";
import { cloudinary } from "../utils/mockdata";
import { useDispatch, useSelector } from "react-redux";
import store from "../reduxStore/store";
import { addToCart } from "../reduxStore/cartSlice";
const ItemList = ({ items }) => {
  const addToCart = useSelector((store) => store.cart);

  const dispatch = useDispatch();

  console.log(addToCart, "line 8");
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
            <button
              className="item-add-btn"
              onClick={() => {
                dispatch(addToCart(item));
              }}
            >
              {" "}
              Add +
            </button>
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
