import React from "react";
import "../css/mapIcon.css";

const MapIcon = ({ data, colorScale, selectedEntity, selectedDomain }) => {
  const { entity, Domain } = data;
  const entityKeys = entity === null ? [] : Object.keys(entity);
  const selected =
    entityKeys.includes(selectedEntity) || Domain === selectedDomain;
  // console.log(selected, entityKeys, selectedEntity);
  return (
    <div className={selected ? "icon-div-selected" : "icon-div"}>
      <img className="icon-img" src={"data\\" + data.Image_url} alt="" />
    </div>
  );
};

export default MapIcon;
