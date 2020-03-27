import React from "react";
import { aggregateByEntity, initNaturalBreak } from "../utils/dataUtils";
import Entity from "./entity";
import "../css/entityContainer.css";

const EntityContainer = ({ data }) => {
  const entities = aggregateByEntity(data);
  const scale = initNaturalBreak(entities);

  return (
    <div className="entity-container">
      {entities.map(entity => (
        <Entity key={entity.key} entity={entity} scale={scale} />
      ))}
    </div>
  );
};

export default EntityContainer;
