import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { cloudinary, defaultSideImg } from "../utils/mockdata";
const RestaurantPage = () => {
  const [resData, setResData] = useState();
  const { id } = useParams();

  useEffect(() => {
    getRestaurant();
  }, [id]);

  async function getRestaurant() {
    const response = await fetch(`/api/restaurant/${id}`);
    const restaurantData = await response.json();
    setResData(restaurantData.data[0].data);
  }

  console.log(resData);
  return (
    <>
      <div
        className="container img-container"
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "flex-end",
        }}
      >
        <img
          className="img1"
          src={cloudinary + resData?.cloudinaryImageId}
          alt="image"
          style={{ margin: "30px", onHover: "scale(2)" }}
        />
        <img
          className="img2"
          src={defaultSideImg}
          alt="defaultimg"
          style={{ marginTop: "40px", height: "370px" }}
        />
      </div>

      <div className="container">
        <h2 style={{ marginLeft: "20px", marginTop: "20px" }}>
          {" "}
          {resData?.name}{" "}
          <span style={{ fontSize: "16px" }}> {resData?.locality} </span>
        </h2>
        <span style={{ marginLeft: "20px", marginTop: "20px" }}>
          {" "}
          {resData?.avgRating} Rated ---- {resData?.totalRatingsString}
        </span>
        <p style={{ marginLeft: "20px", marginTop: "20px" }}>
          Minimum Delivery Time -- {resData?.minDeliveryTime} Minutes
        </p>

        <p style={{ marginLeft: "20px", marginTop: "20px" }}>
          Maximum Delivery Time -- {resData?.maxDeliveryTime} Minutes
        </p>
      </div>
      <div className="container">
        <p style={{ marginLeft: "20px", marginTop: "20px" }}>
          {" "}
          {resData?.cuisines.join(", ")}{" "}
        </p>
      </div>
    </>
  );
};

export default RestaurantPage;
