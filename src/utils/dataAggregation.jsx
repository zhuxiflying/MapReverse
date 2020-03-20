// aggregte data by crawl date with monthly intervals
export function aggregateBymonth(data) {
  const monthCount = {};
  let aggregation = {};

  data.forEach(element => {
    const { Crawl_Date: crawlDate } = element;

    const date = new Date(crawlDate),
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
