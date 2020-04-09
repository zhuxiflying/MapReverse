import React from "react";
import "../css/entity.css";

const Entity = ({ entity, scale, onClickEntity, selected, focused }) => {
  const { key, frequency } = entity;

  const style = {
    borderColor: focused ? "#e31a1c" : scale(frequency),
  };

  let styleClass = "entity-div";
  if (selected) {
    styleClass += " entity-div-selected";
  }

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
