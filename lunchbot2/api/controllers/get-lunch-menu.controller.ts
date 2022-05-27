import { Context, Next } from 'koa';

export const getLunchMenu = async (ctx: Context, next: Next) => {
  ctx.response.status = 200;
  ctx.response.body = { key: 'jooo' };

  await next();
};
