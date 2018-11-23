<template>
  <div class="container">
    <br>
    <div class="mt-5">
    <div class="row">
    <!--Buscador-->
    <!--<div class="col">
      <form class="form-inline">
        <input class="form-control mr-sm-2" type="search" placeholder="Ingrese texto a buscar" aria-label="Search">
        <button class="btn btn-outline-danger my-2 my-sm-0" type="submit"><img src="@/static/magnifier.png" width="20" height="20"></button> 
      </form>
    </div>-->
    <!--Agregar-->
      <div class = "col text-right">
        <nuxt-link :to="{ name: 'horario-agregar' }" replace>
        <button type="button" class="btn btn-info text-right">Agregar</button>
        </nuxt-link> 
      </div>
    </div>
    <!--Tabla-->
    <table class="table mt-3">
      <thead class="bg-success">
        <tr>
          <th scope="col">Horario de inicio del primer tour</th>
          <th scope="col">Horario de inicio del último tour</th>
          <th scope="col">Frecuencia de viajes (cada cuantos minutos sale un camión)</th>
          <th scope="col">Editar</th>
          <th scope="col">Borrar</th>
        </tr>
      </thead>
        <tbody>
          <tr v-for="hour_interval in this.$store.state.hour_intervals" :key='hour_interval.id'>
            <th>{{ hour_interval.start_time }}</th>
            <td>{{ hour_interval.end_time }}</td>
            <td>{{ hour_interval.frequency }}</td>
            <td><button class="btn btn-info" type="button" @click="editHour_invervalAction(hour_interval.id)"><img src="@/static/pencil.png"></button></td>
            <td><button class="btn btn-info" type="button" @click="deleteHour_intervalAction(hour_interval.id)"><img src="@/static/basurero.png"></button></td>
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
    async getHour_intervals() {
      await axios({
        method: "get",
        url: "http://principal-arena-219118.appspot.com/api/hour_interval"
      })
        .then(
          function(response) {
            console.log("response");
            console.log(response);
            this.$store.commit({
              type: "storeHour_intervals",
              hour_intervals: response.data
            });
          }.bind(this)
        )
        .catch(function(error) {
          console.log("error");
          console.log(error);
        });
    },
    async deleteHour_interval(id) {
      console.log("Delete hour interval");
      await axios({
        method: "delete",
        url:
          "http://principal-arena-219118.appspot.com/api/hour_interval/" + id,
        data: {
          id: id
        }
      })
        .then(
          function(response) {
            console.log("response");
            console.log(response);
            this.getHour_intervals();
          }.bind(this)
        )
        .catch(function(error) {
          console.log("error");
          console.log(error);
        });
    },
    editHour_invervalAction(id) {
      //send to create view
      this.$router.push({
        name: "horario-agregar",
        params: { idHour_interval: id }
      });
    },
    deleteHour_intervalAction(id) {
      this.deleteHour_interval(id);
    }
  },
  created: function() {
    this.getHour_intervals();
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
.derecha {
  padding-right: 110px;
  margin-left: 160px;
}
.bg-success {
  color: #ffffff;
}
</style>


