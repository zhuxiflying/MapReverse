import React from "react";

const MapImage = ({ mapId, onClickMap }) => {
  return (
    <div className="map-image-container" onClick={() => onClickMap(mapId)}>
      <img
        className="map-image"
        src={"data\\" + mapId + "\\" + mapId + ".jpg"}
        alt=""
      />
    </div>
  );
};

export default MapImage;
