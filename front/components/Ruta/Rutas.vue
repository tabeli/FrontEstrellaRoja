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
          <tr v-for="tour in this.$store.state.tours" :key='tour.id'>
            <th>{{ tour.name }}</th>
            <th>{{ tour.image_path }}</th>
            <td>{{ tour.description }}</td>
            <td><button class="btn btn-info" type="button" @click="editTourAction(tour.id)"><img src="@/static/pencil.png"></button></td>
            <td><button class="btn btn-info" type="button" @click="deleteTourAction(tour.id)"><img src="@/static/basurero.png"></button></td>
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
    async getTours() {
      await axios({
        method: "get",
        url: "http://principal-arena-219118.appspot.com/api/tour"
      })
        .then(
          function(response) {
            console.log("response");
            console.log(response);
            this.$store.commit({
              type: "storeTours",
              tours: response.data
            });
          }.bind(this)
        )
        .catch(function(error) {
          console.log("error");
          console.log(error);
        });
    },
    async deleteTour(id) {
      console.log("Delete tour");
      await axios({
        method: "delete",
        url: "http://principal-arena-219118.appspot.com/api/tour/" + id,
        data: {
          id: id
        }
      })
        .then(
          function(response) {
            console.log("response");
            console.log(response);
            this.getTours();
          }.bind(this)
        )
        .catch(function(error) {
          console.log("error");
          console.log(error);
        });
    },
    editTourAction(id) {
      //send to create view
      this.$router.push({ name: "rutas-agregar", params: { idTour: id } });
    },
    deleteTourAction(id) {
      this.deleteTour(id);
    }
  },
  created: function() {
    this.getTours();
  }
};
  </script>
  
  <style>
  
  </style>