import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Cell,
  ResponsiveContainer
} from "recharts";

import { aggregateByMonth, tickFormatter } from "../utils/dataUtils";
import "../css/timeBarChart.css";

const TimeBarChart = props => {
  const { data, selectedBar, onClickBar, colorScale } = props;
  const maxBarWidth = 100;
  const aggregation = aggregateByMonth(data);

  return (
    <div className="timeChart-container">
      <ResponsiveContainer height="100%" width="100%">
        <BarChart
          data={aggregation}
          margin={{ top: 10, right: 0, bottom: 0, left: 0 }}
        >
          <XAxis
            dataKey="date"
            axisLine={false}
            tickFormatter={tickFormatter}
            stroke="black"
          />
          <YAxis stroke="black" tick={{ fontSize: "1rem" }} />
          <Bar
            dataKey="frequency"
            stackId="a"
            maxBarSize={maxBarWidth}
            onClick={onClickBar}
          >
            {aggregation.map((entry, index) => (
              <Cell
                cursor="pointer"
                fill={colorScale(entry.score)}
                stroke={entry.date === selectedBar ? "#8884d8" : null}
                strokeWidth="4"
                key={`cell-${index}`}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TimeBarChart;
