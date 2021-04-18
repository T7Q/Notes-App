import KoaRouter from 'koa-router';

export default (router: KoaRouter) => {
  router.get('/', async (ctx) => {
    ctx.body = 'homepage';
  });

  router.get('/users', async (ctx) => {
    ctx.body = 'users';
  });

  router.get('/notes', async (ctx) => {
    ctx.body = 'notes';
  });
};
