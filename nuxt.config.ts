import { NuxtConfig } from '@nuxt/types';

// これはDockerから渡しているため不要かも。
// const ENV = process.env.NODE_ENV ?? 'local';
// const ENV_FILE_PATH = `./env/decrypt/.env.${EXE_ENV}`;
// require('dotenv').config({ path: ENV_FILE_PATH });

const nuxtConfig: NuxtConfig = {
  ssr: false, // mode: 'spa'このオプションは非推奨になった。代わりにssr: 'false'
  target: 'server',
  srcDir: 'src/',
  globalName: 'neams-ui',
  env: {
    ENV: process.env.NODE_ENV ?? 'local',
    API_KEY: process.env.API_KEY ?? 'none',
    API_URL: process.env.API_URL ?? 'none',
  },
  head: {
    title: 'app',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@/plugins/app'}
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/composition-api/module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: process.env.API_URL,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}

export default nuxtConfig;
