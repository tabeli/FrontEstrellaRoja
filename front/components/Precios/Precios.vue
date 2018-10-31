<template>
  <div class="container">
    <div class="row">
    <!--Buscador-->
    <div class="col">
      <form class="form-inline">
        <input class="form-control mr-sm-2" type="search" placeholder="Ingrese texto a buscar" aria-label="Search">
        <button class="btn btn-outline-danger my-2 my-sm-0" type="submit"><img src="@/static/magnifier.png" width="20" height="20"></button> 
      </form>
    </div>
    <!--Agregar-->
      <div class = "col text-right">
        <nuxt-link :to="{ name: 'precio-agregar' }" replace>
        <button type="button" class="btn btn-info text-right">Agregar</button>
        </nuxt-link> 
      </div>
    </div>
    <!--Tabla-->
    <table class="table mt-3">
      <thead class="bg-success">
        <tr>
          <th scope="col">Ruta</th>
          <th scope="col">Tipo de ticket</th>
          <th scope="col">Precio</th>
          <th scope="col">Editar</th>
          <th scope="col">Borrar</th>
        </tr>
      </thead>
        <tbody>
          <tr>
            <th scope="row">Puebla Fascinante</th>
            <td>Adulto</td>
            <td>$80</td>
            <nuxt-link :to="{ name: 'precio-editar' }">
            <td><img src="@/static/pencil.png"></td>
            </nuxt-link>
            <td><img src="@/static/basurero.png"></td>
          </tr>
        </tbody>
    </table>
  </div> 
</template>

<script>
  export default {

  };
</script>

<style>
.container {
    margin-left: 160px; /* Same as the width of the sidenav */
    font-size: 15px; /* Increased text to enable scrolling */
    text-align: center;
    align-content: center;
}
.derecha{
  padding-right: 110px;
  margin-left:  160px;
}
.bg-success {
  color:#FFFFFF
}
</style>


