export const getTodaysDayOfTheWeek = (): number | undefined => {
  const date = new Date();
  const dayOfTheWeek = date.getDay();

  const isWeekday = dayOfTheWeek < 1 || dayOfTheWeek > 5;

  if (isWeekday) {
    return undefined;
  }
  return dayOfTheWeek;
};
