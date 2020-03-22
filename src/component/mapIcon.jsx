import React from "react";
import "../css/mapIcon.css";

const MapIcon = ({ data, scale }) => {
  return (
    <div className="icon-div" style={{ borderBottomColor: scale(data.Score) }}>
      <img className="icon-img" src={"data\\" + data.Image_url} alt="" />
    </div>
  );
};

export default MapIcon;
