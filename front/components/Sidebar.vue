<template>
  <div>
    <div id="sidenav">
      <nuxt-link :to="{ name: 'usuarios'}" replace>
        <a>Usuarios</a>
      </nuxt-link>
      <nuxt-link :to="{ name: 'rutas'}" replace>
        <a>Rutas</a>
      </nuxt-link>
      <nuxt-link :to="{ name: 'camiones'}" replace>
        <a>Camiones</a>
      </nuxt-link>
      <nuxt-link :to="{ name: 'boletos'}" replace>
        <a>Boletos</a>
      </nuxt-link>
      
      
      
    </div>
  </div>
</template>

<script>
export default {
  methods: {
  }
  /*components: {
    Logo
  }*/
}
</script>

<style>


#sidenav {
    height: 100%;
    width: 8%;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: #111;
    overflow-x: hidden;
    padding-top: 20px;
}

#sidenav a {
    padding: 6px 8px 6px 5px;
    text-decoration: none;
    font-size: 15px;
    color: #818181;
    display: inline-block;
}

#sidenav a:hover {
    color: #f1f1f1;
}

@media screen and (max-height: 450px) {
    .sidenav {padding-top: 15px;}
    .sidenav a {font-size: 18px;}
}


</style>
