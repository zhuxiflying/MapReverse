import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import EntityContainer from "./entityContainer";
import "react-tabs/style/react-tabs.css";
import "../css/analysisTab.css";

const AnalysisTab = ({ data, onClickEntity, selectedEntity }) => {
  return (
    <Tabs className="analysisTab-container">
      <TabList>
        <Tab>Entities</Tab>
        <Tab>Domains</Tab>
      </TabList>
      <TabPanel>
        <EntityContainer
          key="entityContainer"
          data={data}
          selectedEntity={selectedEntity}
          onClickEntity={onClickEntity}
        />
      </TabPanel>
      <TabPanel>
        <EntityContainer
          key="entityContainer"
          data={data}
          selectedEntity={selectedEntity}
          onClickEntity={onClickEntity}
        />
      </TabPanel>
    </Tabs>
  );
};

export default AnalysisTab;
