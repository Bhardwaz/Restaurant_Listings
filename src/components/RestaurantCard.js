import React from "react";
import { cloudinary } from "../utils/mockdata";
const RestaurantCard = ({ payload }) => {
  const { type, data, subtype } = payload;
  const {
    name,
    cuisines,
    cloudinaryImageId,
    avgRating,
    costForTwo,
    deliveryTime,
  } = data;
  return (
    <>
      <div
        className="card border-2 custom-border col-3"
        style={{ width: "25rem", cursor: "pointer" }}
      >
        <div className="restaurantImage">
          <img
            src={cloudinary + cloudinaryImageId}
            className="card-img-top"
            alt="restaurantImage"
          />
        </div>
        <div className="card-body">
          <h6 className="card-title name">{name}</h6>
          <p className="card-text text-success">{avgRating} Star</p>
        </div>
        <div className="card-body marginTop">
          <p className="card-title cuisine">{cuisines.join(", ")}</p>
          <p className="card-text">{costForTwo / 100} Rs. For Two</p>
        </div>
        <h6 className="end margin-Top"> {deliveryTime} Minutes </h6>
      </div>
    </>
  );
};

export const promotedRestaurants = (RestaurantCard) => {
  return (props) => {
    return (
      <>
        <div
          style={{
            position: "relative",
            margin: "12px",
            padding: "2px",
          }}
        >
          <label
            style={{
              backgroundColor: "#313131",
              color: "white",
              position: "absolute",
              display: "inline-block",
              padding: "3px",
              zIndex: "1s",
              borderRadius: "5%",
            }}
          >
            Promoted
          </label>
        </div>
        <RestaurantCard {...props} />
      </>
    );
  };
};

export default RestaurantCard;
