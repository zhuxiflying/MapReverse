import React, { Component } from "react";
import axios from "axios";
import MapIconContainer from "./component/mapIconContainer";

class App extends Component {
  state = {
    data: []
  };

  async componentDidMount() {
    const { data } = await axios.get("data/test20/matches.json");
    this.setState({ data });
  }

  render() {
    console.log(this.state.data);
    return <MapIconContainer key="container" data={this.state.data} />;
  }
}

export default App;
