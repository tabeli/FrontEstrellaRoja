import Vue from 'vue'
import Router from 'vue-router'

const _c8562872 = () => import('..\\pages\\usuarios\\index.vue' /* webpackChunkName: "pages_usuarios_index" */).then(m => m.default || m)
const _5f6a3156 = () => import('..\\pages\\boletos\\index.vue' /* webpackChunkName: "pages_boletos_index" */).then(m => m.default || m)
const _131593d3 = () => import('..\\pages\\compras\\index.vue' /* webpackChunkName: "pages_compras_index" */).then(m => m.default || m)
const _6f110032 = () => import('..\\pages\\paradas\\index.vue' /* webpackChunkName: "pages_paradas_index" */).then(m => m.default || m)
const _0435f6da = () => import('..\\pages\\mural\\index.vue' /* webpackChunkName: "pages_mural_index" */).then(m => m.default || m)
const _633eb886 = () => import('..\\pages\\horario\\index.vue' /* webpackChunkName: "pages_horario_index" */).then(m => m.default || m)
const _769b8d66 = () => import('..\\pages\\precio\\index.vue' /* webpackChunkName: "pages_precio_index" */).then(m => m.default || m)
const _5f5572c5 = () => import('..\\pages\\rutas\\index.vue' /* webpackChunkName: "pages_rutas_index" */).then(m => m.default || m)
const _65f8b018 = () => import('..\\pages\\itinerario\\index.vue' /* webpackChunkName: "pages_itinerario_index" */).then(m => m.default || m)
const _2a25918b = () => import('..\\pages\\fecha\\index.vue' /* webpackChunkName: "pages_fecha_index" */).then(m => m.default || m)
const _3868e419 = () => import('..\\pages\\imagen\\index.vue' /* webpackChunkName: "pages_imagen_index" */).then(m => m.default || m)
const _c4327b82 = () => import('..\\pages\\Login\\index.vue' /* webpackChunkName: "pages_Login_index" */).then(m => m.default || m)
const _7f620d72 = () => import('..\\pages\\mapa\\index.vue' /* webpackChunkName: "pages_mapa_index" */).then(m => m.default || m)
const _3506d576 = () => import('..\\pages\\camiones\\index.vue' /* webpackChunkName: "pages_camiones_index" */).then(m => m.default || m)
const _19d9f0fa = () => import('..\\pages\\narrativa\\index.vue' /* webpackChunkName: "pages_narrativa_index" */).then(m => m.default || m)
const _0cf767eb = () => import('..\\pages\\lugares\\index.vue' /* webpackChunkName: "pages_lugares_index" */).then(m => m.default || m)
const _116f27a4 = () => import('..\\pages\\compra\\index.vue' /* webpackChunkName: "pages_compra_index" */).then(m => m.default || m)
const _70c30b3a = () => import('..\\pages\\boletos\\agregar.vue' /* webpackChunkName: "pages_boletos_agregar" */).then(m => m.default || m)
const _6965c80a = () => import('..\\pages\\itinerario\\agregarvinculo.vue' /* webpackChunkName: "pages_itinerario_agregarvinculo" */).then(m => m.default || m)
const _79bf1c12 = () => import('..\\pages\\rutas\\agregar.vue' /* webpackChunkName: "pages_rutas_agregar" */).then(m => m.default || m)
const _5dfabd50 = () => import('..\\pages\\fecha\\agregar.vue' /* webpackChunkName: "pages_fecha_agregar" */).then(m => m.default || m)
const _067cd7d7 = () => import('..\\pages\\usuarios\\create.vue' /* webpackChunkName: "pages_usuarios_create" */).then(m => m.default || m)
const _fb1debd8 = () => import('..\\pages\\mapa\\agregar.vue' /* webpackChunkName: "pages_mapa_agregar" */).then(m => m.default || m)
const _bb517d10 = () => import('..\\pages\\camiones\\Editar.vue' /* webpackChunkName: "pages_camiones_Editar" */).then(m => m.default || m)
const _d3be4dcc = () => import('..\\pages\\imagen\\agregarvinculo.vue' /* webpackChunkName: "pages_imagen_agregarvinculo" */).then(m => m.default || m)
const _f415df3e = () => import('..\\pages\\boletos\\tipoboleto.vue' /* webpackChunkName: "pages_boletos_tipoboleto" */).then(m => m.default || m)
const _ee65fb82 = () => import('..\\pages\\paradas\\agregar.vue' /* webpackChunkName: "pages_paradas_agregar" */).then(m => m.default || m)
const _641b3334 = () => import('..\\pages\\boletos\\detalleagregar.vue' /* webpackChunkName: "pages_boletos_detalleagregar" */).then(m => m.default || m)
const _56cc0bee = () => import('..\\pages\\rutas\\agregarvinculo.vue' /* webpackChunkName: "pages_rutas_agregarvinculo" */).then(m => m.default || m)
const _40efa7ea = () => import('..\\pages\\mapa\\ruta.vue' /* webpackChunkName: "pages_mapa_ruta" */).then(m => m.default || m)
const _40044921 = () => import('..\\pages\\paradas\\agregarvinculo.vue' /* webpackChunkName: "pages_paradas_agregarvinculo" */).then(m => m.default || m)
const _648850a5 = () => import('..\\pages\\itinerario\\agregar.vue' /* webpackChunkName: "pages_itinerario_agregar" */).then(m => m.default || m)
const _414b207b = () => import('..\\pages\\boletos\\detalle.vue' /* webpackChunkName: "pages_boletos_detalle" */).then(m => m.default || m)
const _57034fea = () => import('..\\pages\\paradas\\editar.vue' /* webpackChunkName: "pages_paradas_editar" */).then(m => m.default || m)
const _76114672 = () => import('..\\pages\\camiones\\Agregar.vue' /* webpackChunkName: "pages_camiones_Agregar" */).then(m => m.default || m)
const _286df593 = () => import('..\\pages\\horario\\agregar.vue' /* webpackChunkName: "pages_horario_agregar" */).then(m => m.default || m)
const _7564b404 = () => import('..\\pages\\compras\\tipoboleto.vue' /* webpackChunkName: "pages_compras_tipoboleto" */).then(m => m.default || m)
const _90b05090 = () => import('..\\pages\\compras\\detalle.vue' /* webpackChunkName: "pages_compras_detalle" */).then(m => m.default || m)
const _6f72d843 = () => import('..\\pages\\rutas\\vinculo.vue' /* webpackChunkName: "pages_rutas_vinculo" */).then(m => m.default || m)
const _5a3c0cd6 = () => import('..\\pages\\itinerario\\vinculo.vue' /* webpackChunkName: "pages_itinerario_vinculo" */).then(m => m.default || m)
const _202adfca = () => import('..\\pages\\mural\\editar.vue' /* webpackChunkName: "pages_mural_editar" */).then(m => m.default || m)
const _3dfb31a0 = () => import('..\\pages\\compras\\agregar.vue' /* webpackChunkName: "pages_compras_agregar" */).then(m => m.default || m)
const _502ddb1a = () => import('..\\pages\\precio\\agregar.vue' /* webpackChunkName: "pages_precio_agregar" */).then(m => m.default || m)
const _266f9050 = () => import('..\\pages\\rutas\\editar.vue' /* webpackChunkName: "pages_rutas_editar" */).then(m => m.default || m)
const _5bbb8866 = () => import('..\\pages\\imagen\\agregar.vue' /* webpackChunkName: "pages_imagen_agregar" */).then(m => m.default || m)
const _4220c048 = () => import('..\\pages\\boletos\\tipoboletoeditar.vue' /* webpackChunkName: "pages_boletos_tipoboletoeditar" */).then(m => m.default || m)
const _b5c63df2 = () => import('..\\pages\\narrativa\\agregar.vue' /* webpackChunkName: "pages_narrativa_agregar" */).then(m => m.default || m)
const _83751d52 = () => import('..\\pages\\precio\\editar.vue' /* webpackChunkName: "pages_precio_editar" */).then(m => m.default || m)
const _05fa4d57 = () => import('..\\pages\\compras\\detalleagregar.vue' /* webpackChunkName: "pages_compras_detalleagregar" */).then(m => m.default || m)
const _46b85fb8 = () => import('..\\pages\\lugares\\agregar.vue' /* webpackChunkName: "pages_lugares_agregar" */).then(m => m.default || m)
const _9beddfd8 = () => import('..\\pages\\lugares\\tipolugar.vue' /* webpackChunkName: "pages_lugares_tipolugar" */).then(m => m.default || m)
const _516f4497 = () => import('..\\pages\\imagen\\vinculo.vue' /* webpackChunkName: "pages_imagen_vinculo" */).then(m => m.default || m)
const _7e80be70 = () => import('..\\pages\\paradas\\vinculo.vue' /* webpackChunkName: "pages_paradas_vinculo" */).then(m => m.default || m)
const _f51e8582 = () => import('..\\pages\\compras\\tipoboletoeditar.vue' /* webpackChunkName: "pages_compras_tipoboletoeditar" */).then(m => m.default || m)
const _6336357b = () => import('..\\pages\\lugares\\tipolugaragregar.vue' /* webpackChunkName: "pages_lugares_tipolugaragregar" */).then(m => m.default || m)
const _9a9d1b40 = () => import('..\\pages\\mural\\agregar.vue' /* webpackChunkName: "pages_mural_agregar" */).then(m => m.default || m)
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
			path: "/boletos",
			component: _5f6a3156,
			name: "boletos"
		},
		{
			path: "/compras",
			component: _131593d3,
			name: "compras"
		},
		{
			path: "/paradas",
			component: _6f110032,
			name: "paradas"
		},
		{
			path: "/mural",
			component: _0435f6da,
			name: "mural"
		},
		{
			path: "/horario",
			component: _633eb886,
			name: "horario"
		},
		{
			path: "/precio",
			component: _769b8d66,
			name: "precio"
		},
		{
			path: "/rutas",
			component: _5f5572c5,
			name: "rutas"
		},
		{
			path: "/itinerario",
			component: _65f8b018,
			name: "itinerario"
		},
		{
			path: "/fecha",
			component: _2a25918b,
			name: "fecha"
		},
		{
			path: "/imagen",
			component: _3868e419,
			name: "imagen"
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
			path: "/camiones",
			component: _3506d576,
			name: "camiones"
		},
		{
			path: "/narrativa",
			component: _19d9f0fa,
			name: "narrativa"
		},
		{
			path: "/lugares",
			component: _0cf767eb,
			name: "lugares"
		},
		{
			path: "/compra",
			component: _116f27a4,
			name: "compra"
		},
		{
			path: "/boletos/agregar",
			component: _70c30b3a,
			name: "boletos-agregar"
		},
		{
			path: "/itinerario/agregarvinculo",
			component: _6965c80a,
			name: "itinerario-agregarvinculo"
		},
		{
			path: "/rutas/agregar",
			component: _79bf1c12,
			name: "rutas-agregar"
		},
		{
			path: "/fecha/agregar",
			component: _5dfabd50,
			name: "fecha-agregar"
		},
		{
			path: "/usuarios/create",
			component: _067cd7d7,
			name: "usuarios-create"
		},
		{
			path: "/mapa/agregar",
			component: _fb1debd8,
			name: "mapa-agregar"
		},
		{
			path: "/camiones/Editar",
			component: _bb517d10,
			name: "camiones-Editar"
		},
		{
			path: "/imagen/agregarvinculo",
			component: _d3be4dcc,
			name: "imagen-agregarvinculo"
		},
		{
			path: "/boletos/tipoboleto",
			component: _f415df3e,
			name: "boletos-tipoboleto"
		},
		{
			path: "/paradas/agregar",
			component: _ee65fb82,
			name: "paradas-agregar"
		},
		{
			path: "/boletos/detalleagregar",
			component: _641b3334,
			name: "boletos-detalleagregar"
		},
		{
			path: "/rutas/agregarvinculo",
			component: _56cc0bee,
			name: "rutas-agregarvinculo"
		},
		{
			path: "/mapa/ruta",
			component: _40efa7ea,
			name: "mapa-ruta"
		},
		{
			path: "/paradas/agregarvinculo",
			component: _40044921,
			name: "paradas-agregarvinculo"
		},
		{
			path: "/itinerario/agregar",
			component: _648850a5,
			name: "itinerario-agregar"
		},
		{
			path: "/boletos/detalle",
			component: _414b207b,
			name: "boletos-detalle"
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
			path: "/horario/agregar",
			component: _286df593,
			name: "horario-agregar"
		},
		{
			path: "/compras/tipoboleto",
			component: _7564b404,
			name: "compras-tipoboleto"
		},
		{
			path: "/compras/detalle",
			component: _90b05090,
			name: "compras-detalle"
		},
		{
			path: "/rutas/vinculo",
			component: _6f72d843,
			name: "rutas-vinculo"
		},
		{
			path: "/itinerario/vinculo",
			component: _5a3c0cd6,
			name: "itinerario-vinculo"
		},
		{
			path: "/mural/editar",
			component: _202adfca,
			name: "mural-editar"
		},
		{
			path: "/compras/agregar",
			component: _3dfb31a0,
			name: "compras-agregar"
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
			path: "/imagen/agregar",
			component: _5bbb8866,
			name: "imagen-agregar"
		},
		{
			path: "/boletos/tipoboletoeditar",
			component: _4220c048,
			name: "boletos-tipoboletoeditar"
		},
		{
			path: "/narrativa/agregar",
			component: _b5c63df2,
			name: "narrativa-agregar"
		},
		{
			path: "/precio/editar",
			component: _83751d52,
			name: "precio-editar"
		},
		{
			path: "/compras/detalleagregar",
			component: _05fa4d57,
			name: "compras-detalleagregar"
		},
		{
			path: "/lugares/agregar",
			component: _46b85fb8,
			name: "lugares-agregar"
		},
		{
			path: "/lugares/tipolugar",
			component: _9beddfd8,
			name: "lugares-tipolugar"
		},
		{
			path: "/imagen/vinculo",
			component: _516f4497,
			name: "imagen-vinculo"
		},
		{
			path: "/paradas/vinculo",
			component: _7e80be70,
			name: "paradas-vinculo"
		},
		{
			path: "/compras/tipoboletoeditar",
			component: _f51e8582,
			name: "compras-tipoboletoeditar"
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
			path: "/",
			component: _d865cc28,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
