import React from "react";
import "../css/entity.css";

const Entity = ({ entity, scale, onClickEntity, selected, focused }) => {
  const { key, frequency } = entity;

  let styleClass = "entity-div";
  if (selected) {
    styleClass += " entity-div-selected";
  } else if (focused) {
    styleClass += " entity-div-focused";
  }

  const style = {
    backgroundColor: scale(frequency)
  };

  return (
    <div
      className={styleClass}
      style={style}
      onClick={() => onClickEntity(key)}
    >
      {key}
    </div>
  );
};

export default Entity;
