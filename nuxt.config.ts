import { Configuration } from "@nuxt/types"
const isProduction = process.env.NODE_ENV === "production"
export default {
  mode: "spa",
  /*
   ** Headers of the page
   */
  server: {
    port: 9006,
    host: isProduction ? "0.0.0.0" : "localhost"
  },
  head: {
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: []
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: ['assets/main.css'],
  /*
  ** Plugins to load before mounting the App

  */
  plugins: [
    { src: '~/plugins/my-component.js', ssr: false }
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    "bootstrap-vue/nuxt",
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    "@nuxtjs/auth",
    '@nuxtjs/apollo',
    // https://nuxt-community.github.io/nuxt-i18n/
    'nuxt-i18n',
    // 优化图像加载
    // https://www.bazzite.com/docs/nuxt-optimized-images/
    '@bazzite/nuxt-optimized-images',
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  optimizedImages: {
    // 优化的图像类型
    handleImages: ['jpeg', 'png', 'svg', 'webp', 'gif', 'jpg'],
    // 开启优化
    optimizeImages: true
  },
  i18n: {
    locales: [
      {
        code: 'en',
        name: 'English',
        iso: 'en-US'
      },
      {
        code: 'zh',
        name: '简体中文',
        iso: 'zh-CN'
      }
    ],
    defaultLocale: 'zh',
    // 翻译文件
    vueI18n: {
      fallbackLocale: 'zh',
      messages: {
        en: require('./locales/en.json'),
        zh: require('./locales/zh.json')
      }
    },
    // 持久化语言
    detectBrowserLanguage: {
      useCookie: true,
      alwaysRedirect: true,
      cookieKey: 'Ladis_WebSite_I18n'
    },
    // 路由配置
    strategy: 'no_prefix'
  },
  axios: {
    // baseURL: 'http://localhost:9005',
    proxy: true
    // credentials: true
  },
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: "/auth/login",
            method: "post",
            propertyName: "token"
          },
          logout: { url: "/auth/logout", method: "post" },
          user: { url: "/auth/user", method: "post", propertyName: "user" }
        },
        tokenRequired: true,
        tokenType: "bearer"
      }
    },
    redirect: {
      login: "/admin/login",
      logout: "/admin/login",
      //callback: '/admin/edit',
      home: "/admin/"
    }
  },

  // Give apollo module options
  apollo: {
    tokenName: 'ladisServer',
    cookieAttributes: {
      expires: 7,
      path: '/',
      domain: 'example.com',
      secure: false,
    },
    includeNodeModules: true,
    authenticationType: 'Basic',
    defaultOptions: {
      $query: {
        loadingKey: 'loading',
        fetchPolicy: 'cache-and-network',
      },
    },
    clientConfigs: {
      default: {
        // required  
        httpEndpoint: 'http://www.ladishb.com:9006',//isProduction? 'http://www.ladishb.com:9006': 'http://127.0.0.1:9006',
        browserHttpEndpoint: isProduction ? '/admin/graphql' : '/graphql',
        httpLinkOptions: {
          credentials: 'same-origin'
        },
        tokenName: 'apollo-token', // optional
      }
    }
  },

  buildModules: ['@nuxt/typescript-build'],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(_config, _ctx) { },
  },
  //
  router: {
    // base: isProduction ? 'admin/' : '/',
    // middleware: ["auth"]
  }
} as Configuration
