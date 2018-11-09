import Vue from 'vue'
import Router from 'vue-router'

const _c8562872 = () => import('..\\pages\\usuarios\\index.vue' /* webpackChunkName: "pages_usuarios_index" */).then(m => m.default || m)
const _0435f6da = () => import('..\\pages\\mural\\index.vue' /* webpackChunkName: "pages_mural_index" */).then(m => m.default || m)
const _6f110032 = () => import('..\\pages\\paradas\\index.vue' /* webpackChunkName: "pages_paradas_index" */).then(m => m.default || m)
const _3506d576 = () => import('..\\pages\\camiones\\index.vue' /* webpackChunkName: "pages_camiones_index" */).then(m => m.default || m)
const _5f5572c5 = () => import('..\\pages\\rutas\\index.vue' /* webpackChunkName: "pages_rutas_index" */).then(m => m.default || m)
const _769b8d66 = () => import('..\\pages\\precio\\index.vue' /* webpackChunkName: "pages_precio_index" */).then(m => m.default || m)
const _c4327b82 = () => import('..\\pages\\Login\\index.vue' /* webpackChunkName: "pages_Login_index" */).then(m => m.default || m)
const _7f620d72 = () => import('..\\pages\\mapa\\index.vue' /* webpackChunkName: "pages_mapa_index" */).then(m => m.default || m)
const _633eb886 = () => import('..\\pages\\horario\\index.vue' /* webpackChunkName: "pages_horario_index" */).then(m => m.default || m)
const _5f6a3156 = () => import('..\\pages\\boletos\\index.vue' /* webpackChunkName: "pages_boletos_index" */).then(m => m.default || m)
const _0cf767eb = () => import('..\\pages\\lugares\\index.vue' /* webpackChunkName: "pages_lugares_index" */).then(m => m.default || m)
const _9beddfd8 = () => import('..\\pages\\lugares\\tipolugar.vue' /* webpackChunkName: "pages_lugares_tipolugar" */).then(m => m.default || m)
const _57034fea = () => import('..\\pages\\paradas\\editar.vue' /* webpackChunkName: "pages_paradas_editar" */).then(m => m.default || m)
const _76114672 = () => import('..\\pages\\camiones\\Agregar.vue' /* webpackChunkName: "pages_camiones_Agregar" */).then(m => m.default || m)
const _f415df3e = () => import('..\\pages\\boletos\\tipoboleto.vue' /* webpackChunkName: "pages_boletos_tipoboleto" */).then(m => m.default || m)
const _067cd7d7 = () => import('..\\pages\\usuarios\\create.vue' /* webpackChunkName: "pages_usuarios_create" */).then(m => m.default || m)
const _4220c048 = () => import('..\\pages\\boletos\\tipoboletoeditar.vue' /* webpackChunkName: "pages_boletos_tipoboletoeditar" */).then(m => m.default || m)
const _286df593 = () => import('..\\pages\\horario\\agregar.vue' /* webpackChunkName: "pages_horario_agregar" */).then(m => m.default || m)
const _502ddb1a = () => import('..\\pages\\precio\\agregar.vue' /* webpackChunkName: "pages_precio_agregar" */).then(m => m.default || m)
const _266f9050 = () => import('..\\pages\\rutas\\editar.vue' /* webpackChunkName: "pages_rutas_editar" */).then(m => m.default || m)
const _ee65fb82 = () => import('..\\pages\\paradas\\agregar.vue' /* webpackChunkName: "pages_paradas_agregar" */).then(m => m.default || m)
const _202adfca = () => import('..\\pages\\mural\\editar.vue' /* webpackChunkName: "pages_mural_editar" */).then(m => m.default || m)
const _70c30b3a = () => import('..\\pages\\boletos\\agregar.vue' /* webpackChunkName: "pages_boletos_agregar" */).then(m => m.default || m)
const _6336357b = () => import('..\\pages\\lugares\\tipolugaragregar.vue' /* webpackChunkName: "pages_lugares_tipolugaragregar" */).then(m => m.default || m)
const _9a9d1b40 = () => import('..\\pages\\mural\\agregar.vue' /* webpackChunkName: "pages_mural_agregar" */).then(m => m.default || m)
const _bb517d10 = () => import('..\\pages\\camiones\\Editar.vue' /* webpackChunkName: "pages_camiones_Editar" */).then(m => m.default || m)
const _79bf1c12 = () => import('..\\pages\\rutas\\agregar.vue' /* webpackChunkName: "pages_rutas_agregar" */).then(m => m.default || m)
const _83751d52 = () => import('..\\pages\\precio\\editar.vue' /* webpackChunkName: "pages_precio_editar" */).then(m => m.default || m)
const _46b85fb8 = () => import('..\\pages\\lugares\\agregar.vue' /* webpackChunkName: "pages_lugares_agregar" */).then(m => m.default || m)
const _d865cc28 = () => import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */).then(m => m.default || m)

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
			component: _c8562872,
			name: "usuarios"
		},
		{
			path: "/mural",
			component: _0435f6da,
			name: "mural"
		},
		{
			path: "/paradas",
			component: _6f110032,
			name: "paradas"
		},
		{
			path: "/camiones",
			component: _3506d576,
			name: "camiones"
		},
		{
			path: "/rutas",
			component: _5f5572c5,
			name: "rutas"
		},
		{
			path: "/precio",
			component: _769b8d66,
			name: "precio"
		},
		{
			path: "/Login",
			component: _c4327b82,
			name: "Login"
		},
		{
			path: "/mapa",
			component: _7f620d72,
			name: "mapa"
		},
		{
			path: "/horario",
			component: _633eb886,
			name: "horario"
		},
		{
			path: "/boletos",
			component: _5f6a3156,
			name: "boletos"
		},
		{
			path: "/lugares",
			component: _0cf767eb,
			name: "lugares"
		},
		{
			path: "/lugares/tipolugar",
			component: _9beddfd8,
			name: "lugares-tipolugar"
		},
		{
			path: "/paradas/editar",
			component: _57034fea,
			name: "paradas-editar"
		},
		{
			path: "/camiones/Agregar",
			component: _76114672,
			name: "camiones-Agregar"
		},
		{
			path: "/boletos/tipoboleto",
			component: _f415df3e,
			name: "boletos-tipoboleto"
		},
		{
			path: "/usuarios/create",
			component: _067cd7d7,
			name: "usuarios-create"
		},
		{
			path: "/boletos/tipoboletoeditar",
			component: _4220c048,
			name: "boletos-tipoboletoeditar"
		},
		{
			path: "/horario/agregar",
			component: _286df593,
			name: "horario-agregar"
		},
		{
			path: "/precio/agregar",
			component: _502ddb1a,
			name: "precio-agregar"
		},
		{
			path: "/rutas/editar",
			component: _266f9050,
			name: "rutas-editar"
		},
		{
			path: "/paradas/agregar",
			component: _ee65fb82,
			name: "paradas-agregar"
		},
		{
			path: "/mural/editar",
			component: _202adfca,
			name: "mural-editar"
		},
		{
			path: "/boletos/agregar",
			component: _70c30b3a,
			name: "boletos-agregar"
		},
		{
			path: "/lugares/tipolugaragregar",
			component: _6336357b,
			name: "lugares-tipolugaragregar"
		},
		{
			path: "/mural/agregar",
			component: _9a9d1b40,
			name: "mural-agregar"
		},
		{
			path: "/camiones/Editar",
			component: _bb517d10,
			name: "camiones-Editar"
		},
		{
			path: "/rutas/agregar",
			component: _79bf1c12,
			name: "rutas-agregar"
		},
		{
			path: "/precio/editar",
			component: _83751d52,
			name: "precio-editar"
		},
		{
			path: "/lugares/agregar",
			component: _46b85fb8,
			name: "lugares-agregar"
		},
		{
			path: "/",
			component: _d865cc28,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
