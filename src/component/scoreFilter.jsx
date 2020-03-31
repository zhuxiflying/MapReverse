import React from "react";
import SliderBar from "./sliderBar";
import ScoreHistogram from "./scoreHistogram";
import "../css/scoreFilter.css";

const ScoreFilter = props => {
  const { data, colorScale, scoresRange, handleChange } = props;

  return (
    <div className="scoreFilter-container">
      <ScoreHistogram data={data} colorScale={colorScale}></ScoreHistogram>
      <SliderBar scoresRange={scoresRange} handleChange={handleChange} />
    </div>
  );
};

export default ScoreFilter;
