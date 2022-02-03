import { Middleware } from '@nuxt/types';

// export type Middleware = string | ((ctx: Context, cb: Function) => Promise<void> | void)

const auth: Middleware = (ctx) => {
  console.log(ctx);
  console.log('middleware');
};

export default auth;
