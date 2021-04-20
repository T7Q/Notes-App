import Koa, { Context } from 'koa';
import Router from 'koa-router';
import Note from './../models/Note';

const routerOpts: Router.IRouterOptions = {
  prefix: '/notes',
};

const router: Router = new Router(routerOpts);

router.get('/', async (ctx: Context) => {
  const notes = Note.query();
  ctx.body = await notes;
});

router.get('/:id', async (ctx: Context) => {
  ctx.body = 'get specific note';
  const noteId = ctx.params.id;
  const note = Note.query().findById(noteId);
  ctx.body = await note;
});

router.post('/', async (ctx: Context) => {
  ctx.body = 'post notes';
  await Note.query().insert(ctx.request.body);
  ctx.body = 'success';
});

export default router;
