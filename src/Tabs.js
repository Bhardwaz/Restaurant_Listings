import React from "react";
import { delivery, dining, nightLife, deliveryClicked } from "./utils/mockdata";
const Tabs = () => {
  return (
    <div className="container mt-3">
      <div className="tabs">
        <div className="tabs-alignment">
          <span className="tabName">
            <img
              className="tabName tabImage"
              src={deliveryClicked}
              alt="delivery"
            />
          </span>

          <h4 className=""> Delivery</h4>
        </div>
        <div className="tabs-alignment">
          <span className="tabName">
            <img className="tabName tabImage" src={dining} alt="delivery" />
          </span>

          <h4 className=""> Dining Out </h4>
        </div>
        <div className="tabs-alignment">
          <span className="tabName">
            <img className="tabName tabImage" src={nightLife} alt="delivery" />
          </span>

          <h4 className=""> Night Life </h4>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
