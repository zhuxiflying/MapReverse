import React from "react";
import "../css/infoContainer.css";

const ImagePanel = ({ selectedImage }) => {
  const { OriginImage: data } = selectedImage;
  const imageUrl = data === undefined ? "data\\noImage.png" : "data\\" + data;
  return (
    <div className="info-container">
      <div className="originImage">
        <img className="origin-img" src={imageUrl} alt="" />
      </div>
      <div className="textPanel">
        <h1>Hello World</h1>
      </div>
    </div>
  );
};

export default ImagePanel;
