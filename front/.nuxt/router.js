import Vue from 'vue'
import Router from 'vue-router'

const _a56e2aa0 = () => import('../pages/usuarios/index.vue' /* webpackChunkName: "pages/usuarios/index" */).then(m => m.default || m)
const _b131cd1c = () => import('../pages/camiones/index.vue' /* webpackChunkName: "pages/camiones/index" */).then(m => m.default || m)
const _693e3d00 = () => import('../pages/mural/index.vue' /* webpackChunkName: "pages/mural/index" */).then(m => m.default || m)
const _0eded588 = () => import('../pages/fecha/index.vue' /* webpackChunkName: "pages/fecha/index" */).then(m => m.default || m)
const _09cdc0b0 = () => import('../pages/lugares/index.vue' /* webpackChunkName: "pages/lugares/index" */).then(m => m.default || m)
const _08831de9 = () => import('../pages/compra/index.vue' /* webpackChunkName: "pages/compra/index" */).then(m => m.default || m)
const _5e6306c4 = () => import('../pages/imagen/index.vue' /* webpackChunkName: "pages/imagen/index" */).then(m => m.default || m)
const _7bf0e50e = () => import('../pages/rutas/index.vue' /* webpackChunkName: "pages/rutas/index" */).then(m => m.default || m)
const _047c0646 = () => import('../pages/boletos/index.vue' /* webpackChunkName: "pages/boletos/index" */).then(m => m.default || m)
const _63b10539 = () => import('../pages/narrativa/index.vue' /* webpackChunkName: "pages/narrativa/index" */).then(m => m.default || m)
const _129abe54 = () => import('../pages/Login/index.vue' /* webpackChunkName: "pages/Login/index" */).then(m => m.default || m)
const _762a0630 = () => import('../pages/mapa/index.vue' /* webpackChunkName: "pages/mapa/index" */).then(m => m.default || m)
const _b835c882 = () => import('../pages/itinerario/index.vue' /* webpackChunkName: "pages/itinerario/index" */).then(m => m.default || m)
const _3e2af5b1 = () => import('../pages/precio/index.vue' /* webpackChunkName: "pages/precio/index" */).then(m => m.default || m)
const _50d7e281 = () => import('../pages/paradas/index.vue' /* webpackChunkName: "pages/paradas/index" */).then(m => m.default || m)
const _16a7cfad = () => import('../pages/horario/index.vue' /* webpackChunkName: "pages/horario/index" */).then(m => m.default || m)
const _55003cf4 = () => import('../pages/narrativa/agregar.vue' /* webpackChunkName: "pages/narrativa/agregar" */).then(m => m.default || m)
const _bdedac16 = () => import('../pages/boletos/tipoboletoeditar.vue' /* webpackChunkName: "pages/boletos/tipoboletoeditar" */).then(m => m.default || m)
const _4571bfca = () => import('../pages/rutas/agregar.vue' /* webpackChunkName: "pages/rutas/agregar" */).then(m => m.default || m)
const _2f31802a = () => import('../pages/boletos/agregar.vue' /* webpackChunkName: "pages/boletos/agregar" */).then(m => m.default || m)
const _2388b60e = () => import('../pages/usuarios/create.vue' /* webpackChunkName: "pages/usuarios/create" */).then(m => m.default || m)
const _022aa07d = () => import('../pages/mural/editar.vue' /* webpackChunkName: "pages/mural/editar" */).then(m => m.default || m)
const _0d80d804 = () => import('../pages/precio/agregar.vue' /* webpackChunkName: "pages/precio/agregar" */).then(m => m.default || m)
const _639b0eaf = () => import('../pages/rutas/editar.vue' /* webpackChunkName: "pages/rutas/editar" */).then(m => m.default || m)
const _d7bb3d8c = () => import('../pages/boletos/tipoboleto.vue' /* webpackChunkName: "pages/boletos/tipoboleto" */).then(m => m.default || m)
const _f5dc4798 = () => import('../pages/itinerario/agregarvinculo.vue' /* webpackChunkName: "pages/itinerario/agregarvinculo" */).then(m => m.default || m)
const _334b1c35 = () => import('../pages/lugares/agregar.vue' /* webpackChunkName: "pages/lugares/agregar" */).then(m => m.default || m)
const _711d13ab = () => import('../pages/imagen/agregar.vue' /* webpackChunkName: "pages/imagen/agregar" */).then(m => m.default || m)
const _2eb9db28 = () => import('../pages/precio/editar.vue' /* webpackChunkName: "pages/precio/editar" */).then(m => m.default || m)
const _ae43b37c = () => import('../pages/boletos/detalle.vue' /* webpackChunkName: "pages/boletos/detalle" */).then(m => m.default || m)
const _1dbd42eb = () => import('../pages/camiones/Editar.vue' /* webpackChunkName: "pages/camiones/Editar" */).then(m => m.default || m)
const _0a1848ff = () => import('../pages/paradas/vinculo.vue' /* webpackChunkName: "pages/paradas/vinculo" */).then(m => m.default || m)
const _10a9c80d = () => import('../pages/mural/agregar.vue' /* webpackChunkName: "pages/mural/agregar" */).then(m => m.default || m)
const _c9d943fc = () => import('../pages/mapa/ruta.vue' /* webpackChunkName: "pages/mapa/ruta" */).then(m => m.default || m)
const _b424420c = () => import('../pages/horario/agregar.vue' /* webpackChunkName: "pages/horario/agregar" */).then(m => m.default || m)
const _14648cce = () => import('../pages/paradas/agregar.vue' /* webpackChunkName: "pages/paradas/agregar" */).then(m => m.default || m)
const _07126f8d = () => import('../pages/boletos/detalleagregar.vue' /* webpackChunkName: "pages/boletos/detalleagregar" */).then(m => m.default || m)
const _6c7ada15 = () => import('../pages/fecha/agregar.vue' /* webpackChunkName: "pages/fecha/agregar" */).then(m => m.default || m)
const _2dbc80bd = () => import('../pages/mapa/agregar.vue' /* webpackChunkName: "pages/mapa/agregar" */).then(m => m.default || m)
const _7642bd5e = () => import('../pages/lugares/tipolugar.vue' /* webpackChunkName: "pages/lugares/tipolugar" */).then(m => m.default || m)
const _676b735f = () => import('../pages/camiones/Agregar.vue' /* webpackChunkName: "pages/camiones/Agregar" */).then(m => m.default || m)
const _2b93bf9c = () => import('../pages/paradas/editar.vue' /* webpackChunkName: "pages/paradas/editar" */).then(m => m.default || m)
const _9c5994c4 = () => import('../pages/lugares/tipolugaragregar.vue' /* webpackChunkName: "pages/lugares/tipolugaragregar" */).then(m => m.default || m)
const _4def22e8 = () => import('../pages/itinerario/agregar.vue' /* webpackChunkName: "pages/itinerario/agregar" */).then(m => m.default || m)
const _35858fb2 = () => import('../pages/paradas/agregarvinculo.vue' /* webpackChunkName: "pages/paradas/agregarvinculo" */).then(m => m.default || m)
const _6287aa86 = () => import('../pages/itinerario/vinculo.vue' /* webpackChunkName: "pages/itinerario/vinculo" */).then(m => m.default || m)
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
			component: _120f150e,
			name: "usuarios"
		},
		{
			path: "/camiones",
			component: _b131cd1c,
			name: "camiones"
		},
		{
			path: "/mural",
			component: _252b2821,
			name: "mural"
		},
		{
			path: "/horario",
			component: _5ceb9ed8,
			name: "horario"
		},
		{
			path: "/itinerario",
			component: _f33ed56c,
			name: "itinerario"
		},
		{
			path: "/lugares",
			component: _7b42dff9,
			name: "lugares"
		},
		{
			path: "/precio",
			component: _3819db98,
			name: "precio"
		},
		{
			path: "/boletos",
			component: _6494ad38,
			name: "boletos"
		},
		{
			path: "/rutas",
			component: _f2c8d35a,
			name: "rutas"
		},
		{
			path: "/fecha",
			component: _516bb519,
			name: "fecha"
		},
		{
			path: "/Login",
			component: _75a63466,
			name: "Login"
		},
		{
			path: "/narrativa",
			component: _23279d88,
			name: "narrativa"
		},
		{
			path: "/imagen",
			component: _0c319b6a,
			name: "imagen"
		},
		{
			path: "/paradas",
			component: _45470f80,
			name: "paradas"
		},
		{
			path: "/camiones",
			component: _40a01ef7,
			name: "camiones"
		},
		{
			path: "/mapa",
			component: _9de1a80e,
			name: "mapa"
		},
		{
			path: "/narrativa/agregar",
			component: _dc9cbbd6,
			name: "narrativa-agregar"
		},
		{
			path: "/boletos/agregar",
			component: _5e27b21e,
			name: "boletos-agregar"
		},
		{
			path: "/mural/agregar",
			component: _20fcea6e,
			name: "mural-agregar"
		},
		{
			path: "/lugares/agregar",
			component: _50060c46,
			name: "lugares-agregar"
		},
		{
			path: "/usuarios/create",
			component: _0fca8465,
			name: "usuarios-create"
		},
		{
			path: "/paradas/agregar",
			component: _dbcaa266,
			name: "paradas-agregar"
		},
		{
			path: "/lugares/tipolugaragregar",
			component: _5946c8ad,
			name: "lugares-tipolugaragregar"
		},
		{
			path: "/mural/editar",
			component: _3cada408,
			name: "mural-editar"
		},
		{
			path: "/camiones/Agregar",
			component: _d30da8b8,
			name: "camiones-Agregar"
		},
		{
			path: "/paradas/vinculo",
			component: _f0632a04,
			name: "paradas-vinculo"
		},
		{
			path: "/boletos/tipoboletoeditar",
			component: _55ff99e4,
			name: "boletos-tipoboletoeditar"
		},
		{
			path: "/horario/agregar",
			component: _31bba221,
			name: "horario-agregar"
		},
		{
			path: "/itinerario/agregarvinculo",
			component: _d16221ee,
			name: "itinerario-agregarvinculo"
		},
		{
			path: "/lugares/agregar",
			component: _334b1c35,
			name: "lugares-agregar"
		},
		{
			path: "/imagen/agregar",
			component: _711d13ab,
			name: "imagen-agregar"
		},
		{
			path: "/precio/editar",
			component: _2c90e965,
			name: "precio-editar"
		},
		{
			path: "/precio/agregar",
			component: _330c9c25,
			name: "precio-agregar"
		},
		{
			path: "/boletos/detalleagregar",
			component: _b98a2a34,
			name: "boletos-detalleagregar"
		},
		{
			path: "/fecha/agregar",
			component: _3f4e1966,
			name: "fecha-agregar"
		},
		{
			path: "/rutas/editar",
			component: _a372f3ec,
			name: "rutas-editar"
		},
		{
			path: "/boletos/detalle",
			component: _4a98cd09,
			name: "boletos-detalle"
		},
		{
			path: "/boletos/tipoboleto",
			component: _2bf87113,
			name: "boletos-tipoboleto"
		},
		{
			path: "/camiones/Editar",
			component: _a8b623f4,
			name: "camiones-Editar"
		},
		{
			path: "/lugares/tipolugar",
			component: _c2c45dbc,
			name: "lugares-tipolugar"
		},
		{
			path: "/imagen/agregar",
			component: _9241dbd0,
			name: "imagen-agregar"
		},
		{
			path: "/itinerario/vinculo",
			component: _003f6d88,
			name: "itinerario-vinculo"
		},
		{
			path: "/paradas/editar",
			component: _2fa1e1bd,
			name: "paradas-editar"
		},
		{
			path: "/paradas/agregarvinculo",
			component: _7f2400d3,
			name: "paradas-agregarvinculo"
		},
		{
			path: "/rutas/agregar",
			component: _2fead7c0,
			name: "rutas-agregar"
		},
		{
			path: "/itinerario/agregar",
			component: _0a8bb157,
			name: "itinerario-agregar"
		},
		{
			path: "/paradas/agregarvinculo",
			component: _35858fb2,
			name: "paradas-agregarvinculo"
		},
		{
			path: "/itinerario/vinculo",
			component: _6287aa86,
			name: "itinerario-vinculo"
		},
		{
			path: "/",
			component: _5a8dba1e,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
