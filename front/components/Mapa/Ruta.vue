<template>
    <div class="container">
      <br>
      <div>
    <div class="row">
    <!--Buscador-->
    <div class="col">
      <form class="form-inline">
        <input class="form-control mr-sm-2 sombra" type="search" placeholder="Ingrese texto a buscar" aria-label="Search">
        <button class="btn btn-light my-2 my-sm-0 sombra" type="submit"><img src="@/static/magnifier.png" width="20" height="20"></button> 
      </form>
    </div>
    <!--Agregar-->
      <div class = "col text-right">
        <nuxt-link :to="{ name: 'mapa-agregar' }" replace>
        <button type="button" class="btn btn-success shadow">Agregar punto al Tour</button>
        </nuxt-link> 
      </div>
    </div>
    <!--Tabla-->
    <table class="table mt-3">
      <thead class="bg-success">
        <tr class="sombra">
          <th scope="col">Nombre del Tour</th>
          <th scope="col">Nombre del lugar</th>
          <th scope="col">Editar</th>
          <th scope="col">Borrar</th>
        </tr>
      </thead>
        <tbody class="sombra">
          <tr v-for="tour_place in this.$store.state.tour_places" :key='tour_place.id'>
            <td v-for="tour in $store.state.tours" :key="tour.id" v-if="tour_place.tour_id == tour.id">{{ tour.name }}</td>
            <td v-for="place in $store.state.places" :key="place.id" v-if="tour_place.place_id == place.id">{{ place.name }}</td>
            <td><button class="btn btn-outline-info" type="button" @click="editTour_placeAction(tour_place.id)"><img src="@/static/pencil.png"></button></td>
            <td><button class="btn btn-outline-danger" type="button" @click="deleteTour_placeAction(tour_place.id)"><img src="@/static/basurero.png"></button></td>
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
    async getTour_places() {
      await axios({
        method: "get",
        url: "http://principal-arena-219118.appspot.com/api/tour_place"
      })
        .then(
          function(response) {
            console.log("response");
            console.log(response);
            this.$store.commit({
              type: "storeTour_places",
              tour_places: response.data
            });
          }.bind(this)
        )
        .catch(function(error) {
          console.log("error");
          console.log(error);
        });
    },
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
    async getPlaces() {
      await axios({
        method: "get",
        url: "http://principal-arena-219118.appspot.com/api/place"
      })
        .then(
          function(response) {
            console.log("response");
            console.log(response);
            this.$store.commit({
              type: "storePlaces",
              places: response.data
            });
          }.bind(this)
        )
        .catch(function(error) {
          console.log("error");
          console.log(error);
        });
    },
    async deleteTour_place(id) {
      console.log("Delete ticket type");
      await axios({
        method: "delete",
        url: "http://principal-arena-219118.appspot.com/api/tour_place/" + id,
        data: {
          id: id
        }
      })
        .then(
          function(response) {
            console.log(response);
            this.getTour_places();
          }.bind(this)
        )
        .catch(function(error) {
          console.log("error");
          console.log(error);
        });
    },
    editTour_placeAction(id) {
      //send to create view
      this.$router.push({ name: "mapa-agregar", params: { idTour_place: id } });
    },
    deleteTour_placeAction(id) {
      this.deleteTour_place(id);
    }
  },
  created: function() {
    this.getTours();
    this.getPlaces();
    this.getTour_places();
  }
};
</script>
  
  <style>
  .sombra {
  box-shadow: 0 2px 6px rgba(39, 39, 39, 0.13), 0 2px 6px rgba(39, 39, 39, 0.13);
}
</style>