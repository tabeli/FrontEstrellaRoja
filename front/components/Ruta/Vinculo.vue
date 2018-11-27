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
        <nuxt-link :to="{ name: 'rutas-agregarvinculo' }" replace>
        <button type="button" class="btn btn-success text-right shadow">Agregar</button>
        </nuxt-link> 
      </div>
    </div>
    <!--Tabla-->
    <table class="table mt-3">
      <thead class="bg-success">
        <tr class="sombra">
          <th scope="col">Tour</th>
          <th scope="col">Fecha inicio</th>
          <th scope="col">Fecha finalización</th>
          <th scope="col">Hora inicio</th>
          <th scope="col">Hora finalización</th>
          <th scope="col">Editar</th>
          <th scope="col">Borrar</th>
        </tr>
      </thead>
        <tbody class="sombra text-align">
          <tr  v-for="tour_schedule in this.$store.state.tour_schedules" :key='tour_schedule.id' >
            <td v-for="tour in $store.state.tours" :key="tour.id" v-if="tour_schedule.tour_id == tour.id">{{ tour.name }}</td>
            <td v-for="schedule in $store.state.schedules" :key="schedule.id" v-if="tour_schedule.schedule_id == schedule.id">
                <div v-for="date_interval in $store.state.date_intervals" :key="date_interval.id" v-if="schedule.date_interval_id == date_interval.id">{{ date_interval.start_date}}</div>
            </td>
            <td v-for="schedule in $store.state.schedules" :key="schedule.id" v-if="tour_schedule.schedule_id == schedule.id">
                <div v-for="date_interval in $store.state.date_intervals" :key="date_interval.id" v-if="schedule.date_interval_id == date_interval.id">{{ date_interval.end_date}}</div>
            </td>
            <td v-for="schedule in $store.state.schedules" :key="schedule.id" v-if="tour_schedule.schedule_id == schedule.id">
                <div v-for="hour_interval in $store.state.hour_intervals" :key="hour_interval.id" v-if="schedule.hour_interval_id == hour_interval.id">{{ hour_interval.start_time}}</div>
            </td>
            <td v-for="schedule in $store.state.schedules" :key="schedule.id" v-if="tour_schedule.schedule_id == schedule.id">
                <div v-for="hour_interval in $store.state.hour_intervals" :key="hour_interval.id" v-if="schedule.hour_interval_id == hour_interval.id">{{ hour_interval.end_time}}</div>
            </td>
            <td><button class="btn btn-outline-info" type="button" @click="editTour_scheduleAction(tour_schedule.id)"><img src="@/static/pencil.png"></button></td>
            <td><button class="btn btn-outline-danger" type="button" @click="deleteTour_scheduleAction(tour_schedule.id)"><img src="@/static/basurero.png"></button></td>
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
    async getTour_schedules() {
      await axios({
        method: "get",
        url: "https://adsoft-01.appspot.com/api/tour_schedule"
      })
        .then(
          function(response) {
            console.log("response");
            console.log(response);
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
        url: "https://adsoft-01.appspot.com/api/tour"
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
    async getHour_intervals() {
      await axios({
        method: "get",
        url: "https://adsoft-01.appspot.com/api/hour_interval"
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
    async deleteTour_schedule(id) {
      console.log("Delete tour schedule");
      await axios({
        method: "delete",
        url:
          "https://adsoft-01.appspot.com/api/tour_schedule/" + id,
        data: {
          id: id
        }
      })
        .then(
          function(response) {
            console.log(response);
            this.getTour_schedules();
          }.bind(this)
        )
        .catch(function(error) {
          console.log("error");
          console.log(error);
        });
    },
    editTour_scheduleAction(id) {
      //send to create view
      this.$router.push({
        name: "rutas-agregarvinculo",
        params: { idTour_schedule: id }
      });
    },
    deleteTour_scheduleAction(id) {
      this.deleteTour_schedule(id);
    }
  },
  created: function() {
    this.getTour_schedules();
    this.getTours();
    this.getSchedules();
    this.getDate_intervals();
    this.getHour_intervals();
  }
};
</script>
  
  <style>
  .bg-success {
  color: #ffffff;
}
  .sombra {
  box-shadow: 0 2px 6px rgba(39, 39, 39, 0.13), 0 2px 6px rgba(39, 39, 39, 0.13);
}
</style>