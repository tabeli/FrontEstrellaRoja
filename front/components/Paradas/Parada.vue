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
    <!--Activar/Desactivar paradas-->
      <div id="switch" class="col text-center">
        <label>Paradas Desactivadas/Activadas</label>
        <label class="switch">
            <input type="checkbox">
            <span class="slider round"></span>
        </label>
        
      </div>
    <!--Agregar-->
      <div class = "col text-right">
        <nuxt-link :to="{ name: 'paradas-agregar' }" replace>
        <button type="button" class="btn btn-info text-right">Agregar</button>
        </nuxt-link> 
      </div>
    </div>
    <!--Tabla-->
    <table class="table mt-3">
      <thead class="bg-success text-center">
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Nombre</th>
           <th scope="col">Longitud</th>
          <th scope="col">Latitud</th>
          <th scope="col">Descripcion</th>
          <th scope="col">Editar</th>
          <th scope="col">Borrar</th>
        </tr>
      </thead>
        <tbody>
          <tr>
            <th scope="row">6</th>
            <th>Centro pokemon</th>
            <td>51.492065</td>
            <td>6.875778</td>
            <td>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit aliquid, ratione a quo iste omnis fugit deserunt libero aperiam doloremque reiciendis consequuntur necessitatibus dolor explicabo voluptatum maxime qui beatae eligendi.</td>
            <nuxt-link :to="{ name: 'paradas-editar' }">
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
  </script>
  
  <style>
  .switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .5s;
  transition: .5s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #ffcc2f;
}

input:focus + .slider {
  box-shadow: 0 0 1px #ffcc2f;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
  </style>