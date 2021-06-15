
export default {
  mode: 'universal',
  server: {
    port:  process.env.NODE_ENV !== 'productionm' ? 5000 : 3003, // default: 3000
    host: 'localhost' // default: localhost
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'CrewNew - Agency of Freelancers',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Programming, mobile & web designing and internet marketing top freelancers working in small teams. Agency culture & best tools but freelancers\' prices' || '' },
      // Open Graph
      { property: 'og:title', content: 'CrewNew - Agency of Freelancers' },
      { property: 'og:description', content: 'Programming, mobile & web designing and internet marketing top freelancers working in small teams. Agency culture & best tools but freelancers\' prices.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://crewnew.com' },
      { property: 'og:image', content: 'https://projects.crewnew.com/crewnew/img/og-image.jpg' },
      // Twitter Card
      { name: 'twitter:card', content: 'summary_large_image' },
      // { name: 'twitter:site', content: '@nuxt_js' },
      { name: 'twitter:title', content: 'CrewNew - Agency of Freelancers' },
      { name: 'twitter:description', content: 'Programming, mobile & web designing and internet marketing top freelancers working in small teams. Agency culture & best tools but freelancers\' prices.' },
      { name: 'twitter:image', content: 'https://projects.crewnew.com/crewnew/img/og-image.jpg' },
      { name: 'twitter:image:alt', content: 'CrewNew Logo' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'icon/favicon-32x32.png' },
    ],
    script: [
      { type: 'text/javascript', src: '/scripts/tawk.js', defer: true }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/style.scss',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/googleMaps', ssr: true},
    { src: '~/plugins/directives' },
    { src: '~/plugins/router'}
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    "@nuxtjs/svg"
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    [
      '@nuxtjs/bulma',
    ],
    '@nuxtjs/apollo',
    ['@nuxtjs/google-analytics', {
      id: 'UA-151007059-1' || ''
    }],
  ],
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: 'https://apps.crewnew.com/v1/graphql',
        httpLinkOptions: {
          headers: {
            'x-hasura-admin-secret': 'Zd3L3tExefP5AUyP',
            'content-type': 'application/json'
          }
        }
      }
    }
  },
  router: {
    scrollBehavior (to, from, savedPosition) {
      return { x: 0, y: 0 }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    transpile: [/^vue2-google-maps($|\/)/],
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    extend (config, ctx) {
    }
  }
}
