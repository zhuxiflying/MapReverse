import React, { Component } from "react";
import axios from "axios";
import MapIconContainer from "./component/mapIconContainer";
import "./css/app.css";

class App extends Component {
  state = {
    data: []
  };

  async componentDidMount() {
    const { data } = await axios.get("data/test20/matches.json");
    this.setState({ data });
  }

  render() {
    return (
      <div className="grid-container">
        <MapIconContainer key="inconContainer" data={this.state.data} />
      </div>
    );
  }
}

export default App;
