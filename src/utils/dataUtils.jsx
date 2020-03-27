import { scaleQuantile, scaleThreshold } from "d3-scale";
import { ckmeans } from "simple-statistics";

export function aggregateByEntity(data) {
  let entities = {};
  let entityList = [];

  //summarize the frequency by entity names
  data.forEach(element => {
    const { entity } = element;
    if (entity !== null) {
      Object.entries(entity).forEach(([key, value]) => {
        if (key !== "") {
          if (!entities[key]) {
            entities[key] = 1;
          }
          entities[key]++;
        }
      });
    }
  });

  //transform a entity object to an array
  entityList = Object.entries(entities).map(([key, value]) => ({
    key: key,
    frequency: value
  }));

  //sort the entity with frequency
  entityList.sort((a, b) => b.frequency - a.frequency);

  return entityList;
}

// aggregte data by crawl date with monthly intervals
export function aggregateBymonth(data) {
  let monthCount = {};
  let monthScore = {};
  let aggregation = {};

  data.forEach(element => {
    const { Crawl_Date, Score } = element;
    const date = new Date(Crawl_Date),
      month = date.getMonth() + 1,
      key = date.getFullYear() + "-" + month;

    if (!monthCount[key]) {
      monthCount[key] = 1;
    }
    monthCount[key]++;

    if (!monthScore[key]) {
      monthScore[key] = Score;
    }
    monthScore[key] += Score;
  });
  aggregation = Object.entries(monthCount).map(([key, value]) => ({
    date: key,
    frequency: value,
    score: monthScore[key] / value
  }));

  return aggregation;
}

//format tick label, only return month for date that is not in Jananary
export function tickFormatter(tick) {
  const date = new Date(tick);
  const month = date.getMonth() + 1;
  if (month === 1) return tick;
  return month;
}

//initial color scale
export function initQuantileScale(data) {
  const domain = data.map(item => item.Score).sort((a, b) => a - b);
  const range = ["#feebe2", "#fbb4b9", "#f768a1", "#ae017e"];
  const quantileScale = scaleQuantile()
    .domain(domain)
    .range(range);
  return quantileScale;
}

//initial color scale
export function initNaturalBreak(data) {
  if (data.length === 0) return null;
  const range = ["#fecc5c", "#fd8d3c", "#f03b20", "#bd0026"];
  const domain = data.map(item => item.frequency);
  const domainClass = ckmeans(domain, range.length - 1);
  const thresholds = domainClass
    .map(element => {
      return Math.max(...element);
    })
    .slice(0, -1);

  const scale = scaleThreshold()
    .domain(thresholds)
    .range(range);
  return scale;
}
