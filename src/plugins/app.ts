import { Plugin } from '@nuxt/types';
import { app } from '../lib/app';

// export type Inject = (key: string, value: any) => void
// export type Plugin = (ctx: Context, inject: Inject) => Promise<void> | void
const plugins: Plugin = (_, inject) => {
  inject('app', app);
};

export default plugins;
