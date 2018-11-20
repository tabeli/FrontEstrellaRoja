import Vue from 'vue'
import Router from 'vue-router'

const _120f150e = () => import('..\\pages\\usuarios\\index.vue' /* webpackChunkName: "pages_usuarios_index" */).then(m => m.default || m)
const _40a01ef7 = () => import('..\\pages\\camiones\\index.vue' /* webpackChunkName: "pages_camiones_index" */).then(m => m.default || m)
const _252b2821 = () => import('..\\pages\\mural\\index.vue' /* webpackChunkName: "pages_mural_index" */).then(m => m.default || m)
const _516bb519 = () => import('..\\pages\\fecha\\index.vue' /* webpackChunkName: "pages_fecha_index" */).then(m => m.default || m)
const _7b42dff9 = () => import('..\\pages\\lugares\\index.vue' /* webpackChunkName: "pages_lugares_index" */).then(m => m.default || m)
const _8e728b40 = () => import('..\\pages\\compra\\index.vue' /* webpackChunkName: "pages_compra_index" */).then(m => m.default || m)
const _0c319b6a = () => import('..\\pages\\imagen\\index.vue' /* webpackChunkName: "pages_imagen_index" */).then(m => m.default || m)
const _f2c8d35a = () => import('..\\pages\\rutas\\index.vue' /* webpackChunkName: "pages_rutas_index" */).then(m => m.default || m)
const _6494ad38 = () => import('..\\pages\\boletos\\index.vue' /* webpackChunkName: "pages_boletos_index" */).then(m => m.default || m)
const _23279d88 = () => import('..\\pages\\narrativa\\index.vue' /* webpackChunkName: "pages_narrativa_index" */).then(m => m.default || m)
const _75a63466 = () => import('..\\pages\\Login\\index.vue' /* webpackChunkName: "pages_Login_index" */).then(m => m.default || m)
const _9de1a80e = () => import('..\\pages\\mapa\\index.vue' /* webpackChunkName: "pages_mapa_index" */).then(m => m.default || m)
const _f33ed56c = () => import('..\\pages\\itinerario\\index.vue' /* webpackChunkName: "pages_itinerario_index" */).then(m => m.default || m)
const _3819db98 = () => import('..\\pages\\precio\\index.vue' /* webpackChunkName: "pages_precio_index" */).then(m => m.default || m)
const _45470f80 = () => import('..\\pages\\paradas\\index.vue' /* webpackChunkName: "pages_paradas_index" */).then(m => m.default || m)
const _5ceb9ed8 = () => import('..\\pages\\horario\\index.vue' /* webpackChunkName: "pages_horario_index" */).then(m => m.default || m)
const _dc9cbbd6 = () => import('..\\pages\\narrativa\\agregar.vue' /* webpackChunkName: "pages_narrativa_agregar" */).then(m => m.default || m)
const _55ff99e4 = () => import('..\\pages\\boletos\\tipoboletoeditar.vue' /* webpackChunkName: "pages_boletos_tipoboletoeditar" */).then(m => m.default || m)
const _2fead7c0 = () => import('..\\pages\\rutas\\agregar.vue' /* webpackChunkName: "pages_rutas_agregar" */).then(m => m.default || m)
const _5e27b21e = () => import('..\\pages\\boletos\\agregar.vue' /* webpackChunkName: "pages_boletos_agregar" */).then(m => m.default || m)
const _0fca8465 = () => import('..\\pages\\usuarios\\create.vue' /* webpackChunkName: "pages_usuarios_create" */).then(m => m.default || m)
const _3cada408 = () => import('..\\pages\\mural\\editar.vue' /* webpackChunkName: "pages_mural_editar" */).then(m => m.default || m)
const _330c9c25 = () => import('..\\pages\\precio\\agregar.vue' /* webpackChunkName: "pages_precio_agregar" */).then(m => m.default || m)
const _a372f3ec = () => import('..\\pages\\rutas\\editar.vue' /* webpackChunkName: "pages_rutas_editar" */).then(m => m.default || m)
const _2bf87113 = () => import('..\\pages\\boletos\\tipoboleto.vue' /* webpackChunkName: "pages_boletos_tipoboleto" */).then(m => m.default || m)
const _d16221ee = () => import('..\\pages\\itinerario\\agregarvinculo.vue' /* webpackChunkName: "pages_itinerario_agregarvinculo" */).then(m => m.default || m)
const _50060c46 = () => import('..\\pages\\lugares\\agregar.vue' /* webpackChunkName: "pages_lugares_agregar" */).then(m => m.default || m)
const _9241dbd0 = () => import('..\\pages\\imagen\\agregar.vue' /* webpackChunkName: "pages_imagen_agregar" */).then(m => m.default || m)
const _2c90e965 = () => import('..\\pages\\precio\\editar.vue' /* webpackChunkName: "pages_precio_editar" */).then(m => m.default || m)
const _4a98cd09 = () => import('..\\pages\\boletos\\detalle.vue' /* webpackChunkName: "pages_boletos_detalle" */).then(m => m.default || m)
const _a8b623f4 = () => import('..\\pages\\camiones\\Editar.vue' /* webpackChunkName: "pages_camiones_Editar" */).then(m => m.default || m)
const _f0632a04 = () => import('..\\pages\\paradas\\vinculo.vue' /* webpackChunkName: "pages_paradas_vinculo" */).then(m => m.default || m)
const _20fcea6e = () => import('..\\pages\\mural\\agregar.vue' /* webpackChunkName: "pages_mural_agregar" */).then(m => m.default || m)
const _a50449ce = () => import('..\\pages\\mapa\\ruta.vue' /* webpackChunkName: "pages_mapa_ruta" */).then(m => m.default || m)
const _31bba221 = () => import('..\\pages\\horario\\agregar.vue' /* webpackChunkName: "pages_horario_agregar" */).then(m => m.default || m)
const _dbcaa266 = () => import('..\\pages\\paradas\\agregar.vue' /* webpackChunkName: "pages_paradas_agregar" */).then(m => m.default || m)
const _b98a2a34 = () => import('..\\pages\\boletos\\detalleagregar.vue' /* webpackChunkName: "pages_boletos_detalleagregar" */).then(m => m.default || m)
const _3f4e1966 = () => import('..\\pages\\fecha\\agregar.vue' /* webpackChunkName: "pages_fecha_agregar" */).then(m => m.default || m)
const _43ef5846 = () => import('..\\pages\\mapa\\agregar.vue' /* webpackChunkName: "pages_mapa_agregar" */).then(m => m.default || m)
const _c2c45dbc = () => import('..\\pages\\lugares\\tipolugar.vue' /* webpackChunkName: "pages_lugares_tipolugar" */).then(m => m.default || m)
const _d30da8b8 = () => import('..\\pages\\camiones\\Agregar.vue' /* webpackChunkName: "pages_camiones_Agregar" */).then(m => m.default || m)
const _2fa1e1bd = () => import('..\\pages\\paradas\\editar.vue' /* webpackChunkName: "pages_paradas_editar" */).then(m => m.default || m)
const _5946c8ad = () => import('..\\pages\\lugares\\tipolugaragregar.vue' /* webpackChunkName: "pages_lugares_tipolugaragregar" */).then(m => m.default || m)
const _0a8bb157 = () => import('..\\pages\\itinerario\\agregar.vue' /* webpackChunkName: "pages_itinerario_agregar" */).then(m => m.default || m)
const _7f2400d3 = () => import('..\\pages\\paradas\\agregarvinculo.vue' /* webpackChunkName: "pages_paradas_agregarvinculo" */).then(m => m.default || m)
const _003f6d88 = () => import('..\\pages\\itinerario\\vinculo.vue' /* webpackChunkName: "pages_itinerario_vinculo" */).then(m => m.default || m)
const _5a8dba1e = () => import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */).then(m => m.default || m)

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
			component: _40a01ef7,
			name: "camiones"
		},
		{
			path: "/mural",
			component: _252b2821,
			name: "mural"
		},
		{
			path: "/fecha",
			component: _516bb519,
			name: "fecha"
		},
		{
			path: "/lugares",
			component: _7b42dff9,
			name: "lugares"
		},
		{
			path: "/compra",
			component: _8e728b40,
			name: "compra"
		},
		{
			path: "/imagen",
			component: _0c319b6a,
			name: "imagen"
		},
		{
			path: "/rutas",
			component: _f2c8d35a,
			name: "rutas"
		},
		{
			path: "/boletos",
			component: _6494ad38,
			name: "boletos"
		},
		{
			path: "/narrativa",
			component: _23279d88,
			name: "narrativa"
		},
		{
			path: "/Login",
			component: _75a63466,
			name: "Login"
		},
		{
			path: "/mapa",
			component: _9de1a80e,
			name: "mapa"
		},
		{
			path: "/itinerario",
			component: _f33ed56c,
			name: "itinerario"
		},
		{
			path: "/precio",
			component: _3819db98,
			name: "precio"
		},
		{
			path: "/paradas",
			component: _45470f80,
			name: "paradas"
		},
		{
			path: "/horario",
			component: _5ceb9ed8,
			name: "horario"
		},
		{
			path: "/narrativa/agregar",
			component: _dc9cbbd6,
			name: "narrativa-agregar"
		},
		{
			path: "/boletos/tipoboletoeditar",
			component: _55ff99e4,
			name: "boletos-tipoboletoeditar"
		},
		{
			path: "/rutas/agregar",
			component: _2fead7c0,
			name: "rutas-agregar"
		},
		{
			path: "/boletos/agregar",
			component: _5e27b21e,
			name: "boletos-agregar"
		},
		{
			path: "/usuarios/create",
			component: _0fca8465,
			name: "usuarios-create"
		},
		{
			path: "/mural/editar",
			component: _3cada408,
			name: "mural-editar"
		},
		{
			path: "/precio/agregar",
			component: _330c9c25,
			name: "precio-agregar"
		},
		{
			path: "/rutas/editar",
			component: _a372f3ec,
			name: "rutas-editar"
		},
		{
			path: "/boletos/tipoboleto",
			component: _2bf87113,
			name: "boletos-tipoboleto"
		},
		{
			path: "/itinerario/agregarvinculo",
			component: _d16221ee,
			name: "itinerario-agregarvinculo"
		},
		{
			path: "/lugares/agregar",
			component: _50060c46,
			name: "lugares-agregar"
		},
		{
			path: "/imagen/agregar",
			component: _9241dbd0,
			name: "imagen-agregar"
		},
		{
			path: "/precio/editar",
			component: _2c90e965,
			name: "precio-editar"
		},
		{
			path: "/boletos/detalle",
			component: _4a98cd09,
			name: "boletos-detalle"
		},
		{
			path: "/camiones/Editar",
			component: _a8b623f4,
			name: "camiones-Editar"
		},
		{
			path: "/paradas/vinculo",
			component: _f0632a04,
			name: "paradas-vinculo"
		},
		{
			path: "/mural/agregar",
			component: _20fcea6e,
			name: "mural-agregar"
		},
		{
			path: "/mapa/ruta",
			component: _a50449ce,
			name: "mapa-ruta"
		},
		{
			path: "/horario/agregar",
			component: _31bba221,
			name: "horario-agregar"
		},
		{
			path: "/paradas/agregar",
			component: _dbcaa266,
			name: "paradas-agregar"
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
			path: "/mapa/agregar",
			component: _43ef5846,
			name: "mapa-agregar"
		},
		{
			path: "/lugares/tipolugar",
			component: _c2c45dbc,
			name: "lugares-tipolugar"
		},
		{
			path: "/camiones/Agregar",
			component: _d30da8b8,
			name: "camiones-Agregar"
		},
		{
			path: "/paradas/editar",
			component: _2fa1e1bd,
			name: "paradas-editar"
		},
		{
			path: "/lugares/tipolugaragregar",
			component: _5946c8ad,
			name: "lugares-tipolugaragregar"
		},
		{
			path: "/itinerario/agregar",
			component: _0a8bb157,
			name: "itinerario-agregar"
		},
		{
			path: "/paradas/agregarvinculo",
			component: _7f2400d3,
			name: "paradas-agregarvinculo"
		},
		{
			path: "/itinerario/vinculo",
			component: _003f6d88,
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
