import React from "react";
import "../css/mapIcon.css";

const OriginIcon = ({ onClickOrigin, mapId }) => {
  return (
    <div className="origin-icon" onClick={() => onClickOrigin()}>
      <img className="icon-img" src={"data\\" + mapId + "\\icon.png"} alt="" />
    </div>
  );
};

export default OriginIcon;
