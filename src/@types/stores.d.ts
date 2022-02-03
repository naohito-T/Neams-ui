import '@nuxt/types';
import { Stores } from '@/store/module';

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $stores: Stores;
  }
}
