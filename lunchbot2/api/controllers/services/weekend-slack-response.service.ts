import { LounaatInfo } from '../models/lounaat-info.model';

export const slackResponse = (parsedLunchData: LounaatInfo) => ({
  blocks: [
    {
      type: 'section',
      text: {
        type: 'mrkdwn',
        text: '*Heippa! Olen lounas botti ja kerron sulle päivän lounaan* :robot_face:',
      },
    },
    {
      type: 'divider',
    },
    {
      type: 'section',
      text: {
        type: 'plain_text',
        emoji: true,
        text: `Otsikko ${parsedLunchData.heading} Food:${parsedLunchData.food} Price:${parsedLunchData.price}`,
      },
    },
  ],
});
