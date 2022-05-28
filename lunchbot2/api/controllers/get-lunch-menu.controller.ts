import fetch from 'cross-fetch';
import { Context, Next } from 'koa';
import { parse } from 'node-html-parser';

export const getLunchMenu = async (ctx: Context, next: Next) => {
  const link = 'https://www.lounaat.info/lounas/hox-city/jyvaskyla';

  const res = await fetch(link);
  const body = await res.text();
  const data = parse(body);
  const menu = data.querySelector('#menu');
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

  console.log(firstDayOfTheWeekHeading);
  console.log(firstDayOfTheWeekMenu);
  console.log(firstDayOfTheWeekMenuPrice);

  ctx.response.status = 200;
  ctx.response.body = { key: 'menu' };

  await next();
};
