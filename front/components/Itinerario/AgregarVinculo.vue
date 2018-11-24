<template>
    <div class="container">
        <br>
        <br>
    <!--Empieza la form-->
        <form>
            <!--Horario-->
            <div class="form-group ">
              <center>
                <label for="scheduleSelect" class="letrabonita" >Visualiza el ID del Itinerario deseado</label>
              </center>
              <!--

                <div v-for="tour_schedule in this.$store.state.tour_schedules" :key="tour_schedule.id">
                <select class="form-control" v-for="schedule in $store.state.schedules" :key='schedule.id'>
                  <div v-for="hour_interval in $store.state.hour_intervals" :key='hour_interval.id' v-if="schedule.hour_interval_id == hour_interval.id">
                      <option v-for="date_interval in $store.state.date_intervals" :key="date_interval.id" v-if="schedule.date_interval_id == date_interval.id">De {{date_interval.start_date}} hasta {{date_interval.end_date}} con horario de {{hour_interval.start_time}} hasta {{hour_interval.end_time}}   ID:{{tour_schedule.id}}</option>
                  </div>
                </select>
              </div>

              -->
              <div>
                <div v-for="tour_schedule in this.$store.state.tour_schedules" :key="tour_schedule.id">
                <div v-for="schedule in $store.state.schedules" :key='schedule.id' v-if="tour_schedule.schedule_id == schedule.id">
                  <div v-for="date_interval in $store.state.date_intervals" :key="date_interval.id" v-if="schedule.date_interval_id == date_interval.id">
                    <div v-for="hour_interval in $store.state.hour_intervals" :key="hour_interval.id" v-if="schedule.hour_interval_id == hour_interval.id"> 
                      <select class="form-control sombra">
                        <option>Horario: {{hour_interval.start_time}} a {{hour_interval.end_time}} Fecha: {{date_interval.start_date}} a {{date_interval.end_date}} ---> ID: {{schedule.id}}</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              </div>
              
              
              <br>
              <center>
                <label for="option">No lo encuentras ? Puedes crear uno nuevo</label>
                <nuxt-link :to="{ name: 'itinerario-agregar' }" replace>
                <button type="button" class="btn btn-info text-right shadow">Agregar</button>
                <br>
                </nuxt-link> 
              </center>
            </div>
            <div class="form-group">
              <center>
                <label for="ticket_type" class="letrabonita">Escoge el ID del Itinerario</label>
              </center>
                
                <select class="form-control sombra" id="schedule" v-model="tour_schedule.schedule_id">
                    <option v-for="schedule in this.$store.state.schedules"  :key='schedule.id' >{{schedule.id}}</option>
                </select>
            </div>
        <!--Tours-->
            <div class="form-group ">
              <center>
                <label for="tourSelect" class="letrabonita">Visualiza el ID del tour deseado</label>
              </center>
              
              <select class="form-control sombra">
                <option v-for="tour in this.$store.state.tours" :key='tour.id' >{{tour.name}} -->  ID:{{tour.id}}</option>
              </select>
              <br>
              <center>
                 <label for="option">No lo encuentras ? Puedes crear uno nuevo</label>
                 <nuxt-link :to="{ name: 'rutas-agregar' }" replace>
                <button type="button" class="btn btn-info text-right shadow">Agregar</button>
                <br>
                </nuxt-link> 
              </center>
            </div>
            <div class="form-group">
              <center>
                <label for="tour" class="letrabonita">Escoge el ID del Tour</label>
              </center>
                <select class="form-control sombra" name="tour_id" id="tour_id" v-model="tour_schedule.tour_id">
                    <option v-for="tour in this.$store.state.tours" :key='tour.id' >{{tour.id}}</option>
                </select>
            </div>
        </form>
    <!--Termina la form-->

    <!--Boton Agregar-->
       <center>
            <button type="submit" class="btn btn-success shadow" @click.stop.prevent="tour_scheduleFunction()">
                <div v-if="tour_schedule.id == undefined">Crea Vínculo</div>
                <div v-else>Actualiza Vínculo</div>
            </button>
        </center>
        <br>
    </div>   
</template>

<script>
import axios from "axios";

export default {
  //props is the parameter it receives
  props: [
    "idTour_schedule",
    "idSchedule",
    "idHour_interval",
    "idDate_interval",
    "idTour"
  ],
  data: function() {
    return {
      tour_schedule: {}
    };
  },
  methods: {
    tour_scheduleFunction() {
      if (this.tour_schedule.id != undefined) {
        this.editTour_schedule();
      } else {
        this.createTour_schedule();
      }
    },
    async createTour_schedule() {
      //alert(JSON.stringify(this.tour_schedule))
      await axios({
        method: "post",
        url: "http://principal-arena-219118.appspot.com/api/tour_schedule",
        headers: {
          "Content-Type": "application/json"
        },
        data: {
          tour_id: this.tour_schedule.tour_id,
          schedule_id: this.tour_schedule.schedule_id
        }
      })
        .then(
          function(response) {
            //alert(JSON.stringify(response))
            this.$router.push({ name: "itinerario" });
          }.bind(this)
        )
        .catch(function(error) {
          /*alert(JSON.stringify(error))*/
          console.log(error);
        });
    },
    async editTour_schedule() {
      await axios({
        method: "put",
        url:
          "http://principal-arena-219118.appspot.com/api/tour_schedule/" +
          this.idTour_schedule,
        headers: {
          "Content-Type": "application/json"
        },
        data: {
          tour_id: this.tour_schedule.tour_id,
          schedule_id: this.tour_schedule.schedule_id
        }
      })
        .then(
          function(response) {
            this.$router.push({ name: "itinerario" });
            //alert("http://principal-arena-219118.appspot.com/api/tour_schedule/" + this.idTour_schedule)
            console.log("response");
            console.log(response);
          }.bind(this)
        )
        .catch(function(error) {
          console.log("error");
          console.log(error);
        });
    },
    async getTour_schedule(id) {
      await axios({
        method: "get",
        url:
          "http://principal-arena-219118.appspot.com/api/tour_schedule/" + id,
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(
          function(response) {
            this.tour_schedule = response.data;
            console.log(this.tour_schedule);
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
    async getTour_schedules() {
      await axios({
        method: "get",
        url: "http://principal-arena-219118.appspot.com/api/tour_schedule"
      })
        .then(
          function(response) {
            console.log(response);
            this.$store.commit({
              type: "storeTour_schedules",
              tour_schedules: response.data
            });
          }.bind(this)
        )
        .catch(function(error) {
          console.log(error);
        });
    },
    async getSchedules() {
      await axios({
        method: "get",
        url: "http://principal-arena-219118.appspot.com/api/schedule"
      })
        .then(
          function(response) {
            console.log(response);
            this.$store.commit({
              type: "storeSchedules",
              schedules: response.data
            });
          }.bind(this)
        )
        .catch(function(error) {
          console.log(error);
        });
    },
    async getDate_intervals() {
      await axios({
        method: "get",
        url: "http://principal-arena-219118.appspot.com/api/date_interval"
      })
        .then(
          function(response) {
            console.log(response);
            this.$store.commit({
              type: "storeDate_intervals",
              date_intervals: response.data
            });
          }.bind(this)
        )
        .catch(function(error) {
          console.log(error);
        });
    },
    async getHour_intervals() {
      await axios({
        method: "get",
        url: "http://principal-arena-219118.appspot.com/api/hour_interval"
      })
        .then(
          function(response) {
            console.log(response);
            this.$store.commit({
              type: "storeHour_intervals",
              hour_intervals: response.data
            });
          }.bind(this)
        )
        .catch(function(error) {
          console.log(error);
        });
    }
  },

  created: function() {
    console.log("start crea vinculo");
    if (this.idTour_schedule != undefined) {
      console.log("idTour_schedule is defined");
      this.getTour_schedule(this.idTour_schedule);
    }
    this.getTour_schedules();
    this.getTours();
    this.getSchedules();
    this.getDate_intervals();
    this.getHour_intervals();
  }
};
</script>

<style>
.sombra {
  box-shadow: 0 2px 6px rgba(39, 39, 39, 0.13), 0 2px 6px rgba(39, 39, 39, 0.13);
}
.container {
  margin-left: 160px;
  margin-right: 0px; /* Same as the width of the sidenav */
  display: inline-block;
  font-size: 20px; /* Increased text to enable scrolling */
  text-align: center;
  align-content: center;
}
.letrabonita {
  font-size: 22px;
  font: bold;
}
</style>


