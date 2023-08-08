import React, { useState } from "react";
import {
  delivery,
  dining,
  nightLife,
  deliveryClicked,
  diningClicked,
  nightLifeClicked,
} from "./utils/mockdata";
const Tabs = () => {
  const [active, setActive] = useState("Delivery");
  function setTab(clicked) {
    setActive(clicked);
  }
  return (
    <div className="container mt-3">
      <div className="tabs">
        <div
          className={`tabs-alignment ${active === "Delivery" ? "active" : " "}`}
          onClick={() => setTab("Delivery")}
        >
          <span className="tabName">
            <img
              className="tabName tabImage"
              src={active === "Delivery" ? deliveryClicked : delivery}
              alt="delivery"
            />
          </span>
          <h4 className=""> Delivery</h4>
        </div>

        <div
          className={`tabs-alignment ${active === "Dining" ? "active" : " "}`}
          onClick={() => setTab("Dining")}
        >
          <span className="tabName">
            <img
              className="tabName tabImage"
              src={active === "Dining" ? diningClicked : dining}
              alt="delivery"
            />
          </span>

          <h4 className=""> Dining Out </h4>
        </div>

        <div
          className={`tabs-alignment ${
            active === "nightLife" ? "active" : " "
          }`}
          onClick={() => setTab("nightLife")}
        >
          <span className="tabName">
            <img
              className="tabName tabImage"
              src={active === "nightLife" ? nightLifeClicked : nightLife}
              alt="delivery"
            />
          </span>
          <h4 className=""> Night Life </h4>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
