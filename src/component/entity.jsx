import React from "react";
import "../css/entity.css";

const Entity = ({ entity, scale }) => {
  const { key, frequency } = entity;
  return (
    <div className="entity-div" style={{ backgroundColor: scale(frequency) }}>
      {key}
    </div>
  );
};

export default Entity;
