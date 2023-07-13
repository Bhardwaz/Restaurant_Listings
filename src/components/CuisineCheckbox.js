import React from "react";

const CuisineCheckbox = ({ menu, index, addCuisines, selectedCuisines }) => {
  return (
    <>
      <div
        key={menu}
        className="form-check form-check-inline"
        style={{
          marginBottom: "22px",
          marginRight: "10px",
        }}
      >
        <input
          className="form-check-input"
          type="checkbox"
          id={index}
          checked={selectedCuisines.includes(menu) ? true : false}
          style={{
            height: "25px",
            width: "25px",
          }}
          onChange={() => addCuisines(menu)}
        />
        <label
          htmlFor={index}
          className="form-check-label"
          style={{
            cursor: "pointer",
            fontSize: "16px",
            color: "#333",
            marginLeft: "5px",
            marginTop: "5px",
          }}
        >
          {menu}
        </label>
      </div>
    </>
  );
};

export default CuisineCheckbox;
