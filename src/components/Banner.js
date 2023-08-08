import React from "react";
import "./Banner.css";
import {
  banner1Id,
  banner2Id,
  banner3Id,
  banner4Id,
  banner5Id,
} from "../utils/mockdata";
import { useState } from "react";

const Banner = () => {
  const [y, setY] = useState(0);
  const prevSlide = () => {
    if (y <= -4) return;
    setY(y - 1);
  };
  const nextSlide = () => {
    if (y >= 1) return;
    setY(y + 1);
  };
  return (
    <div className="banner-container">
      <div className="heading-container">
        <h3 className="banner-heading"> Best offers for you</h3>
        <div className="banner-scroll-btns">
          <h2
            className={`${y <= -4 ? `btn-disabled` : ""}`}
            onClick={prevSlide}
          >
            {" "}
            &larr;{" "}
          </h2>
          <h2 className={`${y >= 1 ? `btn-disabled` : ""}`} onClick={nextSlide}>
            {" "}
            &rarr;{" "}
          </h2>
        </div>
      </div>
      <div className="banner-images">
        <img
          style={{ transform: `translateX(${425 * y}px)` }}
          src={banner1Id}
          alt="banner1"
        />

        <img
          style={{ transform: `translateX(${425 * y}px)` }}
          src={banner2Id}
          alt="banner2"
        />

        <img
          style={{ transform: `translateX(${425 * y}px)` }}
          src={banner3Id}
          alt="banner3"
        />

        <img
          style={{ transform: `translateX(${425 * y}px)` }}
          src={banner4Id}
          alt="banner4"
        />

        <img
          style={{ transform: `translateX(${425 * y}px)` }}
          src={banner5Id}
          alt="banner5"
        />
      </div>
    </div>
  );
};

export default Banner;
