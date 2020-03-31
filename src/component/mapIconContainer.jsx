import React from "react";
import MapIcon from "./mapIcon";
import "../css/mapContainer.css";

const mapIconContainer = ({ data, colorScale }) => {
  return (
    <div className="icon-container">
      {data.map(match => (
        <MapIcon key={match.Id} data={match} colorScale={colorScale} />
      ))}
    </div>
  );
};

export default mapIconContainer;
