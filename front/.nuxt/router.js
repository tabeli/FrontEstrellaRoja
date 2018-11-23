import Vue from 'vue'
import Router from 'vue-router'

<<<<<<< HEAD
const _c8562872 = () => import('..\\pages\\usuarios\\index.vue' /* webpackChunkName: "pages_usuarios_index" */).then(m => m.default || m)
const _7f620d72 = () => import('..\\pages\\mapa\\index.vue' /* webpackChunkName: "pages_mapa_index" */).then(m => m.default || m)
const _65f8b018 = () => import('..\\pages\\itinerario\\index.vue' /* webpackChunkName: "pages_itinerario_index" */).then(m => m.default || m)
const _6f110032 = () => import('..\\pages\\paradas\\index.vue' /* webpackChunkName: "pages_paradas_index" */).then(m => m.default || m)
const _131593d3 = () => import('..\\pages\\compras\\index.vue' /* webpackChunkName: "pages_compras_index" */).then(m => m.default || m)
const _769b8d66 = () => import('..\\pages\\precio\\index.vue' /* webpackChunkName: "pages_precio_index" */).then(m => m.default || m)
const _2a25918b = () => import('..\\pages\\fecha\\index.vue' /* webpackChunkName: "pages_fecha_index" */).then(m => m.default || m)
const _5f5572c5 = () => import('..\\pages\\rutas\\index.vue' /* webpackChunkName: "pages_rutas_index" */).then(m => m.default || m)
const _0435f6da = () => import('..\\pages\\mural\\index.vue' /* webpackChunkName: "pages_mural_index" */).then(m => m.default || m)
const _3868e419 = () => import('..\\pages\\imagen\\index.vue' /* webpackChunkName: "pages_imagen_index" */).then(m => m.default || m)
const _c4327b82 = () => import('..\\pages\\Login\\index.vue' /* webpackChunkName: "pages_Login_index" */).then(m => m.default || m)
const _633eb886 = () => import('..\\pages\\horario\\index.vue' /* webpackChunkName: "pages_horario_index" */).then(m => m.default || m)
const _3506d576 = () => import('..\\pages\\camiones\\index.vue' /* webpackChunkName: "pages_camiones_index" */).then(m => m.default || m)
const _19d9f0fa = () => import('..\\pages\\narrativa\\index.vue' /* webpackChunkName: "pages_narrativa_index" */).then(m => m.default || m)
const _0cf767eb = () => import('..\\pages\\lugares\\index.vue' /* webpackChunkName: "pages_lugares_index" */).then(m => m.default || m)
const _bb517d10 = () => import('..\\pages\\camiones\\Editar.vue' /* webpackChunkName: "pages_camiones_Editar" */).then(m => m.default || m)
const _ee65fb82 = () => import('..\\pages\\paradas\\agregar.vue' /* webpackChunkName: "pages_paradas_agregar" */).then(m => m.default || m)
const _5dfabd50 = () => import('..\\pages\\fecha\\agregar.vue' /* webpackChunkName: "pages_fecha_agregar" */).then(m => m.default || m)
const _7564b404 = () => import('..\\pages\\compras\\tipoboleto.vue' /* webpackChunkName: "pages_compras_tipoboleto" */).then(m => m.default || m)
const _067cd7d7 = () => import('..\\pages\\usuarios\\create.vue' /* webpackChunkName: "pages_usuarios_create" */).then(m => m.default || m)
const _266f9050 = () => import('..\\pages\\rutas\\editar.vue' /* webpackChunkName: "pages_rutas_editar" */).then(m => m.default || m)
const _470a007d = () => import('..\\pages\\itinerario\\agregartour.vue' /* webpackChunkName: "pages_itinerario_agregartour" */).then(m => m.default || m)
const _202adfca = () => import('..\\pages\\mural\\editar.vue' /* webpackChunkName: "pages_mural_editar" */).then(m => m.default || m)
const _b5c63df2 = () => import('..\\pages\\narrativa\\agregar.vue' /* webpackChunkName: "pages_narrativa_agregar" */).then(m => m.default || m)
const _46b85fb8 = () => import('..\\pages\\lugares\\agregar.vue' /* webpackChunkName: "pages_lugares_agregar" */).then(m => m.default || m)
const _502ddb1a = () => import('..\\pages\\precio\\agregar.vue' /* webpackChunkName: "pages_precio_agregar" */).then(m => m.default || m)
const _286df593 = () => import('..\\pages\\horario\\agregar.vue' /* webpackChunkName: "pages_horario_agregar" */).then(m => m.default || m)
const _648850a5 = () => import('..\\pages\\itinerario\\agregar.vue' /* webpackChunkName: "pages_itinerario_agregar" */).then(m => m.default || m)
const _3dfb31a0 = () => import('..\\pages\\compras\\agregar.vue' /* webpackChunkName: "pages_compras_agregar" */).then(m => m.default || m)
const _79bf1c12 = () => import('..\\pages\\rutas\\agregar.vue' /* webpackChunkName: "pages_rutas_agregar" */).then(m => m.default || m)
const _9a9d1b40 = () => import('..\\pages\\mural\\agregar.vue' /* webpackChunkName: "pages_mural_agregar" */).then(m => m.default || m)
const _57034fea = () => import('..\\pages\\paradas\\editar.vue' /* webpackChunkName: "pages_paradas_editar" */).then(m => m.default || m)
const _83751d52 = () => import('..\\pages\\precio\\editar.vue' /* webpackChunkName: "pages_precio_editar" */).then(m => m.default || m)
const _f51e8582 = () => import('..\\pages\\compras\\tipoboletoeditar.vue' /* webpackChunkName: "pages_compras_tipoboletoeditar" */).then(m => m.default || m)
const _76114672 = () => import('..\\pages\\camiones\\Agregar.vue' /* webpackChunkName: "pages_camiones_Agregar" */).then(m => m.default || m)
const _5bbb8866 = () => import('..\\pages\\imagen\\agregar.vue' /* webpackChunkName: "pages_imagen_agregar" */).then(m => m.default || m)
const _6336357b = () => import('..\\pages\\lugares\\tipolugaragregar.vue' /* webpackChunkName: "pages_lugares_tipolugaragregar" */).then(m => m.default || m)
const _9beddfd8 = () => import('..\\pages\\lugares\\tipolugar.vue' /* webpackChunkName: "pages_lugares_tipolugar" */).then(m => m.default || m)
const _d865cc28 = () => import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */).then(m => m.default || m)
=======
const _a56e2aa0 = () => import('../pages/usuarios/index.vue' /* webpackChunkName: "pages/usuarios/index" */).then(m => m.default || m)
const _129abe54 = () => import('../pages/Login/index.vue' /* webpackChunkName: "pages/Login/index" */).then(m => m.default || m)
const _047c0646 = () => import('../pages/boletos/index.vue' /* webpackChunkName: "pages/boletos/index" */).then(m => m.default || m)
const _50d7e281 = () => import('../pages/paradas/index.vue' /* webpackChunkName: "pages/paradas/index" */).then(m => m.default || m)
const _63b10539 = () => import('../pages/narrativa/index.vue' /* webpackChunkName: "pages/narrativa/index" */).then(m => m.default || m)
const _08831de9 = () => import('../pages/compra/index.vue' /* webpackChunkName: "pages/compra/index" */).then(m => m.default || m)
const _7bf0e50e = () => import('../pages/rutas/index.vue' /* webpackChunkName: "pages/rutas/index" */).then(m => m.default || m)
const _09cdc0b0 = () => import('../pages/lugares/index.vue' /* webpackChunkName: "pages/lugares/index" */).then(m => m.default || m)
const _b835c882 = () => import('../pages/itinerario/index.vue' /* webpackChunkName: "pages/itinerario/index" */).then(m => m.default || m)
const _693e3d00 = () => import('../pages/mural/index.vue' /* webpackChunkName: "pages/mural/index" */).then(m => m.default || m)
const _16a7cfad = () => import('../pages/horario/index.vue' /* webpackChunkName: "pages/horario/index" */).then(m => m.default || m)
const _b131cd1c = () => import('../pages/camiones/index.vue' /* webpackChunkName: "pages/camiones/index" */).then(m => m.default || m)
const _0eded588 = () => import('../pages/fecha/index.vue' /* webpackChunkName: "pages/fecha/index" */).then(m => m.default || m)
const _762a0630 = () => import('../pages/mapa/index.vue' /* webpackChunkName: "pages/mapa/index" */).then(m => m.default || m)
const _3e2af5b1 = () => import('../pages/precio/index.vue' /* webpackChunkName: "pages/precio/index" */).then(m => m.default || m)
const _5e6306c4 = () => import('../pages/imagen/index.vue' /* webpackChunkName: "pages/imagen/index" */).then(m => m.default || m)
const _334b1c35 = () => import('../pages/lugares/agregar.vue' /* webpackChunkName: "pages/lugares/agregar" */).then(m => m.default || m)
const _2f31802a = () => import('../pages/boletos/agregar.vue' /* webpackChunkName: "pages/boletos/agregar" */).then(m => m.default || m)
const _c9d943fc = () => import('../pages/mapa/ruta.vue' /* webpackChunkName: "pages/mapa/ruta" */).then(m => m.default || m)
const _66d0cfdc = () => import('../pages/imagen/vinculo.vue' /* webpackChunkName: "pages/imagen/vinculo" */).then(m => m.default || m)
const _2388b60e = () => import('../pages/usuarios/create.vue' /* webpackChunkName: "pages/usuarios/create" */).then(m => m.default || m)
const _6c7ada15 = () => import('../pages/fecha/agregar.vue' /* webpackChunkName: "pages/fecha/agregar" */).then(m => m.default || m)
const _022aa07d = () => import('../pages/mural/editar.vue' /* webpackChunkName: "pages/mural/editar" */).then(m => m.default || m)
const _2dbc80bd = () => import('../pages/mapa/agregar.vue' /* webpackChunkName: "pages/mapa/agregar" */).then(m => m.default || m)
const _bdedac16 = () => import('../pages/boletos/tipoboletoeditar.vue' /* webpackChunkName: "pages/boletos/tipoboletoeditar" */).then(m => m.default || m)
const _2b93bf9c = () => import('../pages/paradas/editar.vue' /* webpackChunkName: "pages/paradas/editar" */).then(m => m.default || m)
const _10a9c80d = () => import('../pages/mural/agregar.vue' /* webpackChunkName: "pages/mural/agregar" */).then(m => m.default || m)
const _d43bc876 = () => import('../pages/rutas/agregarvinculo.vue' /* webpackChunkName: "pages/rutas/agregarvinculo" */).then(m => m.default || m)
const _24ae0635 = () => import('../pages/imagen/agregarvinculo.vue' /* webpackChunkName: "pages/imagen/agregarvinculo" */).then(m => m.default || m)
const _0d80d804 = () => import('../pages/precio/agregar.vue' /* webpackChunkName: "pages/precio/agregar" */).then(m => m.default || m)
const _ae43b37c = () => import('../pages/boletos/detalle.vue' /* webpackChunkName: "pages/boletos/detalle" */).then(m => m.default || m)
const _639b0eaf = () => import('../pages/rutas/editar.vue' /* webpackChunkName: "pages/rutas/editar" */).then(m => m.default || m)
const _7642bd5e = () => import('../pages/lugares/tipolugar.vue' /* webpackChunkName: "pages/lugares/tipolugar" */).then(m => m.default || m)
const _1dbd42eb = () => import('../pages/camiones/Editar.vue' /* webpackChunkName: "pages/camiones/Editar" */).then(m => m.default || m)
const _2eb9db28 = () => import('../pages/precio/editar.vue' /* webpackChunkName: "pages/precio/editar" */).then(m => m.default || m)
const _9c5994c4 = () => import('../pages/lugares/tipolugaragregar.vue' /* webpackChunkName: "pages/lugares/tipolugaragregar" */).then(m => m.default || m)
const _711d13ab = () => import('../pages/imagen/agregar.vue' /* webpackChunkName: "pages/imagen/agregar" */).then(m => m.default || m)
const _f5dc4798 = () => import('../pages/itinerario/agregarvinculo.vue' /* webpackChunkName: "pages/itinerario/agregarvinculo" */).then(m => m.default || m)
const _6287aa86 = () => import('../pages/itinerario/vinculo.vue' /* webpackChunkName: "pages/itinerario/vinculo" */).then(m => m.default || m)
const _b424420c = () => import('../pages/horario/agregar.vue' /* webpackChunkName: "pages/horario/agregar" */).then(m => m.default || m)
const _4def22e8 = () => import('../pages/itinerario/agregar.vue' /* webpackChunkName: "pages/itinerario/agregar" */).then(m => m.default || m)
const _07126f8d = () => import('../pages/boletos/detalleagregar.vue' /* webpackChunkName: "pages/boletos/detalleagregar" */).then(m => m.default || m)
const _4571bfca = () => import('../pages/rutas/agregar.vue' /* webpackChunkName: "pages/rutas/agregar" */).then(m => m.default || m)
const _5a0a4768 = () => import('../pages/rutas/vinculo.vue' /* webpackChunkName: "pages/rutas/vinculo" */).then(m => m.default || m)
const _55003cf4 = () => import('../pages/narrativa/agregar.vue' /* webpackChunkName: "pages/narrativa/agregar" */).then(m => m.default || m)
const _0a1848ff = () => import('../pages/paradas/vinculo.vue' /* webpackChunkName: "pages/paradas/vinculo" */).then(m => m.default || m)
const _14648cce = () => import('../pages/paradas/agregar.vue' /* webpackChunkName: "pages/paradas/agregar" */).then(m => m.default || m)
const _35858fb2 = () => import('../pages/paradas/agregarvinculo.vue' /* webpackChunkName: "pages/paradas/agregarvinculo" */).then(m => m.default || m)
const _676b735f = () => import('../pages/camiones/Agregar.vue' /* webpackChunkName: "pages/camiones/Agregar" */).then(m => m.default || m)
const _d7bb3d8c = () => import('../pages/boletos/tipoboleto.vue' /* webpackChunkName: "pages/boletos/tipoboleto" */).then(m => m.default || m)
const _236ae59a = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)
>>>>>>> 5790715379f5391af2a3bf01735e77cf78f6608c

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
<<<<<<< HEAD
			component: _c8562872,
			name: "usuarios"
		},
		{
			path: "/mapa",
			component: _7f620d72,
			name: "mapa"
		},
		{
			path: "/itinerario",
			component: _65f8b018,
			name: "itinerario"
		},
		{
			path: "/paradas",
			component: _6f110032,
			name: "paradas"
		},
		{
			path: "/compras",
			component: _131593d3,
			name: "compras"
		},
		{
			path: "/precio",
			component: _769b8d66,
			name: "precio"
		},
		{
			path: "/fecha",
			component: _2a25918b,
			name: "fecha"
		},
		{
			path: "/rutas",
			component: _5f5572c5,
			name: "rutas"
		},
		{
			path: "/mural",
			component: _0435f6da,
			name: "mural"
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
			path: "/horario",
			component: _633eb886,
=======
			component: _a56e2aa0,
			name: "usuarios"
		},
		{
			path: "/Login",
			component: _129abe54,
			name: "Login"
		},
		{
			path: "/boletos",
			component: _047c0646,
			name: "boletos"
		},
		{
			path: "/paradas",
			component: _50d7e281,
			name: "paradas"
		},
		{
			path: "/narrativa",
			component: _63b10539,
			name: "narrativa"
		},
		{
			path: "/compra",
			component: _08831de9,
			name: "compra"
		},
		{
			path: "/rutas",
			component: _7bf0e50e,
			name: "rutas"
		},
		{
			path: "/lugares",
			component: _09cdc0b0,
			name: "lugares"
		},
		{
			path: "/itinerario",
			component: _b835c882,
			name: "itinerario"
		},
		{
			path: "/mural",
			component: _693e3d00,
			name: "mural"
		},
		{
			path: "/horario",
			component: _16a7cfad,
>>>>>>> 5790715379f5391af2a3bf01735e77cf78f6608c
			name: "horario"
		},
		{
			path: "/camiones",
<<<<<<< HEAD
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
			path: "/camiones/Editar",
			component: _bb517d10,
			name: "camiones-Editar"
		},
		{
			path: "/paradas/agregar",
			component: _ee65fb82,
			name: "paradas-agregar"
		},
		{
			path: "/fecha/agregar",
			component: _5dfabd50,
			name: "fecha-agregar"
		},
		{
			path: "/compras/tipoboleto",
			component: _7564b404,
			name: "compras-tipoboleto"
		},
		{
			path: "/usuarios/create",
			component: _067cd7d7,
			name: "usuarios-create"
		},
		{
			path: "/rutas/editar",
			component: _266f9050,
			name: "rutas-editar"
		},
		{
			path: "/itinerario/agregartour",
			component: _470a007d,
			name: "itinerario-agregartour"
		},
		{
			path: "/mural/editar",
			component: _202adfca,
			name: "mural-editar"
		},
		{
			path: "/narrativa/agregar",
			component: _b5c63df2,
			name: "narrativa-agregar"
		},
		{
			path: "/lugares/agregar",
			component: _46b85fb8,
			name: "lugares-agregar"
		},
		{
			path: "/precio/agregar",
			component: _502ddb1a,
=======
			component: _b131cd1c,
			name: "camiones"
		},
		{
			path: "/fecha",
			component: _0eded588,
			name: "fecha"
		},
		{
			path: "/mapa",
			component: _762a0630,
			name: "mapa"
		},
		{
			path: "/precio",
			component: _3e2af5b1,
			name: "precio"
		},
		{
			path: "/imagen",
			component: _5e6306c4,
			name: "imagen"
		},
		{
			path: "/lugares/agregar",
			component: _334b1c35,
			name: "lugares-agregar"
		},
		{
			path: "/boletos/agregar",
			component: _2f31802a,
			name: "boletos-agregar"
		},
		{
			path: "/mapa/ruta",
			component: _c9d943fc,
			name: "mapa-ruta"
		},
		{
			path: "/imagen/vinculo",
			component: _66d0cfdc,
			name: "imagen-vinculo"
		},
		{
			path: "/usuarios/create",
			component: _2388b60e,
			name: "usuarios-create"
		},
		{
			path: "/fecha/agregar",
			component: _6c7ada15,
			name: "fecha-agregar"
		},
		{
			path: "/mural/editar",
			component: _022aa07d,
			name: "mural-editar"
		},
		{
			path: "/mapa/agregar",
			component: _2dbc80bd,
			name: "mapa-agregar"
		},
		{
			path: "/boletos/tipoboletoeditar",
			component: _bdedac16,
			name: "boletos-tipoboletoeditar"
		},
		{
			path: "/paradas/editar",
			component: _2b93bf9c,
			name: "paradas-editar"
		},
		{
			path: "/mural/agregar",
			component: _10a9c80d,
			name: "mural-agregar"
		},
		{
			path: "/rutas/agregarvinculo",
			component: _d43bc876,
			name: "rutas-agregarvinculo"
		},
		{
			path: "/imagen/agregarvinculo",
			component: _24ae0635,
			name: "imagen-agregarvinculo"
		},
		{
			path: "/precio/agregar",
			component: _0d80d804,
>>>>>>> 5790715379f5391af2a3bf01735e77cf78f6608c
			name: "precio-agregar"
		},
		{
			path: "/boletos/detalle",
			component: _ae43b37c,
			name: "boletos-detalle"
		},
		{
			path: "/rutas/editar",
			component: _639b0eaf,
			name: "rutas-editar"
		},
		{
			path: "/lugares/tipolugar",
			component: _7642bd5e,
			name: "lugares-tipolugar"
		},
		{
			path: "/camiones/Editar",
			component: _1dbd42eb,
			name: "camiones-Editar"
		},
		{
			path: "/precio/editar",
			component: _2eb9db28,
			name: "precio-editar"
		},
		{
			path: "/lugares/tipolugaragregar",
			component: _9c5994c4,
			name: "lugares-tipolugaragregar"
		},
		{
			path: "/imagen/agregar",
			component: _711d13ab,
			name: "imagen-agregar"
		},
		{
			path: "/itinerario/agregarvinculo",
			component: _f5dc4798,
			name: "itinerario-agregarvinculo"
		},
		{
			path: "/itinerario/vinculo",
			component: _6287aa86,
			name: "itinerario-vinculo"
		},
		{
			path: "/horario/agregar",
<<<<<<< HEAD
			component: _286df593,
=======
			component: _b424420c,
>>>>>>> 5790715379f5391af2a3bf01735e77cf78f6608c
			name: "horario-agregar"
		},
		{
			path: "/itinerario/agregar",
<<<<<<< HEAD
			component: _648850a5,
			name: "itinerario-agregar"
		},
		{
			path: "/compras/agregar",
			component: _3dfb31a0,
			name: "compras-agregar"
		},
		{
			path: "/rutas/agregar",
			component: _79bf1c12,
			name: "rutas-agregar"
		},
		{
			path: "/mural/agregar",
			component: _9a9d1b40,
			name: "mural-agregar"
		},
		{
			path: "/paradas/editar",
			component: _57034fea,
			name: "paradas-editar"
		},
		{
			path: "/precio/editar",
			component: _83751d52,
			name: "precio-editar"
		},
		{
			path: "/compras/tipoboletoeditar",
			component: _f51e8582,
			name: "compras-tipoboletoeditar"
		},
		{
			path: "/camiones/Agregar",
			component: _76114672,
			name: "camiones-Agregar"
		},
		{
			path: "/imagen/agregar",
			component: _5bbb8866,
			name: "imagen-agregar"
		},
		{
			path: "/lugares/tipolugaragregar",
			component: _6336357b,
			name: "lugares-tipolugaragregar"
		},
		{
			path: "/lugares/tipolugar",
			component: _9beddfd8,
			name: "lugares-tipolugar"
		},
		{
			path: "/",
			component: _d865cc28,
=======
			component: _4def22e8,
			name: "itinerario-agregar"
		},
		{
			path: "/boletos/detalleagregar",
			component: _07126f8d,
			name: "boletos-detalleagregar"
		},
		{
			path: "/rutas/agregar",
			component: _4571bfca,
			name: "rutas-agregar"
		},
		{
			path: "/rutas/vinculo",
			component: _5a0a4768,
			name: "rutas-vinculo"
		},
		{
			path: "/narrativa/agregar",
			component: _55003cf4,
			name: "narrativa-agregar"
		},
		{
			path: "/paradas/vinculo",
			component: _0a1848ff,
			name: "paradas-vinculo"
		},
		{
			path: "/paradas/agregar",
			component: _14648cce,
			name: "paradas-agregar"
		},
		{
			path: "/paradas/agregarvinculo",
			component: _35858fb2,
			name: "paradas-agregarvinculo"
		},
		{
			path: "/camiones/Agregar",
			component: _676b735f,
			name: "camiones-Agregar"
		},
		{
			path: "/boletos/tipoboleto",
			component: _d7bb3d8c,
			name: "boletos-tipoboleto"
		},
		{
			path: "/",
			component: _236ae59a,
>>>>>>> 5790715379f5391af2a3bf01735e77cf78f6608c
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
