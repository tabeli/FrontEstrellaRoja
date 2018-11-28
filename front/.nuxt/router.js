import Vue from 'vue'
import Router from 'vue-router'

const _a56e2aa0 = () => import('../pages/usuarios/index.vue' /* webpackChunkName: "pages/usuarios/index" */).then(m => m.default || m)
const _09cdc0b0 = () => import('../pages/lugares/index.vue' /* webpackChunkName: "pages/lugares/index" */).then(m => m.default || m)
const _693e3d00 = () => import('../pages/mural/index.vue' /* webpackChunkName: "pages/mural/index" */).then(m => m.default || m)
const _762a0630 = () => import('../pages/mapa/index.vue' /* webpackChunkName: "pages/mapa/index" */).then(m => m.default || m)
const _08831de9 = () => import('../pages/compra/index.vue' /* webpackChunkName: "pages/compra/index" */).then(m => m.default || m)
const _129abe54 = () => import('../pages/Login/index.vue' /* webpackChunkName: "pages/Login/index" */).then(m => m.default || m)
const _16a7cfad = () => import('../pages/horario/index.vue' /* webpackChunkName: "pages/horario/index" */).then(m => m.default || m)
const _7bf0e50e = () => import('../pages/rutas/index.vue' /* webpackChunkName: "pages/rutas/index" */).then(m => m.default || m)
const _63b10539 = () => import('../pages/narrativa/index.vue' /* webpackChunkName: "pages/narrativa/index" */).then(m => m.default || m)
const _0eded588 = () => import('../pages/fecha/index.vue' /* webpackChunkName: "pages/fecha/index" */).then(m => m.default || m)
const _1411d6c0 = () => import('../pages/compras/index.vue' /* webpackChunkName: "pages/compras/index" */).then(m => m.default || m)
const _b131cd1c = () => import('../pages/camiones/index.vue' /* webpackChunkName: "pages/camiones/index" */).then(m => m.default || m)
const _047c0646 = () => import('../pages/boletos/index.vue' /* webpackChunkName: "pages/boletos/index" */).then(m => m.default || m)
const _5e6306c4 = () => import('../pages/imagen/index.vue' /* webpackChunkName: "pages/imagen/index" */).then(m => m.default || m)
const _b835c882 = () => import('../pages/itinerario/index.vue' /* webpackChunkName: "pages/itinerario/index" */).then(m => m.default || m)
const _3e2af5b1 = () => import('../pages/precio/index.vue' /* webpackChunkName: "pages/precio/index" */).then(m => m.default || m)
const _f528b6a2 = () => import('../pages/analitica/index.vue' /* webpackChunkName: "pages/analitica/index" */).then(m => m.default || m)
const _50d7e281 = () => import('../pages/paradas/index.vue' /* webpackChunkName: "pages/paradas/index" */).then(m => m.default || m)
const _07126f8d = () => import('../pages/boletos/detalleagregar.vue' /* webpackChunkName: "pages/boletos/detalleagregar" */).then(m => m.default || m)
const _9c5994c4 = () => import('../pages/lugares/tipolugaragregar.vue' /* webpackChunkName: "pages/lugares/tipolugaragregar" */).then(m => m.default || m)
const _4571bfca = () => import('../pages/rutas/agregar.vue' /* webpackChunkName: "pages/rutas/agregar" */).then(m => m.default || m)
const _33a38592 = () => import('../pages/compras/tipoboleto.vue' /* webpackChunkName: "pages/compras/tipoboleto" */).then(m => m.default || m)
const _2388b60e = () => import('../pages/usuarios/create.vue' /* webpackChunkName: "pages/usuarios/create" */).then(m => m.default || m)
const _1dbd42eb = () => import('../pages/camiones/Editar.vue' /* webpackChunkName: "pages/camiones/Editar" */).then(m => m.default || m)
const _35858fb2 = () => import('../pages/paradas/agregarvinculo.vue' /* webpackChunkName: "pages/paradas/agregarvinculo" */).then(m => m.default || m)
const _ae43b37c = () => import('../pages/boletos/detalle.vue' /* webpackChunkName: "pages/boletos/detalle" */).then(m => m.default || m)
const _f5dc4798 = () => import('../pages/itinerario/agregarvinculo.vue' /* webpackChunkName: "pages/itinerario/agregarvinculo" */).then(m => m.default || m)
const _14648cce = () => import('../pages/paradas/agregar.vue' /* webpackChunkName: "pages/paradas/agregar" */).then(m => m.default || m)
const _6c7ada15 = () => import('../pages/fecha/agregar.vue' /* webpackChunkName: "pages/fecha/agregar" */).then(m => m.default || m)
const _d43bc876 = () => import('../pages/rutas/agregarvinculo.vue' /* webpackChunkName: "pages/rutas/agregarvinculo" */).then(m => m.default || m)
const _7642bd5e = () => import('../pages/lugares/tipolugar.vue' /* webpackChunkName: "pages/lugares/tipolugar" */).then(m => m.default || m)
const _24ae0635 = () => import('../pages/imagen/agregarvinculo.vue' /* webpackChunkName: "pages/imagen/agregarvinculo" */).then(m => m.default || m)
const _d7bb3d8c = () => import('../pages/boletos/tipoboleto.vue' /* webpackChunkName: "pages/boletos/tipoboleto" */).then(m => m.default || m)
const _1e1b2566 = () => import('../pages/compras/agregar.vue' /* webpackChunkName: "pages/compras/agregar" */).then(m => m.default || m)
const _2f31802a = () => import('../pages/boletos/agregar.vue' /* webpackChunkName: "pages/boletos/agregar" */).then(m => m.default || m)
const _2dbc80bd = () => import('../pages/mapa/agregar.vue' /* webpackChunkName: "pages/mapa/agregar" */).then(m => m.default || m)
const _334b1c35 = () => import('../pages/lugares/agregar.vue' /* webpackChunkName: "pages/lugares/agregar" */).then(m => m.default || m)
const _bdedac16 = () => import('../pages/boletos/tipoboletoeditar.vue' /* webpackChunkName: "pages/boletos/tipoboletoeditar" */).then(m => m.default || m)
const _c9d943fc = () => import('../pages/mapa/ruta.vue' /* webpackChunkName: "pages/mapa/ruta" */).then(m => m.default || m)
const _5a0a4768 = () => import('../pages/rutas/vinculo.vue' /* webpackChunkName: "pages/rutas/vinculo" */).then(m => m.default || m)
const _3b0d5432 = () => import('../pages/compras/tipoboletoeditar.vue' /* webpackChunkName: "pages/compras/tipoboletoeditar" */).then(m => m.default || m)
const _711d13ab = () => import('../pages/imagen/agregar.vue' /* webpackChunkName: "pages/imagen/agregar" */).then(m => m.default || m)
const _4def22e8 = () => import('../pages/itinerario/agregar.vue' /* webpackChunkName: "pages/itinerario/agregar" */).then(m => m.default || m)
const _0d80d804 = () => import('../pages/precio/agregar.vue' /* webpackChunkName: "pages/precio/agregar" */).then(m => m.default || m)
const _639b0eaf = () => import('../pages/rutas/editar.vue' /* webpackChunkName: "pages/rutas/editar" */).then(m => m.default || m)
const _676b735f = () => import('../pages/camiones/Agregar.vue' /* webpackChunkName: "pages/camiones/Agregar" */).then(m => m.default || m)
const _2b93bf9c = () => import('../pages/paradas/editar.vue' /* webpackChunkName: "pages/paradas/editar" */).then(m => m.default || m)
const _6a9f1365 = () => import('../pages/compras/detalle.vue' /* webpackChunkName: "pages/compras/detalle" */).then(m => m.default || m)
const _2eb9db28 = () => import('../pages/precio/editar.vue' /* webpackChunkName: "pages/precio/editar" */).then(m => m.default || m)
const _77a6050a = () => import('../pages/compras/detalleagregar.vue' /* webpackChunkName: "pages/compras/detalleagregar" */).then(m => m.default || m)
const _55003cf4 = () => import('../pages/narrativa/agregar.vue' /* webpackChunkName: "pages/narrativa/agregar" */).then(m => m.default || m)
const _022aa07d = () => import('../pages/mural/editar.vue' /* webpackChunkName: "pages/mural/editar" */).then(m => m.default || m)
const _66d0cfdc = () => import('../pages/imagen/vinculo.vue' /* webpackChunkName: "pages/imagen/vinculo" */).then(m => m.default || m)
const _0a1848ff = () => import('../pages/paradas/vinculo.vue' /* webpackChunkName: "pages/paradas/vinculo" */).then(m => m.default || m)
const _6287aa86 = () => import('../pages/itinerario/vinculo.vue' /* webpackChunkName: "pages/itinerario/vinculo" */).then(m => m.default || m)
const _b424420c = () => import('../pages/horario/agregar.vue' /* webpackChunkName: "pages/horario/agregar" */).then(m => m.default || m)
const _10a9c80d = () => import('../pages/mural/agregar.vue' /* webpackChunkName: "pages/mural/agregar" */).then(m => m.default || m)
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
			path: "/lugares",
			component: _09cdc0b0,
			name: "lugares"
		},
		{
			path: "/mural",
			component: _693e3d00,
			name: "mural"
		},
		{
			path: "/mapa",
			component: _762a0630,
			name: "mapa"
		},
		{
			path: "/compra",
			component: _08831de9,
			name: "compra"
		},
		{
			path: "/Login",
			component: _129abe54,
			name: "Login"
		},
		{
			path: "/horario",
			component: _16a7cfad,
			name: "horario"
		},
		{
			path: "/rutas",
			component: _7bf0e50e,
			name: "rutas"
		},
		{
			path: "/narrativa",
			component: _63b10539,
			name: "narrativa"
		},
		{
			path: "/fecha",
			component: _0eded588,
			name: "fecha"
		},
		{
			path: "/compras",
			component: _1411d6c0,
			name: "compras"
		},
		{
			path: "/camiones",
			component: _b131cd1c,
			name: "camiones"
		},
		{
			path: "/boletos",
			component: _047c0646,
			name: "boletos"
		},
		{
			path: "/imagen",
			component: _5e6306c4,
			name: "imagen"
		},
		{
			path: "/itinerario",
			component: _b835c882,
			name: "itinerario"
		},
		{
			path: "/precio",
			component: _3e2af5b1,
			name: "precio"
		},
		{
			path: "/analitica",
			component: _f528b6a2,
			name: "analitica"
		},
		{
			path: "/paradas",
			component: _50d7e281,
			name: "paradas"
		},
		{
			path: "/boletos/detalleagregar",
			component: _07126f8d,
			name: "boletos-detalleagregar"
		},
		{
			path: "/lugares/tipolugaragregar",
			component: _9c5994c4,
			name: "lugares-tipolugaragregar"
		},
		{
			path: "/rutas/agregar",
			component: _4571bfca,
			name: "rutas-agregar"
		},
		{
			path: "/compras/tipoboleto",
			component: _33a38592,
			name: "compras-tipoboleto"
		},
		{
			path: "/usuarios/create",
			component: _2388b60e,
			name: "usuarios-create"
		},
		{
			path: "/camiones/Editar",
			component: _1dbd42eb,
			name: "camiones-Editar"
		},
		{
			path: "/paradas/agregarvinculo",
			component: _35858fb2,
			name: "paradas-agregarvinculo"
		},
		{
			path: "/boletos/detalle",
			component: _ae43b37c,
			name: "boletos-detalle"
		},
		{
			path: "/itinerario/agregarvinculo",
			component: _f5dc4798,
			name: "itinerario-agregarvinculo"
		},
		{
			path: "/paradas/agregar",
			component: _14648cce,
			name: "paradas-agregar"
		},
		{
			path: "/fecha/agregar",
			component: _6c7ada15,
			name: "fecha-agregar"
		},
		{
			path: "/rutas/agregarvinculo",
			component: _d43bc876,
			name: "rutas-agregarvinculo"
		},
		{
			path: "/lugares/tipolugar",
			component: _7642bd5e,
			name: "lugares-tipolugar"
		},
		{
			path: "/imagen/agregarvinculo",
			component: _24ae0635,
			name: "imagen-agregarvinculo"
		},
		{
			path: "/boletos/tipoboleto",
			component: _d7bb3d8c,
			name: "boletos-tipoboleto"
		},
		{
			path: "/compras/agregar",
			component: _1e1b2566,
			name: "compras-agregar"
		},
		{
			path: "/boletos/agregar",
			component: _2f31802a,
			name: "boletos-agregar"
		},
		{
			path: "/mapa/agregar",
			component: _2dbc80bd,
			name: "mapa-agregar"
		},
		{
			path: "/lugares/agregar",
			component: _334b1c35,
			name: "lugares-agregar"
		},
		{
			path: "/boletos/tipoboletoeditar",
			component: _bdedac16,
			name: "boletos-tipoboletoeditar"
		},
		{
			path: "/mapa/ruta",
			component: _c9d943fc,
			name: "mapa-ruta"
		},
		{
			path: "/rutas/vinculo",
			component: _5a0a4768,
			name: "rutas-vinculo"
		},
		{
			path: "/compras/tipoboletoeditar",
			component: _3b0d5432,
			name: "compras-tipoboletoeditar"
		},
		{
			path: "/imagen/agregar",
			component: _711d13ab,
			name: "imagen-agregar"
		},
		{
			path: "/itinerario/agregar",
			component: _4def22e8,
			name: "itinerario-agregar"
		},
		{
			path: "/precio/agregar",
			component: _0d80d804,
			name: "precio-agregar"
		},
		{
			path: "/rutas/editar",
			component: _639b0eaf,
			name: "rutas-editar"
		},
		{
			path: "/camiones/Agregar",
			component: _676b735f,
			name: "camiones-Agregar"
		},
		{
			path: "/paradas/editar",
			component: _2b93bf9c,
			name: "paradas-editar"
		},
		{
			path: "/compras/detalle",
			component: _6a9f1365,
			name: "compras-detalle"
		},
		{
			path: "/precio/editar",
			component: _2eb9db28,
			name: "precio-editar"
		},
		{
			path: "/compras/detalleagregar",
			component: _77a6050a,
			name: "compras-detalleagregar"
		},
		{
			path: "/narrativa/agregar",
			component: _55003cf4,
			name: "narrativa-agregar"
		},
		{
			path: "/mural/editar",
			component: _022aa07d,
			name: "mural-editar"
		},
		{
			path: "/imagen/vinculo",
			component: _66d0cfdc,
			name: "imagen-vinculo"
		},
		{
			path: "/paradas/vinculo",
			component: _0a1848ff,
			name: "paradas-vinculo"
		},
		{
			path: "/itinerario/vinculo",
			component: _6287aa86,
			name: "itinerario-vinculo"
		},
		{
			path: "/horario/agregar",
			component: _b424420c,
			name: "horario-agregar"
		},
		{
			path: "/mural/agregar",
			component: _10a9c80d,
			name: "mural-agregar"
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
