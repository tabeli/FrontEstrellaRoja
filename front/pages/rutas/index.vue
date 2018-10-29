<template>
    <div>
      <div class ="row">
          <div class="col-sm-1">
              <Sidebar/>
          </div>
          <div class="col-sm-11">
              <Rutas/>
          </div>
          <!--Buscador-->      
        <div class="container">
          <div class="row">
            <div class="col">
      <form class="form-inline my-5 my-lg-1">
      <input class="form-control mr-sm-2" type="search" placeholder="Ingrese texto a buscar" aria-label="Search">
      <button class="btn btn-outline-danger my-2 my-sm-0" type="submit"><img src="@/assets/magnifier.png" width="20" height="20"></button> 
    </form>
        </div>
<div class="col">

</div>
<!--Agregar-->
<div class="col text-right">
 <button type="button" class="btn btn-outline-primary text-right"><a href="./rutas/agregar.vue">Agregar</a></button>  
</div>
        </div>

 
<!--Tabla contenido-->
      <table class="table mt-3">
        <thead class="thead-dark">
          <tr>
            <th scope="col">id</th>
            <th scope="col">Nombre</th>
            <th scope="col">Imagen</th>
            <th scope="col">Descripcion</th>
            <th scope="col">Editar</th>
            <th scope="col">Borrar</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Puebla fascinante</td>
            <td><img src=""></td>
            <td>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae, libero?</td>
            <td><img src="@/assets/pencil.png"></td>
            <td><img src="@/assets/basurero.png"></td>
          </tr>
        </tbody>
      </table>
      </div>
      </div>
    </div>
  </template>
  
  <script>
    import Sidebar from '@/components/Sidebar'
    import Rutas from '@/components/Ruta/Rutas'
  
    export default {
      components: {
        Sidebar,
        Rutas
      }
    }
  </script>
  
  <style>
  
  </style>