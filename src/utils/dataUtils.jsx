// import { scaleLinear } from "d3-scale";

// aggregte data by crawl date with monthly intervals
export function aggregateBymonth(data) {
  const monthCount = {};
  let aggregation = {};

  data.forEach(element => {
    const { Crawl_Date } = element;
    const date = new Date(Crawl_Date),
      month = date.getMonth() + 1,
      key = date.getFullYear() + "-" + month;

    if (!monthCount[key]) {
      monthCount[key] = 1;
    }
    monthCount[key]++;
  });
  aggregation = Object.entries(monthCount).map(([key, value]) => ({
    date: key,
    frequency: value
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

export function getDataDomain(data) {
  // const range = ["#eff3ff", "#bdd7e7", "#6baed6", "#3182bd", "#08519c"];
  const scores = data.map(item => item.Score).sort();
  return scores;
}
