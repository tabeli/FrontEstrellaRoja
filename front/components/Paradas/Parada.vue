<template>
    <div class="container">
      
      <br>
      <div class="mt-5">
    <div class="row">
    <!--Buscador-->
    <!--<div class="col">
      <form class="form-inline">
        <input class="form-control mr-sm-1 sombra" type="search" placeholder="Ingrese texto a buscar" aria-label="Search">
        <button class="btn btn-light my-2 my-sm-0 sombra " type="submit"><img src="@/static/magnifier.png" width="20" height="20"></button> 
      </form>
    </div>-->
    <!--Activar/Desactivar paradas-->
      <!--<div id="switch" class="col text-center ">
        <label>Paradas Desactivadas/Activadas</label>
        <label class="switch">
            <input type="checkbox">
            <span class="slider round shadow"></span>
        </label>
      </div>-->
      <!-- Vincular parada y tour-->
      <div class = "col text-right">
        <nuxt-link :to="{ name: 'paradas-vinculo' }" replace>
        <button type="button" class="btn btn-success text-right shadow">Agregar paradas al Tour</button>
        </nuxt-link> 
      </div>
    <!--Agregar-->
      <div class = "col text-right">
        <nuxt-link :to="{ name: 'paradas-agregar' }" replace>
        <button type="button" class="btn btn-success text-right shadow">Agregar</button>
        </nuxt-link> 
      </div>
    </div>
    <!--Tabla-->
    <table class="table mt-3">
      <thead class="bg-success text-center">
        <tr class="sombra">
          <th scope="col">Id</th>
          <th scope="col">Nombre</th>
          <th scope="col">Longitud</th>
          <th scope="col">Latitud</th>
          <th scope="col">Descripcion</th>
          <th scope="coll">Imágen</th>
          <th scope="col">Editar</th>
          <th scope="col">Borrar</th>
        </tr>
      </thead>
        <tbody class="sombra text-align">
          <tr v-for="stop in this.$store.state.stops" :key='stop.id'>
            <th>{{ stop.id }}</th>
            <th>{{ stop.name }}</th>
            <td>{{ stop.longitude }}</td>
            <td>{{ stop.latitude }}</td>
            <td>{{ stop.description }}</td>
            <td>{{ stop.image_path }}</td>
            <td><button class="btn btn-outline-info" type="button" @click="editStopAction(stop.id)"><img src="@/static/pencil.png"></button></td>
            <td><button class="btn btn-outline-danger" type="button" @click="deleteStopAction(stop.id)"><img src="@/static/basurero.png"></button></td>
          </tr>
        </tbody>
    </table>
  </div> 
    </div>
  </template>
  
  <script>
import axios from "axios";

export default {
  methods: {
    async getStops() {
      await axios({
        method: "get",
        url: "https://adsoft-01.appspot.com/api/stop"
      })
        .then(
          function(response) {
            console.log("response");
            console.log(response);
            this.$store.commit({
              type: "storeStops",
              stops: response.data
            });
          }.bind(this)
        )
        .catch(function(error) {
          console.log("error");
          console.log(error);
        });
    },
    async deleteStop(id) {
      console.log("Delete stop");
      await axios({
        method: "delete",
        url: "https://adsoft-01.appspot.com/api/stop/" + id,
        data: {
          id: id
        }
      })
        .then(
          function(response) {
            console.log(response);
            this.getStops();
          }.bind(this)
        )
        .catch(function(error) {
          console.log(error);
        });
    },
    editStopAction(id) {
      //send to create view
      this.$router.push({ name: "paradas-agregar", params: { idStop : id } });
    },
    deleteStopAction(id) {
      this.deleteStop(id);
    }
  },
  created: function() {
    this.getStops();
  }
};
  </script>
  
  <style>
  .switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}
.sombra {
  box-shadow: 0 2px 6px rgba(39, 39, 39, 0.13), 0 2px 6px rgba(39, 39, 39, 0.13);
}

.bg-success {
  color: #ffffff;
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