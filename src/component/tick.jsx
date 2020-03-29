import React from "react";

export function Tick({ tick, count }) {
  return (
    <div>
      <div
        style={{
          position: "absolute",
          marginTop: 17,
          marginLeft: -0.5,
          width: 1,
          height: 8,
          backgroundColor: "silver",
          left: `${tick.percent}%`
        }}
      />
      <div
        style={{
          position: "absolute",
          marginTop: 25,
          fontSize: 10,
          textAlign: "center",
          marginLeft: `${-(100 / count) / 2}%`,
          width: `${100 / count}%`,
          left: `${tick.percent}%`
        }}
      >
        {tick.value}
      </div>
    </div>
  );
}
