import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import EntityContainer from "./entityContainer";
import "react-tabs/style/react-tabs.css";
import "../css/analysisTab.css";
import DomainTable from "./domainTable";

const AnalysisTab = ({
  data,
  onClickEntity,
  onCheckDomain,
  handleReset,
  selectedImage,
  selectedEntity,
  selectedDomain,
}) => {
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
          selectedImage={selectedImage}
          selectedEntity={selectedEntity}
          onClickEntity={onClickEntity}
          handleReset={handleReset}
        />
      </TabPanel>
      <TabPanel>
        <DomainTable
          key="domainContainer"
          data={data}
          selectedDomain={selectedDomain}
          onCheckDomain={onCheckDomain}
        />
      </TabPanel>
    </Tabs>
  );
};

export default AnalysisTab;
