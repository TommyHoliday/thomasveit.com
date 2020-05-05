import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _058c524c = () => interopDefault(import('../pages/journal.vue' /* webpackChunkName: "pages/journal" */))
const _112e19b5 = () => interopDefault(import('../pages/projects.vue' /* webpackChunkName: "pages/projects" */))
const _54afc1cb = () => interopDefault(import('../pages/project/axa-chatbot.vue' /* webpackChunkName: "pages/project/axa-chatbot" */))
const _b1f26820 = () => interopDefault(import('../pages/project/haeschcash.vue' /* webpackChunkName: "pages/project/haeschcash" */))
const _17be605c = () => interopDefault(import('../pages/project/kicktrip.vue' /* webpackChunkName: "pages/project/kicktrip" */))
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
    path: "/journal",
    component: _058c524c,
    name: "journal"
  }, {
    path: "/projects",
    component: _112e19b5,
    name: "projects"
  }, {
    path: "/project/axa-chatbot",
    component: _54afc1cb,
    name: "project-axa-chatbot"
  }, {
    path: "/project/haeschcash",
    component: _b1f26820,
    name: "project-haeschcash"
  }, {
    path: "/project/kicktrip",
    component: _17be605c,
    name: "project-kicktrip"
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
