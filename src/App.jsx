import React, { Component } from "react";
import axios from "axios";
import MapIconContainer from "./component/mapIconContainer";
import TimeBarChart from "./component/timeBarChart";
import "./css/app.css";

class App extends Component {
  state = {
    data: [],
    selectedBar: ""
  };

  async componentDidMount() {
    const { data } = await axios.get("data/test20/matches.json");
    this.setState({ data: data, filtered: data });
  }

  handleBarClick = bar => {
    this.setState({ selectedBar: bar.date });
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
    const { data, selectedBar } = this.state;

    const filtered =
      selectedBar === "" ? data : this.filterDataByDate(data, selectedBar);

    return (
      <div className="grid-container">
        <MapIconContainer key="iconContainer" data={filtered} />
        <TimeBarChart
          key="timeBarChart"
          data={data}
          selectedBar={selectedBar}
          onClickBar={this.handleBarClick}
        />
      </div>
    );
  }
}

export default App;
