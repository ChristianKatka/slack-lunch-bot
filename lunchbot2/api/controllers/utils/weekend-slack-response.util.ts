export const weekendSlackResponse = () => ({
  blocks: [
    {
      type: 'section',
      text: {
        type: 'plain_text',
        text: 'Ei tänään oo työpäivä... vai onks mun kello sekasin?',
      },
    },
  ],
});
