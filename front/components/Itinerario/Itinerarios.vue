<template>
  <div class="container">
    <br>
    <div class="mt-5">
    <div class="row">
    <!--Buscador-->
    <!--<div class="col">
      <form class="form-inline">
        <input class="form-control mr-sm-2 sombra" type="search" placeholder="Ingrese texto a buscar" aria-label="Search">
        <button class="btn btn-light my-2 my-sm-0 sombra" type="submit"><img src="@/static/magnifier.png" width="20" height="20"></button> 
      </form>
    </div>-->
    <!--Agregar horario a un tour-->
      <div class = "col text-center">
        <nuxt-link :to="{ name: 'itinerario-vinculo'}" replace>
        <button type="button" class="btn btn-success shadow">Agregar itinerarios al tour</button>
        </nuxt-link> 
      </div>
    <!--Agregar-->
      <div class = "col text-right">
        <nuxt-link :to="{ name: 'itinerario-agregar' }" replace>
        <button type="button" class="btn btn-success text-right shadow">Agregar</button>
        </nuxt-link> 
      </div>
    </div>
    <!--Tabla-->
    <table class="table mt-3">
      <thead class="bg-success">
        <tr class="sombra">
          <th scope="col">ID</th>
          <th scope="col">Rutas con este horario</th>
          <th scope="col">Fecha inicial</th>
          <th scope="col">Fecha final</th>
          <th scope="col">Hora inicial</th>
          <th scope="col">Hora final</th>
          <th scope="col">Frecuencia</th>
          <th scope="col">Estatus</th>
          <th scope="col">Editar</th>
          <th scope="col">Borrar</th>
        </tr>
      </thead>
      <tbody class="sombra">
        <tr v-for="schedule in this.$store.state.schedules" :key='schedule.id'>
          <td>{{ schedule.id }}</td>
          <td v-for="tour_schedule in $store.state.tour_schedules" :key='tour_schedule.id' v-if="tour_schedule.schedule_id == schedule.id">
            <div v-for="tour in $store.state.tours" :key='tour.id' v-if="tour_schedule.tour_id == tour.id">
             {{ tour.name }} 
            </div>
          </td>
          <td v-for="date_interval in $store.state.date_intervals" :key='date_interval.id' v-if="schedule.date_interval_id == date_interval.id">
            {{date_interval.start_date}}
          </td>
          <td v-for="date_interval in $store.state.date_intervals" :key='date_interval.id' v-if="schedule.date_interval_id == date_interval.id">
            {{date_interval.end_date}}
          </td>
          <td v-for="hour_interval in $store.state.hour_intervals" :key='hour_interval.id' v-if="schedule.hour_interval_id == hour_interval.id">
            {{hour_interval.start_time}}
          </td>
          <td v-for="hour_interval in $store.state.hour_intervals" :key='hour_interval.id' v-if="schedule.hour_interval_id == hour_interval.id">
            {{hour_interval.end_time}}
          </td>
          <td v-for="hour_interval in $store.state.hour_intervals" :key='hour_interval.id' v-if="schedule.hour_interval_id == hour_interval.id">
            {{hour_interval.frequency}}
          </td>
          <td v-for="date_interval in $store.state.date_intervals" :key='date_interval.id' v-if="schedule.date_interval_id == date_interval.id">
            {{date_interval.status}}
          </td>
          <td><button class="btn btn-outline-info" type="button" @click="editScheduleAction(schedule.id)"><img src="@/static/pencil.png"></button></td>
          <td><button class="btn btn-outline-danger" type="button" @click="deleteScheduleAction(schedule.id)"><img src="@/static/basurero.png"></button></td>
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
    //obtener schedule
    async getSchedules() {
      await axios({
        method: "get",
        url: "https://adsoft-01.appspot.com/api/schedule"
      })
        .then(
          function(response) {
            console.log("response");
            console.log(response);
            this.$store.commit({
              type: "storeSchedules",
              schedules: response.data
            });
          }.bind(this)
        )
        .catch(function(error) {
          console.log("error");
          console.log(error);
        });
    },
    //obtener intervalo de fechas
    async getDate_interval() {
      await axios({
        method: "get",
        url: "https://adsoft-01.appspot.com/api/date_interval"
      })
        .then(
          function(response) {
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
    //intervalo de horas
    async getHour_interval() {
      await axios({
        method: "get",
        url: "https://adsoft-01.appspot.com/api/hour_interval"
      })
        .then(
          function(response) {
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
    //obtener schedules de tour
    async getTour_schedules() {
      await axios({
        method: "get",
        url: "https://adsoft-01.appspot.com/api/tour_schedule"
      })
        .then(
          function(response) {
            this.$store.commit({
              type: "storeTour_schedules",
              tour_schedules: response.data
            });
          }.bind(this)
        )
        .catch(function(error) {
          console.log("error");
          console.log(error);
        });
    },
    //obtener tours
    async getTours() {
      await axios({
        method: "get",
        url: "https://adsoft-01.appspot.com/api/tour"
      })
        .then(
          function(response) {
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
    //borrar schedule
    async deleteSchedule(id) {
      console.log("Delete schedule");
      await axios({
        method: "delete",
        url: "https://adsoft-01.appspot.com/api/schedule/" + id,
        data: {
          id: id
        }
      })
        .then(
          function(response) {
            console.log("response");
            console.log(response);
            this.getSchedules();
            this.getDate_interval();
            this.getHour_interval();
            this.getTour_schedules();
            this.getTours();
          }.bind(this)
        )
        .catch(function(error) {
          console.log("error");
          console.log(error);
        });
    },
    //editar schedule
    editScheduleAction(id) {
      //send to create view
      this.$router.push({
        name: "itinerario-agregar",
        params: { idSchedule: id }
      });
    },
    deleteScheduleAction(id) {
      this.deleteSchedule(id);
    }
  },
  created: function() {
    this.getSchedules();
    this.getDate_interval();
    this.getHour_interval();
    this.getTour_schedules();
    this.getTours();
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


