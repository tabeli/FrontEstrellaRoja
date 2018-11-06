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
<<<<<<< HEAD
=======
        <nuxt-link :to="{ name: 'horario-agregar' }" replace>
>>>>>>> 2656c8347fd10f132092cc7a476f097910c4a3b8
        <button type="button" class="btn btn-info text-right">Agregar</button>
        </nuxt-link> 
      </div>
    </div>
    <!--Tabla-->
    <table class="table mt-3">
      <thead class="bg-success">
        <tr>
<<<<<<< HEAD
          <th scope="col">ID</th>
          <th scope="col">Ruta</th>
=======
          <th scope="col">Rutas</th>
>>>>>>> 2656c8347fd10f132092cc7a476f097910c4a3b8
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
      <tbody>
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
          <td><button class="btn btn-info" type="button" @click="editScheduleAction(schedule.id)"><img src="@/static/pencil.png"></button></td>
          <td><button class="btn btn-info" type="button" @click="deleteScheduleAction(schedule.id)"><img src="@/static/basurero.png"></button></td>
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
    async getSchedules() {
      await axios({
        method: "get",
        url: "http://principal-arena-219118.appspot.com/api/schedule"
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
    async getDate_interval() {
      await axios({
        method: "get",
        url: "http://principal-arena-219118.appspot.com/api/date_interval"
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
    async getHour_interval() {
      await axios({
        method: "get",
        url: "http://principal-arena-219118.appspot.com/api/hour_interval"
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
    async getTour_schedules() {
      await axios({
        method: "get",
        url: "http://principal-arena-219118.appspot.com/api/tour_schedule"
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
    async getTours() {
      await axios({
        method: "get",
        url: "http://principal-arena-219118.appspot.com/api/tour"
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
    async deleteSchedule(id) {
      console.log("Delete schedule");
      await axios({
        method: "delete",
        url: "http://principal-arena-219118.appspot.com/api/schedule/" + id,
        data: {
          id: id
        }
      })
        .then(
          function(response) {
            console.log("response");
            console.log(response);
            this.getSchedules();
          }.bind(this)
        )
        .catch(function(error) {
          console.log("error");
          console.log(error);
        });
    },
    editScheduleAction(id) {
      //send to create view
      this.$router.push({ name: "", params: { idSchedule: id } });
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


