import React, { Component } from "react";
import MapReverse from "./component/mapReverse";
import MapGallery from "./component/mapGallery";

class App extends Component {
  state = { mapId: "" };

  render() {
    return this.state.mapId === null ? (
      <MapGallery />
    ) : (
      <MapReverse mapId="test15" />
    );
  }
}

export default App;
