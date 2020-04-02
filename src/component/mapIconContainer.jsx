import React from "react";
import MapIcon from "./mapIcon";
import "../css/mapContainer.css";

const mapIconContainer = ({ data, colorScale, selectedEntity }) => {
  return (
    <div className="icon-container">
      {data.map(match => {
        return (
          <MapIcon
            key={match.Id}
            data={match}
            colorScale={colorScale}
            selectedEntity={selectedEntity}
          />
        );
      })}
    </div>
  );
};

export default mapIconContainer;
