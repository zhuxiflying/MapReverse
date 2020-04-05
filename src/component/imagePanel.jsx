import React from "react";
import Image from "./image";
import ImageInfo from "./imageInfo";
import "../css/infoContainer.css";

const ImagePanel = ({ selectedImage, colorScale, mapId }) => {
  let url = null;
  if (selectedImage === null) {
    url = "data\\" + mapId + "\\" + mapId + ".jpg";
  } else {
    const { OriginImage: imageUrl } = selectedImage;
    url = imageUrl === undefined ? "data\\noImage.png" : "data\\" + imageUrl;
  }

  return (
    <div className="info-container">
      <Image url={url} />
      <div className="textPanel">
        {selectedImage === null ? (
          <p>This is the input image.</p>
        ) : (
          <ImageInfo selectedImage={selectedImage} colorScale={colorScale} />
        )}
      </div>
    </div>
  );
};

export default ImagePanel;
