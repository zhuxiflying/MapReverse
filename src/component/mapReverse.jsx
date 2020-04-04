import React, { Component } from "react";

import axios from "axios";
import MapIconContainer from "./mapIconContainer";
import TimeBarChart from "./timeBarChart";
import { initQuantileScale, getKeyfromDate } from "../utils/dataUtils";
import "../css/app.css";
import ScoreFilter from "./scoreFilter";
import AnalysisTab from "./analysisTab";
import ImagePanel from "./imagePanel";

class MapReverse extends Component {
  state = {
    mapId: this.props.mapId,
    data: [],
    selectedImage: null,
    selectedBar: "",
    selectedEntity: null,
    selectedDomain: null,
    scoresRange: [0, 100]
  };

  async componentDidMount() {
    const { data } = await axios.get(
      "data/" + this.state.mapId + "/matches.json"
    );
    this.setState({ data: data, filtered: data });
  }

  handleIconClick = icon => {
    const selectedImage = this.state.selectedImage === icon ? null : icon;
    this.setState({ selectedImage });
  };

  handleBarClick = bar => {
    const selectedBar = this.state.selectedBar === bar.date ? "" : bar.date;
    this.setState({ selectedBar });
  };

  handleEntityClick = entity => {
    const selectedEntity = entity === this.state.selectedEntity ? null : entity;
    this.setState({ selectedEntity });
  };

  handleDomainOnCheck = domain => {
    const selectedDomain = domain === this.state.selectedDomain ? null : domain;
    this.setState({ selectedDomain });
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
    const {
      data,
      scoresRange,
      selectedImage,
      selectedBar,
      selectedEntity,
      selectedDomain
    } = this.state;

    const { onClickBack } = this.props;

    //filter data by date;
    const filtered =
      selectedBar === "" ? data : this.filterDataByDate(data, selectedBar);

    //filter data by score range;
    const filtered2 = this.filterDataByScore(filtered, scoresRange);

    const quantileScale = initQuantileScale(data);

    return (
      <div className="grid-container">
        <div className="mapContainer">
          <MapIconContainer
            key="iconContainer"
            data={filtered2}
            colorScale={quantileScale}
            selectedImage={selectedImage}
            selectedEntity={selectedEntity}
            selectedDomain={selectedDomain}
            onClickIcon={this.handleIconClick}
            onClickBack={onClickBack}
          />
        </div>
        <div className="imageContainer">
          {selectedImage !== null && (
            <ImagePanel
              selectedImage={selectedImage}
              colorScale={quantileScale}
            />
          )}
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
            selectedImage={selectedImage}
            selectedEntity={selectedEntity}
            onClickEntity={this.handleEntityClick}
            onCheckDomain={this.handleDomainOnCheck}
            selectedDomain={selectedDomain}
          />
        </div>
      </div>
    );
  }
}

export default MapReverse;
