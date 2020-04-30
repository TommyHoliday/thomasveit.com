import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6dbcf23c = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _058c524c = () => interopDefault(import('../pages/journal.vue' /* webpackChunkName: "pages/journal" */))
const _112e19b5 = () => interopDefault(import('../pages/projects.vue' /* webpackChunkName: "pages/projects" */))
const _b1f26820 = () => interopDefault(import('../pages/project/haeschcash.vue' /* webpackChunkName: "pages/project/haeschcash" */))
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
    path: "/journal",
    component: _058c524c,
    name: "journal"
  }, {
    path: "/projects",
    component: _112e19b5,
    name: "projects"
  }, {
    path: "/project/haeschcash",
    component: _b1f26820,
    name: "project-haeschcash"
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
