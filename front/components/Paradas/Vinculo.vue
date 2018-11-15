<template>
    <div class="container">
      <br>
      <div>
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
        <nuxt-link :to="{ name: 'paradas-agregarvinculo' }" replace>
        <button type="button" class="btn btn-info text-right">Agregar</button>
        </nuxt-link> 
      </div>
    </div>
    <!--Tabla-->
    <table class="table mt-3">
      <thead class="bg-success">
        <tr>
          <th scope="col">ID del tour</th>
          <th scope="col">Nombre del Tour</th>
          <th scope="col">ID de la Parada</th>
          <th scope="col">Nombre de la Parada</th>
          <th scope="col">Editar</th>
          <th scope="col">Borrar</th>
        </tr>
      </thead>
        <tbody v-for="tour_stop in this.$store.state.tour_stops" :key='tour_stop.id'>
          <tr>
            <td v-for="tour in $store.state.tours" :key="tour.id" v-if="tour_stop.tour_id == tour.id">{{ tour.id }}</td>
            <td v-for="tour in $store.state.tours" :key="tour.id" v-if="tour_stop.tour_id == tour.id">{{ tour.name }}</td>
            <td v-for="stop in $store.state.stops" :key="stop.id" v-if="tour_stop.stop_id == stop.id">{{ stop.id }}</td>
            <td v-for="stop in $store.state.stops" :key="stop.id" v-if="tour_stop.stop_id == stop.id">{{ stop.name }}</td>
            <td><button class="btn btn-info" type="button" @click="editTour_stopAction(tour_stop.id)"><img src="@/static/pencil.png"></button></td>
            <td><button class="btn btn-info" type="button" @click="deleteTour_stopAction(tour_stop.id)"><img src="@/static/basurero.png"></button></td>
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
    async getTour_stops() {
      await axios({
        method: "get",
        url: "http://principal-arena-219118.appspot.com/api/tour_stop"
      })
        .then(
          function(response) {
            console.log("response");
            console.log(response);
            this.$store.commit({
              type: "storeTour_stops",
              tour_stops: response.data
            });
          }.bind(this)
        )
        .catch(function(error) {
          console.log("error");
          console.log(error);
        });
    },
    async getStops() {
      await axios({
        method: "get",
        url: "http://principal-arena-219118.appspot.com/api/stop"
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
    async deleteTour_stop(id) {
      console.log("Delete tour stop");
      await axios({
        method: "delete",
        url:
          "http://principal-arena-219118.appspot.com/api/tour_stop/" + id,
        data: {
          id: id
        }
      })
        .then(
          function(response) {
            console.log(response);
            this.getTour_stops();
          }.bind(this)
        )
        .catch(function(error) {
          console.log("error");
          console.log(error);
        });
    },
    editTour_stopAction(id) {
      //send to create view
      this.$router.push({
        name: "paradas-agregarvinculo",
        params: { idTour_stop: id }
      });
    },
    deleteTour_stopAction(id) {
      this.deleteTour_stop(id);
    }
  },
  created: function() {
    this.getTour_stops();
    this.getStops();
    this.getTours();
  }
};
</script>
  
  <style>
</style>