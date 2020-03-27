import React, { Component } from "react";
import axios from "axios";
import MapIconContainer from "./component/mapIconContainer";
import TimeBarChart from "./component/timeBarChart";
import EntityContainer from "./component/entityContainer";
import { initQuantileScale } from "./utils/dataUtils";
import "./css/app.css";

class App extends Component {
  state = {
    data: [],
    selectedBar: "",
    selectedEntity: []
  };

  async componentDidMount() {
    const { data } = await axios.get("data/test20/matches.json");
    this.setState({ data: data, filtered: data });
  }

  handleBarClick = bar => {
    this.setState({ selectedBar: bar.date });
  };

  bandleEntityClick = entity => {
    const selectedEntity = [...this.state.selectedEntity];
    const index = selectedEntity.indexOf(entity);
    if (index > -1) {
      selectedEntity.splice(index, 1);
    } else {
      selectedEntity.push(entity);
    }
    this.setState({ selectedEntity });
  };

  filterDataByDate = (maps, barDate) => {
    const filteredMap = maps.filter(element => {
      const { Crawl_Date } = element;
      const date2 = new Date(Crawl_Date),
        month = date2.getMonth() + 1,
        key = date2.getFullYear() + "-" + month;
      return key === barDate;
    });
    return filteredMap;
  };

  render() {
    const { data, selectedBar, selectedEntity } = this.state;

    const filtered =
      selectedBar === "" ? data : this.filterDataByDate(data, selectedBar);

    const quantileScale = initQuantileScale(data);

    return (
      <div className="grid-container">
        <MapIconContainer
          key="iconContainer"
          data={filtered}
          scale={quantileScale}
        />
        <TimeBarChart
          key="timeBarChart"
          data={data}
          selectedBar={selectedBar}
          onClickBar={this.handleBarClick}
          scale={quantileScale}
        />
        <EntityContainer
          key="entityContainer"
          data={data}
          selectedEntity={selectedEntity}
          onClickEntity={this.bandleEntityClick}
        />
      </div>
    );
  }
}

export default App;
