<template>
  <div class="container">
    <br>
    <div class="mt-5">
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
        <nuxt-link :to="{ name: 'mural-agregar' }" replace>
        <button type="button" class="btn btn-info text-right">Agregar</button>
        </nuxt-link> 
      </div>
    </div>
    <!--Tabla-->
    <table class="table mt-3">
      <thead class="bg-success">
        <tr>
          <th scope="col">Titulo</th>
          <th scope="col">Nombre del autor</th>
          <th scope="col">Apellido del autor</th>
          <th scope="col">Descripción</th>
          <th scope="col">Editar</th>
          <th scope="col">Borrar</th>
        </tr>
      </thead>
        <tbody>
          <tr>
            <th scope="row">Blah</th>
            <td>Abigail</td>
            <td>Gonzalez Hidalgo</td>
            <td>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda, ad.</td>
            <nuxt-link :to="{ name: 'mural-editar' }">
            <td><img src="@/static/pencil.png"></td>
            </nuxt-link>
            <td><img src="@/static/basurero.png"></td>
          </tr>
        </tbody>
    </table>
  </div> 
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


