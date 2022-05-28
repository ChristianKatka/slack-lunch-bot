import { LounaatInfo } from '../models/lounaat-info.model';

export const parseDataOutOfTheWebsiteLounaatInfo = (
  websiteData: any,
  weekDay: number | undefined
): LounaatInfo | undefined => {
  const menu = websiteData.querySelector('#menu');
  if (!menu || !weekDay) return;

  const today = menu.childNodes[weekDay];

  const todayHeading = (today.childNodes[0].childNodes[0].childNodes[0] as any)
    ?._rawText
    ? (today.childNodes[0].childNodes[0].childNodes[0] as any)?._rawText
    : 'Otsikon haku epäonnistui';

  const todayMenuBody = today.childNodes[1];
  const todayMenu = (
    todayMenuBody.childNodes[0].childNodes[0].childNodes[0].childNodes[0] as any
  )?._rawText
    ? (
        todayMenuBody.childNodes[0].childNodes[0].childNodes[0]
          .childNodes[0] as any
      )?._rawText
    : 'Ruuan haku epäonnistui';

  const todayMenuPrice = (
    todayMenuBody.childNodes[0].childNodes[0].childNodes[0].childNodes[4] as any
  )?._rawText
    ? (
        todayMenuBody.childNodes[0].childNodes[0].childNodes[0]
          .childNodes[4] as any
      )?._rawText
    : 'Ruuan hinnan haku epäonnistui';

  return {
    heading: String(todayHeading).trim(),
    food: String(todayMenu).trim(),
    price: String(todayMenuPrice).trim(),
  };
};
