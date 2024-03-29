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
    link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
    htmlAttrs: {
      class: 'has-fixed-navbar',
    },
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['~/assets/sass/index.sass'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['~/plugins/register-components'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: false,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',

    // https://composition-api.nuxtjs.org/
    '@nuxtjs/composition-api/module',

    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',

    // https://github.com/nuxt-community/i18n-module
    'nuxt-i18n',

    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',

    // https://github.com/nuxt-community/fontawesome-module
    '@nuxtjs/fontawesome',

    'nuxt-webfontloader'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extractCSS: true,
    babel: {
      plugins: [['@babel/plugin-proposal-private-methods', { loose: true }]],
    }
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
      brands: ['faAmazon'],
      solid: ['faCircleNotch', 'faCube', 'faGlobeAmericas'],
    },
  },

  // Webfont
  webfontloader: {
    google: {
      families: [
        'Open Sans:400,700',
        'Poppins:400,500,700',
        'Roboto:400,700,900',
        'Pinyon Script:400',
      ],
    },
  },

  loadingIndicator: {
    name: 'folding-cube',
    color: '#fff',
    background: '#2980b9',
  },

  loading: { color: '#3273dc' },

  // TailwindCSS Build config
  tailwindcss: {
    jit: true
  }
}
