import React, { Component } from "react";
import axios from "axios";
import MapIconContainer from "./component/mapIconContainer";
import TimeBarChart from "./component/timeBarChart";
// import EntityContainer from "./component/entityContainer";
import { initQuantileScale, getKeyfromDate } from "./utils/dataUtils";
import "./css/app.css";
import ScoreFilter from "./component/scoreFilter";
import AnalysisTab from "./component/analysisTab";

class App extends Component {
  state = {
    data: [],
    selectedBar: "",
    selectedEntity: null,
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
    const selectedEntity = entity === this.state.selectedEntity ? null : entity;
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

    //filter data by date;
    const filtered =
      selectedBar === "" ? data : this.filterDataByDate(data, selectedBar);

    //filter data by score range;
    const filtered2 = this.filterDataByScore(filtered, scoresRange);

    // //filter data by entity;
    // const filtered3 =
    //   selectedEntity === ""
    //     ? filtered2
    //     : this.filterDataByEntity(filtered2, selectedEntity);

    const quantileScale = initQuantileScale(data);

    return (
      <div className="grid-container">
        <div className="mapContainer">
          <MapIconContainer
            key="iconContainer"
            data={filtered2}
            colorScale={quantileScale}
            selectedEntity={selectedEntity}
          />
        </div>
        <div className="scoreFilter">
          <ScoreFilter
            key="scoreFilter"
            data={data}
            scoresRange={scoresRange}
            colorScale={quantileScale}
            handleChange={this.handleSilderChange}
          />
        </div>
        <div className="timeChart">
          <TimeBarChart
            key="timeBarChart"
            data={data}
            selectedBar={selectedBar}
            colorScale={quantileScale}
            onClickBar={this.handleBarClick}
          />
        </div>
        <div className="analysisTab">
          <AnalysisTab
            key="analysisTab"
            data={filtered2}
            selectedEntity={selectedEntity}
            onClickEntity={this.handleEntityClick}
          />
        </div>
      </div>
    );
  }
}

export default App;
