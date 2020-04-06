import React from "react";
import { BarChart, Bar, Cell, ResponsiveContainer } from "recharts";
import { scoreHistogram } from "../utils/dataUtils";

const ScoreHistogram = props => {
  const { data, colorScale } = props;
  const histogram = scoreHistogram(data);
  return (
    <ResponsiveContainer height="80%" width="100%">
      <BarChart
        data={histogram}
        barCategoryGap={1}
        margin={{ top: 10, right: 0, bottom: 0, left: 0 }}
      >
        <Bar dataKey="frequency">
          {histogram.map((entry, index) => (
            <Cell fill={colorScale(entry.label)} key={`cell-${index}`} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ScoreHistogram;
