export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',
  
  router: {
    base: '/chase-2020/'
  },

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: (titleChunk) => {
      return titleChunk ? `${titleChunk} - Chase Whiteside` : 'Chase Whiteside - Personal Website';
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: 'https://unpkg.com/focus-visible', type: 'text/javascript', charset: 'utf-8'}
    ]
  },

  styleResources: {
    scss: [
      './assets/styles/*.scss',
      './assets/styles/_bitsnpieces.scss'
    ]
  },

  responsiveLoader: {
    format: 'jpg',
    min: 250,
    max: 1000,
    steps: 3,
    adapter: require("responsive-loader/sharp"),
    quality: 75
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    'normalize.css/normalize.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/style-resources',
    '@nuxt/content'
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
