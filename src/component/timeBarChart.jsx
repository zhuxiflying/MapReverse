import React, { Component } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Cell,
  ResponsiveContainer
} from "recharts";

import { aggregateBymonth } from "../utils/dataAggregation";
import "../css/timeBarChart.css";

class TimeBarChart extends Component {
  state = { activeIndex: "" };

  handleBarClick = (data, index) => {
    this.setState({ activeIndex: index });
  };

  //format tick label, only return month for date that is not in Jananary
  tickFormatter = tick => {
    const date = new Date(tick);
    const month = date.getMonth() + 1;
    if (month === 1) return tick;
    return month;
  };

  render() {
    const { data } = this.props;
    const { activeIndex } = this.state;
    const maxBarWidth = 100;
    const aggregation = aggregateBymonth(data);

    return (
      <div className="timeChart-container">
        <ResponsiveContainer height="100%" width="100%">
          <BarChart data={aggregation}>
            <XAxis
              dataKey="date"
              axisLine={false}
              tickFormatter={this.tickFormatter}
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
              fill="red"
              maxBarSize={maxBarWidth}
              onClick={this.handleBarClick}
            >
              {data.map((entry, index) => (
                <Cell
                  cursor="pointer"
                  stroke={index === activeIndex ? "#8884d8" : null}
                  strokeWidth="4"
                  key={`cell-${index}`}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

export default TimeBarChart;
