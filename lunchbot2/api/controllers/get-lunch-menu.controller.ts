import { Context, Next } from 'koa';
import { LINKS_LOUNAAT_INFO } from './constants';
import { getHTMLforGivenWebsite } from './services/get-html-of-given-website.service';
import { getTodaysDayOfTheWeek } from './utils/get-todays-day-of-the-week.util';
import { parseDataOutOfTheWebsiteLounaatInfo } from './utils/parse-data-out-of-the-website-lounaat-info.util';
import { slackResponse } from './utils/slack-response.util';
import { weekendSlackResponse } from './utils/weekend-slack-response.util';

export const getLunchMenu = async (ctx: Context, next: Next) => {
  LINKS_LOUNAAT_INFO;
  const randomRestaurantLink =
    LINKS_LOUNAAT_INFO[Math.floor(Math.random() * LINKS_LOUNAAT_INFO.length)];

  const websiteData = await getHTMLforGivenWebsite(randomRestaurantLink);
  const weekDay = getTodaysDayOfTheWeek();
  if (!weekDay) {
    ctx.response.body = weekendSlackResponse();
  }

  const parsedLunchData = parseDataOutOfTheWebsiteLounaatInfo(websiteData, weekDay);
  if (!parsedLunchData) return;

  ctx.response.body = slackResponse(parsedLunchData);

  await next();
};
