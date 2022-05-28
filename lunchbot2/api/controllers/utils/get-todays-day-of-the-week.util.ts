export const getTodaysDayOfTheWeek = (): number | undefined => {
  const date = new Date();
  const dayOfTheWeek = date.getDay();

  const isWeekend = dayOfTheWeek < 1 || dayOfTheWeek > 5;

  if (isWeekend) {
    return undefined;
  }
  return dayOfTheWeek;
};
