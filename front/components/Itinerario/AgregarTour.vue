<template>
    <div class="container mt-5">
    <!--Empieza la form-->
        <form>
        <!-- Tour -->
            <div class="form-group ">
              <center>
                <label for="tour_id" class="letrabonita" >Visualiza el ID del Tour deseado</label>
              </center>
              <select class="form-control">
                <option v-for="tour in this.$store.state.tours" :key='tour.id' >{{tour.name}} -->  ID:{{tour.id}}</option>
              </select>
              <br>
              <center>
                <label for="option">No lo encuentras ? Puedes crear uno nuevo</label>
                <nuxt-link :to="{ name: 'rutas-agregar' }" replace>
                <button type="button" class="btn btn-info text-right">Agregar</button>
                <br>
                </nuxt-link> 
              </center>
            </div>
            <div class="form-group">
              <center>
                <label for="tour_id" class="letrabonita">Escoge el ID del tipo de Lugar</label>
              </center>
                
                <select class="form-control" id="tour_id" v-model="tour_schedule.tour_id">
                    <option v-for="tour in this.$store.state.tours"  :key='tour.id' >{{tour.id}}</option>
                </select>
            </div>





        <!-- Itinerario -->
            <div class="form-group ">
              <center>
                <label for="schedule_id" class="letrabonita" >Visualiza el ID del Itinerario deseado</label>
              </center>
                <div v-for="schedule in this.$store.state.schedules" :key='schedule.id'>
                  <select class="form-control" v-for="date_interval in this.$store.state.date_intervals" :key='date_interval.id' v-if="schedule.date_interval == date_interval.id">
                    <option v-for="narrative in this.$store.state.narratives" :key='narrative.id' >{{narrative.audio_path}} -->  ID:{{narrative.id}}</option>
                  </select>
                </div>
              <center>
                <label for="option">No lo encuentras ? Puedes crear una nueva</label>
                <!-- Falta el link para las narrativas -->
                <nuxt-link :to="{ name: '' }" replace>
                <button type="button" class="btn btn-info text-right">Agregar</button>
                <br>
                </nuxt-link> 
              </center>
            </div>
            <div class="form-group">
              <center>
                <label for="schedule:id" class="letrabonita">Escoge el ID del Itinerario deseado</label>
              </center>
                
                <select class="form-control" id="schedule_id" v-model="tour_schedule.schedule_id">
                    <option v-for="narrative in this.$store.state.narratives"  :key='narrative.id' >{{narrative.id}}</option>
                </select>
            </div>






        </form>
    <!--Termina la form-->

    <!--Boton Agregar-->
        <center>
            <button type="submit" class="btn btn-danger" @click.stop.prevent="tour_scheduleFunction()">
                <div v-if="tour_schedule.id == undefined">Crea Asignación de horarios</div>
                <div v-else>Actualiza Asignación de horarios</div>
            </button>
        </center>
    </div>   
</template>

<script>
import axios from "axios";

export default {
  //props is the parameter it receives
  props: ["idTour_schedule", "idSchedule", "idDate_interval","idHour_interval"],
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
      //alert(JSON.stringify(this.place))
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
          "http://principal-arena-219118.appspot.com/api/tour_schedule/" + this.idTour_schedule,
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
        url: "http://principal-arena-219118.appspot.com/api/tour_schedule/" + id,
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
    async getSchedule(id) {
      await axios({
        method: "get",
        url: "http://principal-arena-219118.appspot.com/api/schedule/" + id,
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(
          function(response) {
            this.schedule = response.data;
            console.log(this.schedule_id);
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
    },
  },

  created: function() {
    console.log("start crea horarios de tour");
    if (this.idTour_schedule != undefined) {
      console.log("idTour_schedule is defined");
      this.getTour_schedule(this.idTour_schedule);
    }
    if (this.idSchedule != undefined) {
      console.log("idSchedule is defined");
      this.getSchedule(this.idSchedule);
    }
    if (this.idDate_interval != undefined) {
      console.log("idDate_interval is not defined");
      this.getDate_interval();
    }
    if (this.idHour_interval != undefined) {
      console.log("idHour_interval is not defined");
      this.getHour_intervals();
    }
    this.getTour_schedule();
    this.getSchedules();
    this.getDate_intervals();
    this.getHour_intervals();
  }
};
</script>

<style>
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