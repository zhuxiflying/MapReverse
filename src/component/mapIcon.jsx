import React from "react";
import "../css/mapIcon.css";

const MapIcon = ({
  data,
  colorScale,
  selectedImage,
  selectedEntity,
  selectedDomain,
  onClickIcon
}) => {
  const { entity, Domain } = data;
  const entityKeys = entity === null ? [] : Object.keys(entity);

  const focused = selectedImage !== null && selectedImage.Id === data.Id;
  const selected =
    entityKeys.includes(selectedEntity) || Domain === selectedDomain;
  let style = focused ? "icon-div-focus" : "icon-div";
  if (selected) style += " icon-div-selected";

  return (
    <div className={style} onClick={() => onClickIcon(data)}>
      <img className="icon-img" src={"data\\" + data.Image_url} alt="" />
    </div>
  );
};

export default MapIcon;
