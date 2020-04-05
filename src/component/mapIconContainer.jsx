import React from "react";
import BackIcon from "./backIcon";
import MapIcon from "./mapIcon";
import "../css/mapContainer.css";
import OriginIcon from "./originIcon";

const mapIconContainer = ({
  data,
  mapId,
  colorScale,
  selectedImage,
  selectedEntity,
  selectedDomain,
  onClickIcon,
  onClickBack,
  onClickOrigin
}) => {
  return (
    <div className="icon-container">
      <BackIcon onClickBack={onClickBack} />
      <OriginIcon onClickOrigin={onClickOrigin} mapId={mapId} />
      {data.map(match => {
        return (
          <MapIcon
            key={match.Id}
            data={match}
            colorScale={colorScale}
            selectedImage={selectedImage}
            selectedEntity={selectedEntity}
            selectedDomain={selectedDomain}
            onClickIcon={onClickIcon}
          />
        );
      })}
    </div>
  );
};

export default mapIconContainer;
