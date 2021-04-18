import Koa, { Context } from 'koa';
import Router from 'koa-router';
import Note from './../models/Note';

const routerOpts: Router.IRouterOptions = {
  prefix: '/notes',
};

const router: Router = new Router(routerOpts);

router.get('/', async (ctx: Context) => {
  // ctx.body = 'book book book';
  const note = Note.query();
  ctx.body = await note;
});

router.get('/:id', async (ctx: Context) => {
  ctx.body = 'get specific note';
  // const book = await Book.query().insert(ctx.request.body);
  // ctx.body = book;
});

router.post('/', async (ctx: Context) => {
  ctx.body = 'post notes';
  // const book = await Book.query().insert(ctx.request.body);
  // ctx.body = book;
});

export default router;
