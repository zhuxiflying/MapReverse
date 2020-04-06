import React, { Component } from "react";
import MapReverse from "./component/mapReverse";
import MapGallery from "./component/mapGallery";

class App extends Component {
  state = { mapId: null };

  handleBackClick = () => {
    this.setState({ mapId: null });
  };

  handleMapClick = (mapId) => {
    this.setState({ mapId: mapId });
  };

  render() {
    return this.state.mapId === null ? (
      <MapGallery onClickMap={this.handleMapClick} />
    ) : (
      <MapReverse mapId={this.state.mapId} onClickBack={this.handleBackClick} />
    );
  }
}

export default App;
