import { LounaatInfo } from '../models/lounaat-info.model';

export const parseDataOutOfTheWebsiteLounaatInfo = (
  websiteData: any
): LounaatInfo | undefined => {
  const menu = websiteData.querySelector('#menu');
  if (!menu) return;

  const firstDayOfTheWeek = menu.childNodes[1];
  const firstDayOfTheWeekHeading = (
    menu.childNodes[1].childNodes[0].childNodes[0].childNodes[0] as any
  )._rawText;

  const firstDayOfTheWeekMenuBody = firstDayOfTheWeek.childNodes[1];
  const firstDayOfTheWeekMenu = (
    firstDayOfTheWeekMenuBody.childNodes[0].childNodes[0].childNodes[0]
      .childNodes[0] as any
  )._rawText;

  const firstDayOfTheWeekMenuPrice = (
    firstDayOfTheWeekMenuBody.childNodes[0].childNodes[0].childNodes[0]
      .childNodes[4] as any
  )._rawText;

  return {
    heading: String(firstDayOfTheWeekHeading).trim(),
    food: String(firstDayOfTheWeekMenu).trim(),
    price: String(firstDayOfTheWeekMenuPrice).trim(),
  };
};
