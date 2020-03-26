import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Cell,
  ResponsiveContainer
} from "recharts";

import { aggregateBymonth, tickFormatter } from "../utils/dataUtils";
import "../css/timeBarChart.css";

const TimeBarChart = props => {
  const { data, selectedBar, onClickBar, scale } = props;
  const maxBarWidth = 100;
  const aggregation = aggregateBymonth(data);

  return (
    <div className="timeChart-container">
      <ResponsiveContainer height="100%" width="100%">
        <BarChart data={aggregation}>
          <XAxis
            dataKey="date"
            axisLine={false}
            tickFormatter={tickFormatter}
          />
          <YAxis
            label={{
              value: "Timeline",
              angle: -90,
              fontSize: 20,
              position: "insideLeft"
            }}
          />
          <Bar
            dataKey="frequency"
            stackId="a"
            maxBarSize={maxBarWidth}
            onClick={onClickBar}
          >
            {aggregation.map((entry, index) => (
              <Cell
                cursor="pointer"
                fill={scale(entry.score)}
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
