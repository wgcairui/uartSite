import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _46a05dac = () => interopDefault(import('../pages/admin/index.vue' /* webpackChunkName: "pages/admin/index" */))
const _1561502d = () => interopDefault(import('../pages/admin/index/index.vue' /* webpackChunkName: "pages/admin/index/index" */))
const _14ad1530 = () => interopDefault(import('../pages/admin/index/about.vue' /* webpackChunkName: "pages/admin/index/about" */))
const _c2d3293e = () => interopDefault(import('../pages/admin/index/addAbout.vue' /* webpackChunkName: "pages/admin/index/addAbout" */))
const _258f3e4c = () => interopDefault(import('../pages/admin/index/addBuy.vue' /* webpackChunkName: "pages/admin/index/addBuy" */))
const _0f3ceae8 = () => interopDefault(import('../pages/admin/index/addCase.vue' /* webpackChunkName: "pages/admin/index/addCase" */))
const _4c2c2afe = () => interopDefault(import('../pages/admin/index/addDown.vue' /* webpackChunkName: "pages/admin/index/addDown" */))
const _4a4010af = () => interopDefault(import('../pages/admin/index/addNews.vue' /* webpackChunkName: "pages/admin/index/addNews" */))
const _50fa3273 = () => interopDefault(import('../pages/admin/index/addProblem.vue' /* webpackChunkName: "pages/admin/index/addProblem" */))
const _0c64d67a = () => interopDefault(import('../pages/admin/index/addProduct.vue' /* webpackChunkName: "pages/admin/index/addProduct" */))
const _90777ebe = () => interopDefault(import('../pages/admin/index/buy.vue' /* webpackChunkName: "pages/admin/index/buy" */))
const _5d2cbb55 = () => interopDefault(import('../pages/admin/index/carousel.vue' /* webpackChunkName: "pages/admin/index/carousel" */))
const _7f51a3a5 = () => interopDefault(import('../pages/admin/index/case.vue' /* webpackChunkName: "pages/admin/index/case" */))
const _59c777d2 = () => interopDefault(import('../pages/admin/index/down.vue' /* webpackChunkName: "pages/admin/index/down" */))
const _5d9fac70 = () => interopDefault(import('../pages/admin/index/news.vue' /* webpackChunkName: "pages/admin/index/news" */))
const _2a93d2a0 = () => interopDefault(import('../pages/admin/index/picSource.vue' /* webpackChunkName: "pages/admin/index/picSource" */))
const _4f738dec = () => interopDefault(import('../pages/admin/index/product.vue' /* webpackChunkName: "pages/admin/index/product" */))
const _39b1ec07 = () => interopDefault(import('../pages/admin/index/test.vue' /* webpackChunkName: "pages/admin/index/test" */))
const _549ff8cb = () => interopDefault(import('../pages/case/index.vue' /* webpackChunkName: "pages/case/index" */))
const _b351177e = () => interopDefault(import('../pages/admin/login.vue' /* webpackChunkName: "pages/admin/login" */))
const _d45f4d08 = () => interopDefault(import('../pages/admin/prewive.vue' /* webpackChunkName: "pages/admin/prewive" */))
const _c5e2a2f4 = () => interopDefault(import('../pages/admin/readme.vue' /* webpackChunkName: "pages/admin/readme" */))
const _1972b0fb = () => interopDefault(import('../pages/admin/register.vue' /* webpackChunkName: "pages/admin/register" */))
const _26489c1a = () => interopDefault(import('../pages/case/_id.vue' /* webpackChunkName: "pages/case/_id" */))
const _647ec45d = () => interopDefault(import('../pages/case/_year/_mouth/_id.vue' /* webpackChunkName: "pages/case/_year/_mouth/_id" */))
const _2bcebfea = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/admin",
    component: _46a05dac,
    children: [{
      path: "",
      component: _1561502d,
      name: "admin-index"
    }, {
      path: "about",
      component: _14ad1530,
      name: "admin-index-about"
    }, {
      path: "addAbout",
      component: _c2d3293e,
      name: "admin-index-addAbout"
    }, {
      path: "addBuy",
      component: _258f3e4c,
      name: "admin-index-addBuy"
    }, {
      path: "addCase",
      component: _0f3ceae8,
      name: "admin-index-addCase"
    }, {
      path: "addDown",
      component: _4c2c2afe,
      name: "admin-index-addDown"
    }, {
      path: "addNews",
      component: _4a4010af,
      name: "admin-index-addNews"
    }, {
      path: "addProblem",
      component: _50fa3273,
      name: "admin-index-addProblem"
    }, {
      path: "addProduct",
      component: _0c64d67a,
      name: "admin-index-addProduct"
    }, {
      path: "buy",
      component: _90777ebe,
      name: "admin-index-buy"
    }, {
      path: "carousel",
      component: _5d2cbb55,
      name: "admin-index-carousel"
    }, {
      path: "case",
      component: _7f51a3a5,
      name: "admin-index-case"
    }, {
      path: "down",
      component: _59c777d2,
      name: "admin-index-down"
    }, {
      path: "news",
      component: _5d9fac70,
      name: "admin-index-news"
    }, {
      path: "picSource",
      component: _2a93d2a0,
      name: "admin-index-picSource"
    }, {
      path: "product",
      component: _4f738dec,
      name: "admin-index-product"
    }, {
      path: "test",
      component: _39b1ec07,
      name: "admin-index-test"
    }]
  }, {
    path: "/case",
    component: _549ff8cb,
    name: "case"
  }, {
    path: "/admin/login",
    component: _b351177e,
    name: "admin-login"
  }, {
    path: "/admin/prewive",
    component: _d45f4d08,
    name: "admin-prewive"
  }, {
    path: "/admin/readme",
    component: _c5e2a2f4,
    name: "admin-readme"
  }, {
    path: "/admin/register",
    component: _1972b0fb,
    name: "admin-register"
  }, {
    path: "/case/:id",
    component: _26489c1a,
    name: "case-id"
  }, {
    path: "/case/:year/:mouth?/:id?",
    component: _647ec45d,
    name: "case-year-mouth-id"
  }, {
    path: "/",
    component: _2bcebfea,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
