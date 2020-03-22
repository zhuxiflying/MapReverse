import React from "react";
import MapIcon from "./mapIcon";
import { scaleQuantile } from "d3-scale";
import { getDataDomain } from "../utils/dataUtils";
import "../css/mapContainer.css";

const mapIconContainer = ({ data }) => {
  const domain = getDataDomain(data);
  const range = ["#feebe2", "#fbb4b9", "#f768a1", "#ae017e"];
  const quantile = scaleQuantile()
    .domain(domain)
    .range(range);

  return (
    <div className="icon-container">
      {data.map(match => (
        <MapIcon key={match.Id} data={match} scale={quantile} />
      ))}
    </div>
  );
};

export default mapIconContainer;
