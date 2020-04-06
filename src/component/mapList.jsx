import React from "react";
import MapImage from "./mapImage";

const MapList = ({ onClickMap }) => {
  return (
    <React.Fragment>
      <MapImage mapId="test15" onClickMap={onClickMap} />
      <MapImage mapId="test20" onClickMap={onClickMap} />
      <MapImage mapId="test9" onClickMap={onClickMap} />
      <MapImage mapId="test2" onClickMap={onClickMap} />
      <MapImage mapId="test3" onClickMap={onClickMap} />
      <MapImage mapId="test4" onClickMap={onClickMap} />
      <MapImage mapId="test5" onClickMap={onClickMap} />
      <MapImage mapId="test8" onClickMap={onClickMap} />
    </React.Fragment>
  );
};

export default MapList;
