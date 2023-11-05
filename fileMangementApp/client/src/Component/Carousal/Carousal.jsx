import React from "react";
import "./Carousal.css";
const defaultFunction = () => {};

const Carousal = ({
  imageList = [],
  onDelete = defaultFunction,
  defaultImage = "",
  onSave = defaultFunction,
  circleCount = 5,
}) => {

  const handleOnDelete = () => {
    onDelete(imageList[0]);
  };
  const handleOnSave = () => {
    onSave(imageList[0]);
  };
  return (
    <div className="carousel-box">
      <div className="carousel-container">
          {/* <iframe className="carousel-container" src={imageList[0]?.url} /> */}
      </div>
      <div className="carousel-btn">
        <button onClick={handleOnSave} className="carousel-save-btn">
          Save
        </button>
        <button onClick={handleOnDelete} className="carousel-delete-btn">
          Delete
        </button>
      </div>
    </div>
  );
};
export default Carousal;
