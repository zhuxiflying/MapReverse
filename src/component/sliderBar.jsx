import React from "react";
import { Slider, Rail, Handles, Tracks } from "react-compound-slider";
import { Handle } from "./handle";
import { Track } from "./track";
import "../css/sliderBar.css";

const SliderBar = props => {
  const { scoresRange, handleChange } = props;
  console.log(scoresRange);

  return (
    <Slider
      className="silder"
      domain={[0, 100]}
      step={1}
      mode={2}
      values={scoresRange}
      onChange={handleChange}
    >
      <Rail>
        {({ getRailProps }) => <div className="rail" {...getRailProps()} />}
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
