import React from "react";
import "../css/mapIcon.css";

const BackIcon = ({ onClickBack }) => {
  return (
    <div className="back-icon" onClick={() => onClickBack()}>
      <img className="icon-img" src={"data\\backIcon.png"} alt="" />
    </div>
  );
};

export default BackIcon;
