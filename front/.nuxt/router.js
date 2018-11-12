import Vue from 'vue'
import Router from 'vue-router'

const _a56e2aa0 = () => import('../pages/usuarios/index.vue' /* webpackChunkName: "pages/usuarios/index" */).then(m => m.default || m)
const _693e3d00 = () => import('../pages/mural/index.vue' /* webpackChunkName: "pages/mural/index" */).then(m => m.default || m)
const _50d7e281 = () => import('../pages/paradas/index.vue' /* webpackChunkName: "pages/paradas/index" */).then(m => m.default || m)
const _047c0646 = () => import('../pages/boletos/index.vue' /* webpackChunkName: "pages/boletos/index" */).then(m => m.default || m)
const _7bf0e50e = () => import('../pages/rutas/index.vue' /* webpackChunkName: "pages/rutas/index" */).then(m => m.default || m)
const _3e2af5b1 = () => import('../pages/precio/index.vue' /* webpackChunkName: "pages/precio/index" */).then(m => m.default || m)
const _129abe54 = () => import('../pages/Login/index.vue' /* webpackChunkName: "pages/Login/index" */).then(m => m.default || m)
const _762a0630 = () => import('../pages/mapa/index.vue' /* webpackChunkName: "pages/mapa/index" */).then(m => m.default || m)
const _b131cd1c = () => import('../pages/camiones/index.vue' /* webpackChunkName: "pages/camiones/index" */).then(m => m.default || m)
const _b835c882 = () => import('../pages/itinerario/index.vue' /* webpackChunkName: "pages/itinerario/index" */).then(m => m.default || m)
const _09cdc0b0 = () => import('../pages/lugares/index.vue' /* webpackChunkName: "pages/lugares/index" */).then(m => m.default || m)
const _676b735f = () => import('../pages/camiones/Agregar.vue' /* webpackChunkName: "pages/camiones/Agregar" */).then(m => m.default || m)
const _2eb9db28 = () => import('../pages/precio/editar.vue' /* webpackChunkName: "pages/precio/editar" */).then(m => m.default || m)
const _10a9c80d = () => import('../pages/mural/agregar.vue' /* webpackChunkName: "pages/mural/agregar" */).then(m => m.default || m)
const _20ead2e4 = () => import('../pages/itinerario/agregartour.vue' /* webpackChunkName: "pages/itinerario/agregartour" */).then(m => m.default || m)
const _2388b60e = () => import('../pages/usuarios/create.vue' /* webpackChunkName: "pages/usuarios/create" */).then(m => m.default || m)
const _bdedac16 = () => import('../pages/boletos/tipoboletoeditar.vue' /* webpackChunkName: "pages/boletos/tipoboletoeditar" */).then(m => m.default || m)
const _334b1c35 = () => import('../pages/lugares/agregar.vue' /* webpackChunkName: "pages/lugares/agregar" */).then(m => m.default || m)
const _7642bd5e = () => import('../pages/lugares/tipolugar.vue' /* webpackChunkName: "pages/lugares/tipolugar" */).then(m => m.default || m)
const _2b93bf9c = () => import('../pages/paradas/editar.vue' /* webpackChunkName: "pages/paradas/editar" */).then(m => m.default || m)
const _d7bb3d8c = () => import('../pages/boletos/tipoboleto.vue' /* webpackChunkName: "pages/boletos/tipoboleto" */).then(m => m.default || m)
const _0d80d804 = () => import('../pages/precio/agregar.vue' /* webpackChunkName: "pages/precio/agregar" */).then(m => m.default || m)
const _14648cce = () => import('../pages/paradas/agregar.vue' /* webpackChunkName: "pages/paradas/agregar" */).then(m => m.default || m)
const _639b0eaf = () => import('../pages/rutas/editar.vue' /* webpackChunkName: "pages/rutas/editar" */).then(m => m.default || m)
const _4def22e8 = () => import('../pages/itinerario/agregar.vue' /* webpackChunkName: "pages/itinerario/agregar" */).then(m => m.default || m)
const _2f31802a = () => import('../pages/boletos/agregar.vue' /* webpackChunkName: "pages/boletos/agregar" */).then(m => m.default || m)
const _4571bfca = () => import('../pages/rutas/agregar.vue' /* webpackChunkName: "pages/rutas/agregar" */).then(m => m.default || m)
const _1dbd42eb = () => import('../pages/camiones/Editar.vue' /* webpackChunkName: "pages/camiones/Editar" */).then(m => m.default || m)
const _9c5994c4 = () => import('../pages/lugares/tipolugaragregar.vue' /* webpackChunkName: "pages/lugares/tipolugaragregar" */).then(m => m.default || m)
const _022aa07d = () => import('../pages/mural/editar.vue' /* webpackChunkName: "pages/mural/editar" */).then(m => m.default || m)
const _236ae59a = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)

Vue.use(Router)


if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
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


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/usuarios",
			component: _a56e2aa0,
			name: "usuarios"
		},
		{
			path: "/mural",
			component: _693e3d00,
			name: "mural"
		},
		{
			path: "/paradas",
			component: _50d7e281,
			name: "paradas"
		},
		{
			path: "/boletos",
			component: _047c0646,
			name: "boletos"
		},
		{
			path: "/rutas",
			component: _7bf0e50e,
			name: "rutas"
		},
		{
			path: "/precio",
			component: _3e2af5b1,
			name: "precio"
		},
		{
			path: "/Login",
			component: _129abe54,
			name: "Login"
		},
		{
			path: "/mapa",
			component: _762a0630,
			name: "mapa"
		},
		{
			path: "/camiones",
			component: _b131cd1c,
			name: "camiones"
		},
		{
			path: "/itinerario",
			component: _b835c882,
			name: "itinerario"
		},
		{
			path: "/lugares",
			component: _09cdc0b0,
			name: "lugares"
		},
		{
			path: "/camiones/Agregar",
			component: _676b735f,
			name: "camiones-Agregar"
		},
		{
			path: "/precio/editar",
			component: _2eb9db28,
			name: "precio-editar"
		},
		{
			path: "/mural/agregar",
			component: _10a9c80d,
			name: "mural-agregar"
		},
		{
			path: "/itinerario/agregartour",
			component: _20ead2e4,
			name: "itinerario-agregartour"
		},
		{
			path: "/usuarios/create",
			component: _2388b60e,
			name: "usuarios-create"
		},
		{
			path: "/boletos/tipoboletoeditar",
			component: _bdedac16,
			name: "boletos-tipoboletoeditar"
		},
		{
			path: "/lugares/agregar",
			component: _334b1c35,
			name: "lugares-agregar"
		},
		{
			path: "/lugares/tipolugar",
			component: _7642bd5e,
			name: "lugares-tipolugar"
		},
		{
			path: "/paradas/editar",
			component: _2b93bf9c,
			name: "paradas-editar"
		},
		{
			path: "/boletos/tipoboleto",
			component: _d7bb3d8c,
			name: "boletos-tipoboleto"
		},
		{
			path: "/precio/agregar",
			component: _0d80d804,
			name: "precio-agregar"
		},
		{
			path: "/paradas/agregar",
			component: _14648cce,
			name: "paradas-agregar"
		},
		{
			path: "/rutas/editar",
			component: _639b0eaf,
			name: "rutas-editar"
		},
		{
			path: "/itinerario/agregar",
			component: _4def22e8,
			name: "itinerario-agregar"
		},
		{
			path: "/boletos/agregar",
			component: _2f31802a,
			name: "boletos-agregar"
		},
		{
			path: "/rutas/agregar",
			component: _4571bfca,
			name: "rutas-agregar"
		},
		{
			path: "/camiones/Editar",
			component: _1dbd42eb,
			name: "camiones-Editar"
		},
		{
			path: "/lugares/tipolugaragregar",
			component: _9c5994c4,
			name: "lugares-tipolugaragregar"
		},
		{
			path: "/mural/editar",
			component: _022aa07d,
			name: "mural-editar"
		},
		{
			path: "/",
			component: _236ae59a,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
