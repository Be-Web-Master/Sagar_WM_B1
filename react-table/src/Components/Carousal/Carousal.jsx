import React from "react";

const Carousal = ({imagelList = []}) => {
  return (
    <>
      {imagelList.map((image, index) => {
        return <img src={image} alt="" key={index} />;
      })}
    </>
  );
};

export default Carousal;
