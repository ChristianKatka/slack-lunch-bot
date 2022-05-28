import { Context, Next } from 'koa';
import { LINKS_LOUNAAT_INFO } from './constants';
import { getHTMLforGivenWebsite } from './services/get-html-of-given-website.service';
import { slackResponse } from './services/slack-response.service';
import { getTodaysDayOfTheWeek } from './utils/get-todays-day-of-the-week.util';
import { parseDataOutOfTheWebsiteLounaatInfo } from './utils/parse-data-out-of-the-website-lounaat-info.util';

export const getLunchMenu = async (ctx: Context, next: Next) => {
  LINKS_LOUNAAT_INFO;
  const randomRestaurantLink =
    LINKS_LOUNAAT_INFO[Math.floor(Math.random() * LINKS_LOUNAAT_INFO.length)];

  const websiteData = await getHTMLforGivenWebsite(
    'https://www.lounaat.info/lounas/hox-city/jyvaskyla'
  );
  const weekDay = getTodaysDayOfTheWeek();
  if (!weekDay) {
    ctx.response.body = weekEndSlackResponse() {
      blocks: [
        {
          type: 'section',
          text: {
            type: 'plain_text',
            text: 'Ei tänään oo työpäivä... vai onks mun kello sekasin?',
          },
        },
      ],
    };
  }

  const parsedLunchData = parseDataOutOfTheWebsiteLounaatInfo(websiteData);
  if (!parsedLunchData) return;

  slackResponse(parsedLunchData);

  await next();
};
