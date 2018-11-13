import Vue from 'vue'
import Router from 'vue-router'

const _037bf51c = () => import('..\\pages\\usuarios\\index.vue' /* webpackChunkName: "pages_usuarios_index" */).then(m => m.default || m)
const _4d017a70 = () => import('..\\pages\\mural\\index.vue' /* webpackChunkName: "pages_mural_index" */).then(m => m.default || m)
const _65d6f5b2 = () => import('..\\pages\\paradas\\index.vue' /* webpackChunkName: "pages_paradas_index" */).then(m => m.default || m)
const _47e9aef0 = () => import('..\\pages\\camiones\\index.vue' /* webpackChunkName: "pages_camiones_index" */).then(m => m.default || m)
const _3aefb0fa = () => import('..\\pages\\rutas\\index.vue' /* webpackChunkName: "pages_rutas_index" */).then(m => m.default || m)
const _0e4915d1 = () => import('..\\pages\\precio\\index.vue' /* webpackChunkName: "pages_precio_index" */).then(m => m.default || m)
const _79810074 = () => import('..\\pages\\Login\\index.vue' /* webpackChunkName: "pages_Login_index" */).then(m => m.default || m)
const _5c09a072 = () => import('..\\pages\\mapa\\index.vue' /* webpackChunkName: "pages_mapa_index" */).then(m => m.default || m)
const _7d7b850a = () => import('..\\pages\\horario\\index.vue' /* webpackChunkName: "pages_horario_index" */).then(m => m.default || m)
const _8524936a = () => import('..\\pages\\boletos\\index.vue' /* webpackChunkName: "pages_boletos_index" */).then(m => m.default || m)
const _6afaece0 = () => import('..\\pages\\lugares\\index.vue' /* webpackChunkName: "pages_lugares_index" */).then(m => m.default || m)
const _1cc2bd46 = () => import('..\\pages\\camiones\\Agregar.vue' /* webpackChunkName: "pages_camiones_Agregar" */).then(m => m.default || m)
const _1c48f64c = () => import('..\\pages\\precio\\editar.vue' /* webpackChunkName: "pages_precio_editar" */).then(m => m.default || m)
const _10b4f755 = () => import('..\\pages\\mural\\agregar.vue' /* webpackChunkName: "pages_mural_agregar" */).then(m => m.default || m)
const _e4e545a6 = () => import('..\\pages\\camiones\\Editar.vue' /* webpackChunkName: "pages_camiones_Editar" */).then(m => m.default || m)
const _1c9a18e8 = () => import('..\\pages\\usuarios\\create.vue' /* webpackChunkName: "pages_usuarios_create" */).then(m => m.default || m)
const _9a56d3d0 = () => import('..\\pages\\boletos\\agregar.vue' /* webpackChunkName: "pages_boletos_agregar" */).then(m => m.default || m)
const _31ee7b6d = () => import('..\\pages\\lugares\\agregar.vue' /* webpackChunkName: "pages_lugares_agregar" */).then(m => m.default || m)
const _afb1daee = () => import('..\\pages\\lugares\\tipolugar.vue' /* webpackChunkName: "pages_lugares_tipolugar" */).then(m => m.default || m)
const _36eb71b6 = () => import('..\\pages\\paradas\\editar.vue' /* webpackChunkName: "pages_paradas_editar" */).then(m => m.default || m)
const _53975c8c = () => import('..\\pages\\boletos\\tipoboleto.vue' /* webpackChunkName: "pages_boletos_tipoboleto" */).then(m => m.default || m)
const _3a562c1e = () => import('..\\pages\\precio\\agregar.vue' /* webpackChunkName: "pages_precio_agregar" */).then(m => m.default || m)
const _74031df4 = () => import('..\\pages\\paradas\\agregar.vue' /* webpackChunkName: "pages_paradas_agregar" */).then(m => m.default || m)
const _f7147f7a = () => import('..\\pages\\rutas\\editar.vue' /* webpackChunkName: "pages_rutas_editar" */).then(m => m.default || m)
const _e98290c0 = () => import('..\\pages\\horario\\agregartour.vue' /* webpackChunkName: "pages_horario_agregartour" */).then(m => m.default || m)
const _b1564072 = () => import('..\\pages\\boletos\\tipoboletoeditar.vue' /* webpackChunkName: "pages_boletos_tipoboletoeditar" */).then(m => m.default || m)
const _507abdf2 = () => import('..\\pages\\rutas\\agregar.vue' /* webpackChunkName: "pages_rutas_agregar" */).then(m => m.default || m)
const _13a41148 = () => import('..\\pages\\horario\\agregar.vue' /* webpackChunkName: "pages_horario_agregar" */).then(m => m.default || m)
const _2b9b7566 = () => import('..\\pages\\lugares\\tipolugaragregar.vue' /* webpackChunkName: "pages_lugares_tipolugaragregar" */).then(m => m.default || m)
const _904f2f96 = () => import('..\\pages\\mural\\editar.vue' /* webpackChunkName: "pages_mural_editar" */).then(m => m.default || m)
const _1db33d57 = () => import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */).then(m => m.default || m)

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
			component: _037bf51c,
			name: "usuarios"
		},
		{
			path: "/mural",
			component: _4d017a70,
			name: "mural"
		},
		{
			path: "/paradas",
			component: _65d6f5b2,
			name: "paradas"
		},
		{
			path: "/camiones",
			component: _47e9aef0,
			name: "camiones"
		},
		{
			path: "/rutas",
			component: _3aefb0fa,
			name: "rutas"
		},
		{
			path: "/precio",
			component: _0e4915d1,
			name: "precio"
		},
		{
			path: "/Login",
			component: _79810074,
			name: "Login"
		},
		{
			path: "/mapa",
			component: _5c09a072,
			name: "mapa"
		},
		{
			path: "/horario",
			component: _7d7b850a,
			name: "horario"
		},
		{
			path: "/boletos",
			component: _8524936a,
			name: "boletos"
		},
		{
			path: "/lugares",
			component: _6afaece0,
			name: "lugares"
		},
		{
			path: "/camiones/Agregar",
			component: _1cc2bd46,
			name: "camiones-Agregar"
		},
		{
			path: "/precio/editar",
			component: _1c48f64c,
			name: "precio-editar"
		},
		{
			path: "/mural/agregar",
			component: _10b4f755,
			name: "mural-agregar"
		},
		{
			path: "/camiones/Editar",
			component: _e4e545a6,
			name: "camiones-Editar"
		},
		{
			path: "/usuarios/create",
			component: _1c9a18e8,
			name: "usuarios-create"
		},
		{
			path: "/boletos/agregar",
			component: _9a56d3d0,
			name: "boletos-agregar"
		},
		{
			path: "/lugares/agregar",
			component: _31ee7b6d,
			name: "lugares-agregar"
		},
		{
			path: "/lugares/tipolugar",
			component: _afb1daee,
			name: "lugares-tipolugar"
		},
		{
			path: "/paradas/editar",
			component: _36eb71b6,
			name: "paradas-editar"
		},
		{
			path: "/boletos/tipoboleto",
			component: _53975c8c,
			name: "boletos-tipoboleto"
		},
		{
			path: "/precio/agregar",
			component: _3a562c1e,
			name: "precio-agregar"
		},
		{
			path: "/paradas/agregar",
			component: _74031df4,
			name: "paradas-agregar"
		},
		{
			path: "/rutas/editar",
			component: _f7147f7a,
			name: "rutas-editar"
		},
		{
			path: "/horario/agregartour",
			component: _e98290c0,
			name: "horario-agregartour"
		},
		{
			path: "/boletos/tipoboletoeditar",
			component: _b1564072,
			name: "boletos-tipoboletoeditar"
		},
		{
			path: "/rutas/agregar",
			component: _507abdf2,
			name: "rutas-agregar"
		},
		{
			path: "/horario/agregar",
			component: _13a41148,
			name: "horario-agregar"
		},
		{
			path: "/lugares/tipolugaragregar",
			component: _2b9b7566,
			name: "lugares-tipolugaragregar"
		},
		{
			path: "/mural/editar",
			component: _904f2f96,
			name: "mural-editar"
		},
		{
			path: "/",
			component: _1db33d57,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
