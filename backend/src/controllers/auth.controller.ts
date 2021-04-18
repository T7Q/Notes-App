import Koa, { Context } from 'koa';
import Router from 'koa-router';
import User from './../models/User';
import jsonwebtoken from 'jsonwebtoken';
export interface LoginDetails {
  username: string;
  password: string;
}
const routerOpts: Router.IRouterOptions = {
  prefix: '/',
};

const router: Router = new Router(routerOpts);

router.get('/auth', async (ctx: Context) => {
  ctx.body = 'auth';
});

router.get('/login', async (ctx: Context) => {
  ctx.body = 'login';
});

router.post('/login', async (ctx: Context) => {
  let b: LoginDetails = ctx.request.body;
  if (b.username && b.password) {
    console.log(b);
    ctx.body = {
      token: jsonwebtoken.sign(
        {
          data: ctx.request.body,
          exp: Math.floor(Date.now() / 1000) - 60 * 60, // 60 seconds * 60 minutes = 1 hour
        },
        'secret',
      ),
    };
  }
});

export default router;
