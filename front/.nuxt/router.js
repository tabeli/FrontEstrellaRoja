import Vue from 'vue'
import Router from 'vue-router'

const _a1644fd4 = () => import('..\\pages\\usuarios\\index.vue' /* webpackChunkName: "pages_usuarios_index" */).then(m => m.default || m)
const _295112a4 = () => import('..\\pages\\mural\\index.vue' /* webpackChunkName: "pages_mural_index" */).then(m => m.default || m)
const _6fb1ce03 = () => import('..\\pages\\paradas\\index.vue' /* webpackChunkName: "pages_paradas_index" */).then(m => m.default || m)
const _0e14fcd8 = () => import('..\\pages\\camiones\\index.vue' /* webpackChunkName: "pages_camiones_index" */).then(m => m.default || m)
const _ea7cfe54 = () => import('..\\pages\\rutas\\index.vue' /* webpackChunkName: "pages_rutas_index" */).then(m => m.default || m)
const _8e9d7d16 = () => import('..\\pages\\precio\\index.vue' /* webpackChunkName: "pages_precio_index" */).then(m => m.default || m)
const _6d5a5f60 = () => import('..\\pages\\Login\\index.vue' /* webpackChunkName: "pages_Login_index" */).then(m => m.default || m)
const _2d106516 = () => import('..\\pages\\mapa\\index.vue' /* webpackChunkName: "pages_mapa_index" */).then(m => m.default || m)
const _63df8657 = () => import('..\\pages\\horario\\index.vue' /* webpackChunkName: "pages_horario_index" */).then(m => m.default || m)
const _600aff27 = () => import('..\\pages\\boletos\\index.vue' /* webpackChunkName: "pages_boletos_index" */).then(m => m.default || m)
const _0d9835bc = () => import('..\\pages\\lugares\\index.vue' /* webpackChunkName: "pages_lugares_index" */).then(m => m.default || m)
const _9206e536 = () => import('..\\pages\\lugares\\tipolugar.vue' /* webpackChunkName: "pages_lugares_tipolugar" */).then(m => m.default || m)
const _3011774c = () => import('..\\pages\\paradas\\editar.vue' /* webpackChunkName: "pages_paradas_editar" */).then(m => m.default || m)
const _e1ff49fe = () => import('..\\pages\\camiones\\Agregar.vue' /* webpackChunkName: "pages_camiones_Agregar" */).then(m => m.default || m)
const _1f713d30 = () => import('..\\pages\\boletos\\tipoboleto.vue' /* webpackChunkName: "pages_boletos_tipoboleto" */).then(m => m.default || m)
const _62217568 = () => import('..\\pages\\usuarios\\create.vue' /* webpackChunkName: "pages_usuarios_create" */).then(m => m.default || m)
const _7876952a = () => import('..\\pages\\boletos\\tipoboletoeditar.vue' /* webpackChunkName: "pages_boletos_tipoboletoeditar" */).then(m => m.default || m)
const _f7dad9b8 = () => import('..\\pages\\horario\\agregar.vue' /* webpackChunkName: "pages_horario_agregar" */).then(m => m.default || m)
const _293c027c = () => import('..\\pages\\precio\\agregar.vue' /* webpackChunkName: "pages_precio_agregar" */).then(m => m.default || m)
const _2eddebe7 = () => import('..\\pages\\rutas\\editar.vue' /* webpackChunkName: "pages_rutas_editar" */).then(m => m.default || m)
const _371cc060 = () => import('..\\pages\\paradas\\agregar.vue' /* webpackChunkName: "pages_paradas_agregar" */).then(m => m.default || m)
const _624093d9 = () => import('..\\pages\\mural\\editar.vue' /* webpackChunkName: "pages_mural_editar" */).then(m => m.default || m)
const _234317f4 = () => import('..\\pages\\boletos\\agregar.vue' /* webpackChunkName: "pages_boletos_agregar" */).then(m => m.default || m)
const _480b4b0a = () => import('..\\pages\\lugares\\tipolugaragregar.vue' /* webpackChunkName: "pages_lugares_tipolugaragregar" */).then(m => m.default || m)
const _995b7f9e = () => import('..\\pages\\mural\\agregar.vue' /* webpackChunkName: "pages_mural_agregar" */).then(m => m.default || m)
const _040841ee = () => import('..\\pages\\camiones\\Editar.vue' /* webpackChunkName: "pages_camiones_Editar" */).then(m => m.default || m)
const _7a5fe9e3 = () => import('..\\pages\\rutas\\agregar.vue' /* webpackChunkName: "pages_rutas_agregar" */).then(m => m.default || m)
const _823381b0 = () => import('..\\pages\\precio\\editar.vue' /* webpackChunkName: "pages_precio_editar" */).then(m => m.default || m)
const _bb46056e = () => import('..\\pages\\lugares\\agregar.vue' /* webpackChunkName: "pages_lugares_agregar" */).then(m => m.default || m)
const _4c79660a = () => import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */).then(m => m.default || m)

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
			component: _a1644fd4,
			name: "usuarios"
		},
		{
			path: "/mural",
			component: _295112a4,
			name: "mural"
		},
		{
			path: "/paradas",
			component: _6fb1ce03,
			name: "paradas"
		},
		{
			path: "/camiones",
			component: _0e14fcd8,
			name: "camiones"
		},
		{
			path: "/rutas",
			component: _ea7cfe54,
			name: "rutas"
		},
		{
			path: "/precio",
			component: _8e9d7d16,
			name: "precio"
		},
		{
			path: "/Login",
			component: _6d5a5f60,
			name: "Login"
		},
		{
			path: "/mapa",
			component: _2d106516,
			name: "mapa"
		},
		{
			path: "/horario",
			component: _63df8657,
			name: "horario"
		},
		{
			path: "/boletos",
			component: _600aff27,
			name: "boletos"
		},
		{
			path: "/lugares",
			component: _0d9835bc,
			name: "lugares"
		},
		{
			path: "/lugares/tipolugar",
			component: _9206e536,
			name: "lugares-tipolugar"
		},
		{
			path: "/paradas/editar",
			component: _3011774c,
			name: "paradas-editar"
		},
		{
			path: "/camiones/Agregar",
			component: _e1ff49fe,
			name: "camiones-Agregar"
		},
		{
			path: "/boletos/tipoboleto",
			component: _1f713d30,
			name: "boletos-tipoboleto"
		},
		{
			path: "/usuarios/create",
			component: _62217568,
			name: "usuarios-create"
		},
		{
			path: "/boletos/tipoboletoeditar",
			component: _7876952a,
			name: "boletos-tipoboletoeditar"
		},
		{
			path: "/horario/agregar",
			component: _f7dad9b8,
			name: "horario-agregar"
		},
		{
			path: "/precio/agregar",
			component: _293c027c,
			name: "precio-agregar"
		},
		{
			path: "/rutas/editar",
			component: _2eddebe7,
			name: "rutas-editar"
		},
		{
			path: "/paradas/agregar",
			component: _371cc060,
			name: "paradas-agregar"
		},
		{
			path: "/mural/editar",
			component: _624093d9,
			name: "mural-editar"
		},
		{
			path: "/boletos/agregar",
			component: _234317f4,
			name: "boletos-agregar"
		},
		{
			path: "/lugares/tipolugaragregar",
			component: _480b4b0a,
			name: "lugares-tipolugaragregar"
		},
		{
			path: "/mural/agregar",
			component: _995b7f9e,
			name: "mural-agregar"
		},
		{
			path: "/camiones/Editar",
			component: _040841ee,
			name: "camiones-Editar"
		},
		{
			path: "/rutas/agregar",
			component: _7a5fe9e3,
			name: "rutas-agregar"
		},
		{
			path: "/precio/editar",
			component: _823381b0,
			name: "precio-editar"
		},
		{
			path: "/lugares/agregar",
			component: _bb46056e,
			name: "lugares-agregar"
		},
		{
			path: "/",
			component: _4c79660a,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
