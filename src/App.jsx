import React, { Component } from "react";
import MapReverse from "./component/mapReverse";
import MapGallery from "./component/mapGallery";

class App extends Component {
  state = { mapId: "test20" };

  handleBackClick = () => {
    this.setState({ mapId: null });
  };

  render() {
    return this.state.mapId === null ? (
      <MapGallery />
    ) : (
      <MapReverse mapId={this.state.mapId} onClickBack={this.handleBackClick} />
    );
  }
}

export default App;
