import React from "react";
import "../css/entity.css";

const Entity = ({ entity, scale, onClickEntity, selected }) => {
  const { key, frequency } = entity;
  let borderStyle = "3px solid";
  if (selected) borderStyle += "#8884d8";
  const style = {
    backgroundColor: scale(frequency),
    border: borderStyle
  };
  return (
    <div
      className="entity-div"
      style={style}
      onClick={() => onClickEntity(key)}
    >
      {key}
    </div>
  );
};

export default Entity;
