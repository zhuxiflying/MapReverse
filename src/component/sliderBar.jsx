import React from "react";
import { Slider, Rail, Handles, Tracks } from "react-compound-slider";
import { Handle } from "./handle";
import { Track } from "./track";

const SliderBar = () => {
  const sliderStyle = {
    // Give the slider some width
    position: "relative",
    width: "100%",
    height: "20%"
  };

  const railStyle = {
    position: "absolute",
    width: "100%",
    height: 10,
    borderRadius: 5,
    backgroundColor: "#dcdcdc"
  };

  return (
    <Slider
      rootStyle={sliderStyle}
      domain={[0, 100]}
      step={1}
      mode={2}
      values={[0, 100]}
    >
      <Rail>
        {({ getRailProps }) => <div style={railStyle} {...getRailProps()} />}
      </Rail>
      <Handles>
        {({ handles, getHandleProps }) => (
          <div className="slider-handles">
            {handles.map(handle => (
              <Handle
                key={handle.id}
                handle={handle}
                getHandleProps={getHandleProps}
              />
            ))}
          </div>
        )}
      </Handles>
      <Tracks left={false} right={false}>
        {({ tracks, getTrackProps }) => (
          <div className="slider-tracks">
            {tracks.map(({ id, source, target }) => (
              <Track
                key={id}
                source={source}
                target={target}
                getTrackProps={getTrackProps}
              />
            ))}
          </div>
        )}
      </Tracks>
    </Slider>
  );
};

export default SliderBar;
