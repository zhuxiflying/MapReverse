import { scaleQuantile, scaleThreshold } from "d3-scale";
import { ckmeans } from "simple-statistics";

//count the frequency of entities
export function aggregateByEntity(data) {
  let entities = {};
  let entityList = [];

  //summarize the frequency by entity names
  data.forEach((element) => {
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
    frequency: value,
  }));

  //sort the entity with frequency
  entityList.sort((a, b) => b.frequency - a.frequency);
  return entityList;
}

//count the frequency of the domains
export function aggregateByDomain(data) {
  let domainCount = {};
  let domains = [];

  data.forEach((element) => {
    const { Domain, Crawl_Date } = element;
    const date = new Date(Crawl_Date);
    if (!domainCount[Domain]) {
      domainCount[Domain] = [];
      domainCount[Domain][0] = date;
      domainCount[Domain][1] = 1;
    } else {
      if (date < domainCount[Domain][0]) {
        domainCount[Domain][0] = date;
      }
      domainCount[Domain][1]++;
    }
  });

  domains = Object.entries(domainCount).map(([key, value]) => ({
    key,
    frequency: value[1],
    date: toDateString(value[0]),
  }));

  return domains;
}

// aggregte data by crawl date with monthly intervals and sorted order
export function aggregateByMonth(input) {
  let monthCount = {};
  let aggregation = [];
  let data = [...input];
  sortByDate(data);
  data.forEach((element) => {
    const { Crawl_Date, Score } = element;
    const key = getKeyfromDate(Crawl_Date);
    //use object as hash map, the value cantains frequency and total scores;
    if (!monthCount[key]) {
      monthCount[key] = [];
      monthCount[key][0] = 1;
      monthCount[key][1] = Score;
    } else {
      monthCount[key][0]++;
      monthCount[key][1] += Score;
    }
  });

  aggregation = Object.entries(monthCount).map(([key, value]) => ({
    date: key,
    frequency: value[0],
    score: value[1] / value[0],
  }));

  return aggregation;
}

//aggregate scores into histogram
export function scoreHistogram(data) {
  const interval = 2;
  const barNum = 50;

  let foo = [];
  for (var i = 1; i <= barNum; i++) {
    foo.push(i);
  }

  let histogram = {};
  let histogramChart = [];
  data.forEach((element) => {
    const { Score } = element;
    const key = Math.ceil(Score / interval);
    if (!histogram[key]) {
      histogram[key] = 1;
    } else {
      histogram[key]++;
    }
  });

  histogramChart = foo.map((element) => ({
    label: element * interval,
    frequency: histogram[element] || 0,
  }));

  return histogramChart;
}

export function sortByFrequency(data) {
  return data.sort((domain1, domain2) => {
    return domain2.frequency - domain1.frequency;
  });
}

export function sortByDate(data) {
  return data.sort((element1, element2) => {
    const date1 = new Date(element1.Crawl_Date),
      date2 = new Date(element2.Crawl_Date);
    return date1 - date2;
  });
}

//format tick label, only return month for date that is not in Jananary
export function tickFormatter(tick) {
  const date = new Date(tick);
  const month = date.getMonth() + 1;
  if (month === 1) return tick;
  return month;
}

//extract the year and month fields as the key for a date
export function getKeyfromDate(dateStr) {
  const date = new Date(dateStr),
    month = date.getMonth() + 1;
  return date.getFullYear() + "-" + month;
}

//extract the year and month fields as the key for a date
export function toDateString(date) {
  const year = date.getFullYear(),
    month = date.getMonth() + 1,
    day = date.getDate() + 1;
  return year + "-" + month + "-" + day;
}

//initial color scale
export function initQuantileScale(data) {
  const domain = data.map((item) => item.Score).sort((a, b) => a - b);
  const range = ["#feebe2", "#fbb4b9", "#f768a1", "#ae017e"];
  const quantileScale = scaleQuantile().domain(domain).range(range);
  return quantileScale;
}

//initial color scale
export function initNaturalBreak(data) {
  if (data.length === 0) return null;
  // const range = ["#fed976", "#feb24c", "#fd8d3c", "#fc4e2a"];
  const range = ["#bdc9e1", "#67a9cf", "#1c9099", "#016c59"];
  // const range = ["#6baed6", "#4292c6", "#2171b5", "#084594"];

  const domain = data.map((item) => item.frequency);
  //implment jenks natural breaks by ckmeans, #clusters = #thresholds +1;
  const domainClass = ckmeans(domain, range.length);
  const thresholds = domainClass
    .map((element) => {
      return Math.max(...element);
    })
    .slice(0, -1);

  const scale = scaleThreshold().domain(thresholds).range(range);
  return scale;
}
