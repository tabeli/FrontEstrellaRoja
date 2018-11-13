import Vue from 'vue'
import Router from 'vue-router'

const _2a847fe8 = () => import('../pages/usuarios/index.vue' /* webpackChunkName: "pages/usuarios/index" */).then(m => m.default || m)
const _0b651be6 = () => import('../pages/precio/index.vue' /* webpackChunkName: "pages/precio/index" */).then(m => m.default || m)
const _577a0a1b = () => import('../pages/itinerario/index.vue' /* webpackChunkName: "pages/itinerario/index" */).then(m => m.default || m)
const _4256425e = () => import('../pages/horario/index.vue' /* webpackChunkName: "pages/horario/index" */).then(m => m.default || m)
const _14c1259c = () => import('../pages/rutas/index.vue' /* webpackChunkName: "pages/rutas/index" */).then(m => m.default || m)
const _e76d7310 = () => import('../pages/Login/index.vue' /* webpackChunkName: "pages/Login/index" */).then(m => m.default || m)
const _eee544a8 = () => import('../pages/fecha/index.vue' /* webpackChunkName: "pages/fecha/index" */).then(m => m.default || m)
const _450f69a4 = () => import('../pages/mural/index.vue' /* webpackChunkName: "pages/mural/index" */).then(m => m.default || m)
const _7421e7fe = () => import('../pages/boletos/index.vue' /* webpackChunkName: "pages/boletos/index" */).then(m => m.default || m)
const _7973a268 = () => import('../pages/lugares/index.vue' /* webpackChunkName: "pages/lugares/index" */).then(m => m.default || m)
const _03902ce8 = () => import('../pages/mapa/index.vue' /* webpackChunkName: "pages/mapa/index" */).then(m => m.default || m)
const _1904f1a5 = () => import('../pages/paradas/index.vue' /* webpackChunkName: "pages/paradas/index" */).then(m => m.default || m)
const _36482264 = () => import('../pages/camiones/index.vue' /* webpackChunkName: "pages/camiones/index" */).then(m => m.default || m)
const _09c99430 = () => import('../pages/itinerario/agregar.vue' /* webpackChunkName: "pages/itinerario/agregar" */).then(m => m.default || m)
const _4e52519e = () => import('../pages/mural/agregar.vue' /* webpackChunkName: "pages/mural/agregar" */).then(m => m.default || m)
const _34a7e939 = () => import('../pages/fecha/agregar.vue' /* webpackChunkName: "pages/fecha/agregar" */).then(m => m.default || m)
const _6867fc51 = () => import('../pages/boletos/tipoboletoeditar.vue' /* webpackChunkName: "pages/boletos/tipoboletoeditar" */).then(m => m.default || m)
const _d6a2e79c = () => import('../pages/usuarios/create.vue' /* webpackChunkName: "pages/usuarios/create" */).then(m => m.default || m)
const _395ae780 = () => import('../pages/itinerario/agregartour.vue' /* webpackChunkName: "pages/itinerario/agregartour" */).then(m => m.default || m)
const _f4eb3a1c = () => import('../pages/paradas/agregar.vue' /* webpackChunkName: "pages/paradas/agregar" */).then(m => m.default || m)
const _1b0061bb = () => import('../pages/camiones/Agregar.vue' /* webpackChunkName: "pages/camiones/Agregar" */).then(m => m.default || m)
const _8365c64e = () => import('../pages/mural/editar.vue' /* webpackChunkName: "pages/mural/editar" */).then(m => m.default || m)
const _9395aed4 = () => import('../pages/boletos/tipoboleto.vue' /* webpackChunkName: "pages/boletos/tipoboleto" */).then(m => m.default || m)
const _36b4695a = () => import('../pages/precio/agregar.vue' /* webpackChunkName: "pages/precio/agregar" */).then(m => m.default || m)
const _1fbd8b0b = () => import('../pages/rutas/editar.vue' /* webpackChunkName: "pages/rutas/editar" */).then(m => m.default || m)
const _793207fa = () => import('../pages/lugares/tipolugaragregar.vue' /* webpackChunkName: "pages/lugares/tipolugaragregar" */).then(m => m.default || m)
const _b517a182 = () => import('../pages/rutas/agregar.vue' /* webpackChunkName: "pages/rutas/agregar" */).then(m => m.default || m)
const _f8310316 = () => import('../pages/lugares/tipolugar.vue' /* webpackChunkName: "pages/lugares/tipolugar" */).then(m => m.default || m)
const _690894f8 = () => import('../pages/paradas/editar.vue' /* webpackChunkName: "pages/paradas/editar" */).then(m => m.default || m)
const _9e5fbce0 = () => import('../pages/precio/editar.vue' /* webpackChunkName: "pages/precio/editar" */).then(m => m.default || m)
const _1713b51e = () => import('../pages/horario/agregar.vue' /* webpackChunkName: "pages/horario/agregar" */).then(m => m.default || m)
const _bf515364 = () => import('../pages/boletos/agregar.vue' /* webpackChunkName: "pages/boletos/agregar" */).then(m => m.default || m)
const _e239cde2 = () => import('../pages/camiones/Editar.vue' /* webpackChunkName: "pages/camiones/Editar" */).then(m => m.default || m)
const _b71e1b4e = () => import('../pages/lugares/agregar.vue' /* webpackChunkName: "pages/lugares/agregar" */).then(m => m.default || m)
const _041b58be = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)

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
			component: _2a847fe8,
			name: "usuarios"
		},
		{
			path: "/precio",
			component: _0b651be6,
			name: "precio"
		},
		{
			path: "/itinerario",
			component: _577a0a1b,
			name: "itinerario"
		},
		{
			path: "/horario",
			component: _4256425e,
			name: "horario"
		},
		{
			path: "/rutas",
			component: _14c1259c,
			name: "rutas"
		},
		{
			path: "/Login",
			component: _e76d7310,
			name: "Login"
		},
		{
			path: "/fecha",
			component: _eee544a8,
			name: "fecha"
		},
		{
			path: "/mural",
			component: _450f69a4,
			name: "mural"
		},
		{
			path: "/boletos",
			component: _7421e7fe,
			name: "boletos"
		},
		{
			path: "/lugares",
			component: _7973a268,
			name: "lugares"
		},
		{
			path: "/mapa",
			component: _03902ce8,
			name: "mapa"
		},
		{
			path: "/paradas",
			component: _1904f1a5,
			name: "paradas"
		},
		{
			path: "/camiones",
			component: _36482264,
			name: "camiones"
		},
		{
			path: "/itinerario/agregar",
			component: _09c99430,
			name: "itinerario-agregar"
		},
		{
			path: "/mural/agregar",
			component: _4e52519e,
			name: "mural-agregar"
		},
		{
			path: "/fecha/agregar",
			component: _34a7e939,
			name: "fecha-agregar"
		},
		{
			path: "/boletos/tipoboletoeditar",
			component: _6867fc51,
			name: "boletos-tipoboletoeditar"
		},
		{
			path: "/usuarios/create",
			component: _d6a2e79c,
			name: "usuarios-create"
		},
		{
			path: "/itinerario/agregartour",
			component: _395ae780,
			name: "itinerario-agregartour"
		},
		{
			path: "/paradas/agregar",
			component: _f4eb3a1c,
			name: "paradas-agregar"
		},
		{
			path: "/camiones/Agregar",
			component: _1b0061bb,
			name: "camiones-Agregar"
		},
		{
			path: "/mural/editar",
			component: _8365c64e,
			name: "mural-editar"
		},
		{
			path: "/boletos/tipoboleto",
			component: _9395aed4,
			name: "boletos-tipoboleto"
		},
		{
			path: "/precio/agregar",
			component: _36b4695a,
			name: "precio-agregar"
		},
		{
			path: "/rutas/editar",
			component: _1fbd8b0b,
			name: "rutas-editar"
		},
		{
			path: "/lugares/tipolugaragregar",
			component: _793207fa,
			name: "lugares-tipolugaragregar"
		},
		{
			path: "/rutas/agregar",
			component: _b517a182,
			name: "rutas-agregar"
		},
		{
			path: "/lugares/tipolugar",
			component: _f8310316,
			name: "lugares-tipolugar"
		},
		{
			path: "/paradas/editar",
			component: _690894f8,
			name: "paradas-editar"
		},
		{
			path: "/precio/editar",
			component: _9e5fbce0,
			name: "precio-editar"
		},
		{
			path: "/horario/agregar",
			component: _1713b51e,
			name: "horario-agregar"
		},
		{
			path: "/boletos/agregar",
			component: _bf515364,
			name: "boletos-agregar"
		},
		{
			path: "/camiones/Editar",
			component: _e239cde2,
			name: "camiones-Editar"
		},
		{
			path: "/lugares/agregar",
			component: _b71e1b4e,
			name: "lugares-agregar"
		},
		{
			path: "/",
			component: _041b58be,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
