import React from "react";
import "../css/infoContainer.css";

const ImagePanel = ({ selectedImage, colorScale }) => {
  const {
    OriginImage: imageUrl,
    Score,
    Crawl_Date,
    Link,
    Domain
  } = selectedImage;
  const url =
    imageUrl === undefined ? "data\\noImage.png" : "data\\" + imageUrl;
  return (
    <div className="info-container">
      <div className="originImage">
        <img className="origin-img" src={url} alt="" />
      </div>
      <div className="textPanel">
        <p>
          The original image was first found on <b>{Crawl_Date}</b> at{" "}
          <a href={Link} target="_blank" rel="noopener noreferrer">
            {Domain}
          </a>{" "}
          .
        </p>
        <p>
          The similarity score is{" "}
          <span style={{ color: colorScale(Score), fontWeight: "bold" }}>
            {Score}
          </span>
          .
        </p>
      </div>
    </div>
  );
};

export default ImagePanel;
