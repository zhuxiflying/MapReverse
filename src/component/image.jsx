import React from "react";

const Image = ({ url }) => {
  return (
    <div className="originImage">
      <img className="origin-img" src={url} alt="" />
    </div>
  );
};

export default Image;
