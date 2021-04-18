import Koa, { Context } from 'koa';
import KoaRouter from 'koa-router';

import Knex from 'knex';

import { Model, ForeignKeyViolationError, ValidationError } from 'objection';

import knexConfig from '../knexfile';
import bodyParser from 'koa-bodyparser';

import noteController from './controllers/note.controller';
import userController from './controllers/user.controller';

// import jwt from 'koa-jwt';

import cors from '@koa/cors';

// Initialize knex.
const knex = Knex(knexConfig.development);

// Bind all Models to a knex instance. If you only have one database in
// your server this is all you have to do. For multi database systems, see
// the Model.bindKnex() method.
Model.knex(knex);

const router = new KoaRouter();
const app: Koa = new Koa();

app.use(bodyParser());
app.use(cors());

app.use(async (ctx: Context, next: () => Promise<any>) => {
  try {
    await next();
  } catch (err) {
    if (err instanceof ValidationError) {
      ctx.status = 400;
      ctx.body = {
        error: 'ValidationError',
        errors: err.data,
      };
    } else if (err instanceof ForeignKeyViolationError) {
      ctx.status = 409;
      ctx.body = {
        error: 'ForeignKeyViolationError',
      };
    } else {
      ctx.status = 500;
      ctx.body = {
        error: 'InternalServerError',
        message: err.message || {},
      };
    }
  }
});

// app.use(
//   jwt({
//     secret: 'secret',
//   }).unless({
//     path: [/^\/public/, '/'],
//   }),
// );

app.use(noteController.routes());
app.use(noteController.allowedMethods());
app.use(userController.routes());
app.use(userController.allowedMethods());
app.use(async (ctx: Koa.Context) => {
  ctx.body = 'Hello world';
});
app.on('error', console.error);

const port = 3005;
app.listen(port, () => {
  console.log('Example app listening at port %s', port);
});

export default app;
