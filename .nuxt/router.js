import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _fece6f3e = () => interopDefault(import('../.shopware-pwa/source/pages/account.vue' /* webpackChunkName: "pages/account" */))
const _5a60bff4 = () => interopDefault(import('../.shopware-pwa/source/pages/account/addresses.vue' /* webpackChunkName: "pages/account/addresses" */))
const _57d27f77 = () => interopDefault(import('../.shopware-pwa/source/pages/account/addresses/index.vue' /* webpackChunkName: "pages/account/addresses/index" */))
const _506ed909 = () => interopDefault(import('../.shopware-pwa/source/pages/account/addresses/add/index.vue' /* webpackChunkName: "pages/account/addresses/add/index" */))
const _6a7cec9e = () => interopDefault(import('../.shopware-pwa/source/pages/account/addresses/add/_id.vue' /* webpackChunkName: "pages/account/addresses/add/_id" */))
const _54751afa = () => interopDefault(import('../.shopware-pwa/source/pages/account/orders.vue' /* webpackChunkName: "pages/account/orders" */))
const _5a04cac6 = () => interopDefault(import('../.shopware-pwa/source/pages/account/orders/index.vue' /* webpackChunkName: "pages/account/orders/index" */))
const _4bb2c6ae = () => interopDefault(import('../.shopware-pwa/source/pages/account/orders/_id.vue' /* webpackChunkName: "pages/account/orders/_id" */))
const _597bd8fb = () => interopDefault(import('../.shopware-pwa/source/pages/account/profile.vue' /* webpackChunkName: "pages/account/profile" */))
const _27a0b684 = () => interopDefault(import('../.shopware-pwa/source/pages/account/recover/password.vue' /* webpackChunkName: "pages/account/recover/password" */))
const _a97c737c = () => interopDefault(import('../.shopware-pwa/source/pages/checkout.vue' /* webpackChunkName: "pages/checkout" */))
const _326bf2c6 = () => interopDefault(import('../.shopware-pwa/source/pages/login.vue' /* webpackChunkName: "pages/login" */))
const _7c36079c = () => interopDefault(import('../.shopware-pwa/source/pages/newsletter-subscribe.vue' /* webpackChunkName: "pages/newsletter-subscribe" */))
const _b0889b90 = () => interopDefault(import('../.shopware-pwa/source/pages/order-success.vue' /* webpackChunkName: "pages/order-success" */))
const _66d7f012 = () => interopDefault(import('../.shopware-pwa/source/pages/payment-failure.vue' /* webpackChunkName: "pages/payment-failure" */))
const _236e9dc2 = () => interopDefault(import('../.shopware-pwa/source/pages/register.vue' /* webpackChunkName: "pages/register" */))
const _693b7456 = () => interopDefault(import('../.shopware-pwa/source/pages/reset-password.vue' /* webpackChunkName: "pages/reset-password" */))
const _32e8e6a4 = () => interopDefault(import('../.shopware-pwa/source/pages/search.vue' /* webpackChunkName: "pages/search" */))
const _4273d741 = () => interopDefault(import('../.shopware-pwa/source/pages/wishlist.vue' /* webpackChunkName: "pages/wishlist" */))
const _e1ffd734 = () => interopDefault(import('../.shopware-pwa/source/pages/registration/confirm.vue' /* webpackChunkName: "pages/registration/confirm" */))
const _f068cada = () => interopDefault(import('../.shopware-pwa/source/pages/_.vue' /* webpackChunkName: "pages/_" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/account",
    component: _fece6f3e,
    name: "account",
    children: [{
      path: "addresses",
      component: _5a60bff4,
      children: [{
        path: "",
        component: _57d27f77,
        name: "account-addresses"
      }, {
        path: "add",
        component: _506ed909,
        name: "account-addresses-add"
      }, {
        path: "add/:id",
        component: _6a7cec9e,
        name: "account-addresses-add-id"
      }]
    }, {
      path: "orders",
      component: _54751afa,
      children: [{
        path: "",
        component: _5a04cac6,
        name: "account-orders"
      }, {
        path: ":id",
        component: _4bb2c6ae,
        name: "account-orders-id"
      }]
    }, {
      path: "profile",
      component: _597bd8fb,
      name: "account-profile"
    }, {
      path: "recover/password",
      component: _27a0b684,
      name: "account-recover-password"
    }]
  }, {
    path: "/checkout",
    component: _a97c737c,
    name: "checkout"
  }, {
    path: "/login",
    component: _326bf2c6,
    name: "login"
  }, {
    path: "/newsletter-subscribe",
    component: _7c36079c,
    name: "newsletter-subscribe"
  }, {
    path: "/order-success",
    component: _b0889b90,
    name: "order-success"
  }, {
    path: "/payment-failure",
    component: _66d7f012,
    name: "payment-failure"
  }, {
    path: "/register",
    component: _236e9dc2,
    name: "register"
  }, {
    path: "/reset-password",
    component: _693b7456,
    name: "reset-password"
  }, {
    path: "/search",
    component: _32e8e6a4,
    name: "search"
  }, {
    path: "/wishlist",
    component: _4273d741,
    name: "wishlist"
  }, {
    path: "/registration/confirm",
    component: _e1ffd734,
    name: "registration-confirm"
  }, {
    path: "/*",
    component: _f068cada,
    name: "all"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
