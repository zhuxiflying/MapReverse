import React from "react";

const ImageInfo = ({ selectedImage, colorScale }) => {
  const { Score, Crawl_Date, Link, Domain } = selectedImage;
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

export default ImageInfo;
