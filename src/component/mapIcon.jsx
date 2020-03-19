import React from "react";
import "../css/mapIcon.css";

const MapIcon = ({ data }) => {
  return (
    <div className="icon-div">
      <img className="icon-img" src={"data\\" + data.Image_url} alt="" />
    </div>
  );
};

export default MapIcon;
