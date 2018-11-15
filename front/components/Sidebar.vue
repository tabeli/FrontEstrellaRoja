<template>
 <div>
    <div id="sidenav" class="sidenav">
      <ul>
        <li>
      <nuxt-link :to="{ name: 'usuarios'}" replace>
        <a><img src="@/static/user_white.png" height="20"> Usuarios</a>
      </nuxt-link>
        </li>
        <li>
      <nuxt-link :to="{ name: 'rutas'}" replace>
        <a><img src="@/static/tour_white.png" height="25"> Tours</a>
      </nuxt-link>
        </li>
        <li>
      <nuxt-link :to="{ name: 'camiones'}" replace>
        <a><img src="@/static/bus.png" height="20"> Camiones</a>
      </nuxt-link>
        </li>
        <li>
      <nuxt-link :to="{ name: 'boletos'}" replace>
        <a><img src="@/static/compra.png" height="25"> Compras</a>
      </nuxt-link>
        </li>        
        <li>
      <nuxt-link :to="{ name: 'boletos'}" replace>
        <a><img src="@/static/ticket.png" height="25"> Boletos</a>
      </nuxt-link>
        </li>
        <li>
      <nuxt-link :to="{ name: 'precio'}" replace>
        <a><img src="@/static/money.png" height="20"> Precios</a>
      </nuxt-link>
        </li>
        <li>
      <nuxt-link :to="{ name: 'paradas'}" replace>
        <a><img src="@/static/placeholder.png" height="25"> Paradas</a>
      </nuxt-link>
        </li>
        <li>
      <nuxt-link :to="{ name: 'lugares'}" replace>
        <a><img src="@/static/placeholderInterest.png" height="25"> Lugares</a>
      </nuxt-link>
        </li>
        <li>
      <nuxt-link :to="{ name: 'mural'}" replace>
        <a><img src="@/static/paint.png" height="25"> Murales</a>
      </nuxt-link>
        </li>
        <li>
      <nuxt-link :to="{ name: 'horario'}" replace>
        <a><img src="@/static/clock.png" height="20"> Horarios</a>
      </nuxt-link>
        </li>
        <li>
      <nuxt-link :to="{ name: 'fecha'}" replace>
        <a><img src="@/static/calendar.png" height="20"> Fechas</a>
      </nuxt-link>
        </li>
        <li>
      <nuxt-link :to="{ name: 'itinerario'}" replace>
        <a><img src="@/static/schedule.png" height="20"> Itinerarios</a>
      </nuxt-link>
        </li>
        <li>
      <nuxt-link :to="{ name: 'narrativa'}" replace>
        <a><img src="@/static/speaker.png" height="20"> Narrativas</a>
      </nuxt-link>
        </li>
        <li>
      <nuxt-link :to="{ name: 'imagen'}" replace>
        <a><img src="@/static/image.png" height="20"> Imagenes</a>
      </nuxt-link>
        </li>
        <li>
      <nuxt-link :to="{ name: 'mapa'}" replace>
        <a><img src="@/static/map.png" height="25"> Mapa</a>
      </nuxt-link>
        </li>
    </ul>
    </div>
  </div>
</template>

<script>
export default {
  methods: {}
  /*components: {
    Logo
  }*/
};
</script>

<style>
.sidenav {
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #043764;
  background-image: linear-gradient(315deg, #043764 0%, #3C8BD8 74%);
  overflow-x: hidden;
  padding-top: 20px;
  box-shadow: 0 12px 20px gray, 0 15px 12px #043764;
}


.sidenav a {
  padding: 8.5px 10px 3px 8px;
  text-decoration: none;
  font-size: 15px;
  color: #ffffff;
  display: inline-block;
  text-align: justify;
}

.sidenav li:hover {
  color: #f1f1f1;
  background-color: rgba(0, 0, 0, 0.489);
  border-left: 5px solid #ea1b75;
  box-shadow: 0 3px 6px rgba(39, 39, 39, 0.13), 0 3px 6px rgba(39, 39, 39, 0.13);
}

@media screen and (max-height: 450px) {
  .sidenav {
    padding-top: 15px;
  }
  .sidenav a {
    font-size: 18px;
  }
}
.margen {
  margin-right: 5px;
}

.sidenav ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sidenav li {
  border: 0px solid #3C8BD8;
}
</style>
