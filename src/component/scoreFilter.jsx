import React from "react";
import { BarChart, Bar, Cell, ResponsiveContainer } from "recharts";
import SliderBar from "./sliderBar";
import { scoreHistogram } from "../utils/dataUtils";
import "../css/scoreFilter.css";

const ScoreFilter = props => {
  const { data, scale } = props;
  const histogram = scoreHistogram(data);

  return (
    <div className="scoreFilter-container">
      <ResponsiveContainer height="80%" width="100%">
        <BarChart
          data={histogram}
          barCategoryGap={1}
          margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        >
          <Bar dataKey="frequency">
            {histogram.map((entry, index) => (
              <Cell fill={scale(entry.label)} key={`cell-${index}`} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <SliderBar />
    </div>
  );
};

export default ScoreFilter;
