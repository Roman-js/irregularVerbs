export const dateCounter = (beginDate: Date, endDate: Date = new Date()) => {
  const oneDay = 24 * 60 * 60 * 1000;
  const firstDate = new Date(beginDate).getTime();
  const secondDate = new Date(endDate).getTime();
  const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));

  return diffDays;
};
