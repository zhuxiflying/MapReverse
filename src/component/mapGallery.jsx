import React, { Component } from "react";
import Logo from "./logo";
import GalleryInfo from "./galleryInfo";
import MapList from "./mapList";
import "../css/mapGallery.css";

class MapGallery extends Component {
  state = {};
  render() {
    const { onClickMap } = this.props;
    return (
      <div className="gallary-container">
        <div className="log-container">
          <Logo />
        </div>
        <div className="map-container">
          <MapList onClickMap={onClickMap} />
        </div>
        <div className="text-container">
          <GalleryInfo />
        </div>
      </div>
    );
  }
}

export default MapGallery;
