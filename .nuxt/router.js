import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6dbcf23c = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _74c2d5ee = () => interopDefault(import('../pages/projects/haeschcash.vue' /* webpackChunkName: "pages/projects/haeschcash" */))
const _2e4d3cb2 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    path: "/about",
    component: _6dbcf23c,
    name: "about"
  }, {
    path: "/projects/haeschcash",
    component: _74c2d5ee,
    name: "projects-haeschcash"
  }, {
    path: "/",
    component: _2e4d3cb2,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
