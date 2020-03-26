import { scaleQuantile } from "d3-scale";

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
export function initColorScale(data) {
  const domain = data.map(item => item.Score).sort();
  const range = ["#feebe2", "#fbb4b9", "#f768a1", "#ae017e"];
  const quantileScale = scaleQuantile()
    .domain(domain)
    .range(range);
  return quantileScale;
}
