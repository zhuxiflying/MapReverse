import React from "react";
import BackIcon from "./backIcon";
import MapIcon from "./mapIcon";
import "../css/mapContainer.css";

const mapIconContainer = ({
  data,
  colorScale,
  selectedImage,
  selectedEntity,
  selectedDomain,
  onClickIcon,
  onClickBack
}) => {
  return (
    <div className="icon-container">
      <BackIcon onClickBack={onClickBack} />
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
