import React, { Component } from "react";
import axios from "axios";
import MapIconContainer from "./component/mapIconContainer";
import TimeBarChart from "./component/timeBarChart";
import EntityContainer from "./component/entityContainer";
import { initQuantileScale, getKeyfromDate } from "./utils/dataUtils";
import "./css/app.css";
import ScoreFilter from "./component/scoreFilter";

class App extends Component {
  state = {
    data: [],
    selectedBar: "",
    selectedEntity: "",
    scoresRange: [0, 100]
  };

  async componentDidMount() {
    const { data } = await axios.get("data/test20/matches.json");
    this.setState({ data: data, filtered: data });
  }

  handleBarClick = bar => {
    const selectedBar = this.state.selectedBar === bar.date ? "" : bar.date;
    this.setState({ selectedBar });
  };

  handleEntityClick = entity => {
    const selectedEntity = entity === this.state.selectedEntity ? "" : entity;
    this.setState({ selectedEntity });
  };

  handleSilderChange = scoresRange => {
    this.setState({ scoresRange });
  };

  filterDataByDate = (maps, barDate) => {
    const filtered = maps.filter(element => {
      const { Crawl_Date } = element;
      const key = getKeyfromDate(Crawl_Date);
      return key === barDate;
    });
    return filtered;
  };

  filterDataByEntity = (maps, entity) => {
    const filtered = maps.filter(element => {
      const entities = element.entity;
      const entityKeys = entities === null ? [] : Object.keys(entities);
      return entityKeys.includes(entity);
    });
    return filtered;
  };

  filterDataByScore = (maps, scoresRange) => {
    const filtered = maps.filter(element => {
      const score = element.Score;
      return score >= scoresRange[0] && score <= scoresRange[1];
    });
    return filtered;
  };

  render() {
    const { data, scoresRange, selectedBar, selectedEntity } = this.state;
    const filtered =
      selectedBar === "" ? data : this.filterDataByDate(data, selectedBar);

    const filtered2 = this.filterDataByScore(filtered, scoresRange);

    const filtered3 =
      selectedEntity === ""
        ? filtered2
        : this.filterDataByEntity(filtered2, selectedEntity);

    const quantileScale = initQuantileScale(data);

    return (
      <div className="grid-container">
        <MapIconContainer
          key="iconContainer"
          data={filtered3}
          scale={quantileScale}
        />
        <ScoreFilter
          data={data}
          colorScale={quantileScale}
          scoresRange={scoresRange}
          handleChange={this.handleSilderChange}
        />

        <TimeBarChart
          key="timeBarChart"
          data={data}
          selectedBar={selectedBar}
          onClickBar={this.handleBarClick}
          colorScale={quantileScale}
        />
        <EntityContainer
          key="entityContainer"
          data={filtered2}
          selectedEntity={selectedEntity}
          onClickEntity={this.handleEntityClick}
        />
      </div>
    );
  }
}

export default App;
