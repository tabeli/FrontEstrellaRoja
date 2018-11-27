<template>
  <div class="container">
    <br>
    <div class="mt-5">
    <div class="row">
    <!--Buscador-->
    <!--<div class="col">
      <form class="form-inline">
        <input class="form-control mr-sm-2 sombra  " type="search" placeholder="Ingrese texto a buscar" aria-label="Search">
        <button class="btn btn-light my-2 my-sm-0 sombra " type="submit"><img src="@/static/magnifier.png" width="20" height="20"></button> 
      </form>
    </div>-->
    <!--Agregar-->
      <div class = "col text-right">
        <nuxt-link :to="{ name: 'fecha-agregar' }" replace>
        <button type="button" class="btn btn-success text-right shadow">Agregar</button>
        </nuxt-link> 
      </div>
    </div>
    <!--Tabla-->
    <table class="table mt-3">
      <thead class="bg-success">
        <tr class="sombra">
          <th scope="col">Primera fecha de disponibilidad</th>
          <th scope="col">Última fecha de disponibilidad</th>
          <th scope="col">Estatus</th>
          <th scope="col">Editar</th>
          <th scope="col">Borrar</th>
        </tr>
      </thead>
        <tbody  class="sombra">
          <tr v-for="date_interval in this.$store.state.date_intervals" :key='date_interval.id'>
            <th>{{ date_interval.start_date }}</th>
            <td>{{ date_interval.end_date }}</td>
            <td>{{ date_interval.status }}</td>
            <td><button class="btn btn-outline-info sombra" type="button" @click="editDate_intervalAction(date_interval.id)"><img src="@/static/pencil.png"></button></td>
            <td><button class="btn btn-outline-danger sombra" type="button" @click="deleteDate_intervalAction(date_interval.id)"><img src="@/static/basurero.png"></button></td>
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
    async getDate_intervals() {
      await axios({
        method: "get",
        url: "https://adsoft-01.appspot.com/api/date_interval"
      })
        .then(
          function(response) {
            console.log("response");
            console.log(response);
            this.$store.commit({
              type: "storeDate_intervals",
              date_intervals: response.data
            });
          }.bind(this)
        )
        .catch(function(error) {
          console.log("error");
          console.log(error);
        });
    },
    async deleteDate_interval(id) {
      console.log("Delete date interval");
      await axios({
        method: "delete",
        url:
          "https://adsoft-01.appspot.com/api/date_interval/" + id,
        data: {
          id: id
        }
      })
        .then(
          function(response) {
            console.log("response");
            console.log(response);
            this.getDate_intervals();
          }.bind(this)
        )
        .catch(function(error) {
          console.log("error");
          console.log(error);
        });
    },
    editDate_intervalAction(id) {
      //send to create view
      this.$router.push({
        name: "fecha-agregar",
        params: { idDate_interval: id }
      });
    },
    deleteDate_intervalFunction(id) {
      this.deleteDate_interval(id);
    }
  },
  created: function() {
    this.getDate_intervals();
  }
};
</script>

<style>
.sombra {
  box-shadow: 0 2px 6px rgba(39, 39, 39, 0.13), 0 2px 6px rgba(39, 39, 39, 0.13);
}

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


