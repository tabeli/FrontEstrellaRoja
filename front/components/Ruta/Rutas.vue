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
        <nuxt-link :to="{ name: 'rutas-agregar' }" replace>
        <button type="button" class="btn btn-info text-right">Agregar</button>
        </nuxt-link> 
      </div>
    </div>
    <!--Tabla-->
    <table class="table mt-3">
      <thead class="bg-success">
        <tr>
          <th scope="col">Nombre</th>
            <th scope="col">Imagen</th>
            <th scope="col">Descripcion</th>
            <th scope="col">Editar</th>
            <th scope="col">Borrar</th>
        </tr>
      </thead>
        <tbody>
          <tr>
            <th scope="row">Puebla</th>
            <th></th>
            <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ex, unde est veniam voluptatum quis laborum iure! Totam doloremque, facilis asperiores, quaerat officia similique facere mollitia reprehenderit aliquid corporis veritatis!</td>
            <nuxt-link :to="{ name: 'rutas-editar' }">
            <td><img src="@/static/pencil.png"></td>
            </nuxt-link>
            <td><img src="@/static/basurero.png"></td>
          </tr>
        </tbody>
    </table>
  </div> 
  </template>
  
  <script>
  
  </script>
  
  <style>
  
  </style>