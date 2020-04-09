import React from "react";
import SliderBar from "./sliderBar";
import ScoreHistogram from "./scoreHistogram";
import "../css/scoreFilter.css";

const ScoreFilter = (props) => {
  const { data, colorScale, scoresRange, handleChange, handleReset } = props;

  return (
    <div className="scoreFilter-container" onDoubleClick={handleReset}>
      <ScoreHistogram data={data} colorScale={colorScale}></ScoreHistogram>
      <SliderBar scoresRange={scoresRange} handleChange={handleChange} />
    </div>
  );
};

export default ScoreFilter;
