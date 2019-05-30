import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _8c9591fa = () => interopDefault(import('..\\pages\\about\\index.vue' /* webpackChunkName: "pages_about_index" */))
const _856ad888 = () => interopDefault(import('..\\pages\\anime\\index.vue' /* webpackChunkName: "pages_anime_index" */))
const _5032759a = () => interopDefault(import('..\\pages\\error.vue' /* webpackChunkName: "pages_error" */))
const _c3bcad12 = () => interopDefault(import('..\\pages\\fansub\\index.vue' /* webpackChunkName: "pages_fansub_index" */))
const _101da1f0 = () => interopDefault(import('..\\pages\\test.vue' /* webpackChunkName: "pages_test" */))
const _aa6ffcb0 = () => interopDefault(import('..\\pages\\users\\index.vue' /* webpackChunkName: "pages_users_index" */))
const _0a2d9881 = () => interopDefault(import('..\\pages\\watch\\index.vue' /* webpackChunkName: "pages_watch_index" */))
const _6567415b = () => interopDefault(import('..\\pages\\admin\\addEp.vue' /* webpackChunkName: "pages_admin_addEp" */))
const _2ca25524 = () => interopDefault(import('..\\pages\\anime\\_id.vue' /* webpackChunkName: "pages_anime__id" */))
const _bf8b63e0 = () => interopDefault(import('..\\pages\\users\\_id.vue' /* webpackChunkName: "pages_users__id" */))
const _0c6c5764 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

Vue.use(Router)

if (process.client) {
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual'

    // reset scrollRestoration to auto when leaving page, allowing page reload
    // and back-navigation from other pages to use the browser to restore the
    // scrolling position.
    window.addEventListener('beforeunload', () => {
      window.history.scrollRestoration = 'auto'
    })

    // Setting scrollRestoration to manual again when returning to this page.
    window.addEventListener('load', () => {
      window.history.scrollRestoration = 'manual'
    })
  }
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected and scrollToTop is not explicitly disabled
  if (
    to.matched.length < 2 &&
    to.matched.every(r => r.components.default.options.scrollToTop !== false)
  ) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  return new Router({
    mode: 'history',
    base: decodeURI('/'),
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/about",
      component: _8c9591fa,
      name: "about"
    }, {
      path: "/anime",
      component: _856ad888,
      name: "anime"
    }, {
      path: "/error",
      component: _5032759a,
      name: "error"
    }, {
      path: "/fansub",
      component: _c3bcad12,
      name: "fansub"
    }, {
      path: "/test",
      component: _101da1f0,
      name: "test"
    }, {
      path: "/users",
      component: _aa6ffcb0,
      name: "users"
    }, {
      path: "/watch",
      component: _0a2d9881,
      name: "watch"
    }, {
      path: "/admin/addEp",
      component: _6567415b,
      name: "admin-addEp"
    }, {
      path: "/anime/:id",
      component: _2ca25524,
      name: "anime-id"
    }, {
      path: "/users/:id",
      component: _bf8b63e0,
      name: "users-id"
    }, {
      path: "/",
      component: _0c6c5764,
      name: "index"
    }],

    fallback: false
  })
}
