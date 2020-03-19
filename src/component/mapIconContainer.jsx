import React from "react";
import MapIcon from "./mapIcon";
import "../css/mapContainer.css";

const mapIconContainer = ({ data }) => {
  return (
    <div className="icon-container">
      {data.map(match => (
        <MapIcon key={match.Id} data={match} />
      ))}
    </div>
  );
};

export default mapIconContainer;
