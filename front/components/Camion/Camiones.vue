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
        <!-- falta el link de agregar -->
        <nuxt-link :to="{ name: 'camiones-Agregar' }" replace>
        <button type="button" class="btn btn-info text-right">Agregar</button>
        </nuxt-link> 
      </div>
    </div>
    <!--Tabla-->
    <table class="table mt-3">
      <thead class="bg-success">
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Tour</th>
          <th scope="col">Mural</th>
          <th scope="col">Capacidad</th>
          <th scope="col">Tickets vendidos</th>
          <th scope="col">Estatus</th>
          <th scope="col">Editar</th>
          <th scope="col">Borrar</th>
        </tr>
      </thead>
        <tbody>
          <tr v-for="bus in this.$store.state.buses" :key='bus.id'>
            <td>{{ bus.id }}</td>
            <td v-for="tour in $store.state.tours" :key='tour.id' v-if="bus.tour_id == tour.id">{{ tour.name }}</td>
            <td v-for="mural in $store.state.murals" :key='mural.id' v-if="bus.mural_id == mural.id">{{ mural.title }}</td>
            <td>{{ bus.capacity }}</td>
            <td>{{ bus.sold_tickets}}</td>
            <td>{{ bus.status}}</td>
            <td><button class="btn btn-info" type="button" @click="editBusAction(bus.id)"><img src="@/static/pencil.png"></button></td>
            <td><button class="btn btn-info" type="button" @click="deleteBusAction(bus.id)"><img src="@/static/basurero.png"></button></td>
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
    async getBuses() {
      await axios({
        method: "get",
        url: "http://principal-arena-219118.appspot.com/api/bus"
      })
        .then(
          function(response) {
            console.log("response");
            console.log(response);
            this.$store.commit({
              type: "storeBuses",
              buses: response.data
            });
          }.bind(this)
        )
        .catch(function(error) {
          console.log("error");
          console.log(error);
        });
    },
    async getMurals() {
      await axios({
        method: "get",
        url: "http://principal-arena-219118.appspot.com/api/mural"
      })
        .then(
          function(response) {
            console.log(response);
            this.$store.commit({
              type: "storeMurals",
              murals: response.data
            });
          }.bind(this)
        )
        .catch(function(error) {
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
            console.log(response);
            this.$store.commit({
              type: "storeTours",
              tours: response.data
            });
          }.bind(this)
        )
        .catch(function(error) {
          console.log(error);
        });
    },
    async deleteBus(id) {
      console.log("Delete bus");
      await axios({
        method: "delete",
        url: "http://principal-arena-219118.appspot.com/api/bus/" + id,
        data: {
          id: id
        }
      })
        .then(
          function(response) {
            console.log("response");
            console.log(response);
            this.getBuses();
            this.getMurals();
            this.getTours();
          }.bind(this)
        )
        .catch(function(error) {
          console.log("error");
          console.log(error);
        });
    },
    editBusAction(id) {
      //send to create view
      this.$router.push({ name: "camiones-Editar", params: { idBus: id } });
    },
    deleteBusAction(id) {
      this.deleteBus(id);
    }
  },
  created: function() {
    this.getBuses();
    this.getMurals();
    this.getTours();
  }
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