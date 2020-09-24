export default {
  // Disable Nuxt Telemetry prompt
  telemetry: false,

  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'hisan.me',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Noto+Sans',
      },
    ],
    htmlAttrs: {
      // class: ['has-navbar-fixed-top'],
    },
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['~/assets/scss/base.scss'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/register-components',
    { src: '~/plugins/vue-particles.js', ssr: false },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: false,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://composition-api.nuxtjs.org/
    '@nuxtjs/composition-api',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://github.com/nuxt-community/fontawesome-module
    '@nuxtjs/fontawesome',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/buefy
    'nuxt-buefy',
    // https://github.com/nuxt-community/i18n-module
    'nuxt-i18n',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extractCSS: true,
  },

  // Trick for composition api
  generate: {
    interval: 2000,
  },

  // Router Configuration
  router: {
    mode: 'hash',
    linkActiveClass: 'is-active',
    linkExactActiveClass: 'is-active',
  },

  // Internationalization
  i18n: {
    strategy: 'prefix',
    seo: false,
    lazy: true,
    langDir: 'locales/',
    locales: [
      {
        name: 'English',
        code: 'en',
        iso: 'en-US',
        file: 'en.js',
      },
      {
        name: 'Português',
        code: 'pt',
        iso: 'pt-BR',
        file: 'pt.js',
      },
    ],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
    },
  },

  // Font Awesome Configuration
  fontawesome: {
    component: 'Fa',
    suffix: true,
    icons: {
      solid: ['faGlobeAmericas'],
    },
  },

  loadingIndicator: {
    name: 'folding-cube',
    color: '#fff',
    background: '#2980b9',
  },

  loading: { color: '#fff' },

  buefy: {
    materialDesignIcons: false,
    defaultIconPack: 'fa',
  },
}
