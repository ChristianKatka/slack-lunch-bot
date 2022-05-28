import cors from '@koa/cors';
import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import json from 'koa-json';
import logger from 'koa-logger';
import Router from 'koa-router';
import { getLunchMenu } from './controllers/get-lunch-menu.controller';

const app = new Koa();

// app.use(async ctx => {
//     ctx.body = 'Welcome to the server side';
//   });

app.use(logger());
app.use(json());
app.use(bodyParser());
app.use(cors());

const router = new Router();
router.post('/lunch', getLunchMenu);

app.use(router.routes()).use(router.allowedMethods());

export { app };
