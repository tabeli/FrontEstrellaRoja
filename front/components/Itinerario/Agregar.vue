<template>
    <div class="container">
    <!--Empieza la form-->
        <form>
        <!--Intervalo de horario-->
            <div class="form-group ">
              <center>
                <label for="hour_interval" class="letrabonita" >Visualiza el ID del intervalo de horarios deseado</label>
              </center>
              <select class="form-control">
                <option v-for="hour_interval in this.$store.state.hour_intervals" :key='hour_interval.id' >De {{hour_interval.start_time}} hasta {{hour_interval.end_time}}  -->  ID:{{hour_interval.id}}</option>
              </select>
            </div>
            <div class="form-group">
              <center>
                <label for="hour_interval" class="letrabonita">Escoge el ID del intervalo de horarios deseado</label>
              </center>
                <select class="form-control" id="hour_interval" v-model="schedule.hour_interval_id">
                    <option v-for="hour_interval in this.$store.state.hour_intervals"  :key='hour_interval.id' >{{hour_interval.id}}</option>
                </select>
            </div>
        <!--Intervalo de fechas-->
            <div class="form-group ">
              <center>
                <label for="date_interval" class="letrabonita">Visualiza el ID del intervalo de fechas</label>
              </center>
              
              <select class="form-control">
                <option v-for="date_interval in this.$store.state.date_intervals" :key='date_interval.id' >De {{date_interval.start_date}} hasta{{date_interval.end_date}}  -->  ID:{{date_interval.id}}</option>
              </select>
            </div>
            <div class="form-group">
              <center>
                <label for="date_interval" class="letrabonita">Escoge el ID del intervalo de fechas</label>
              </center>
                <select class="form-control" name="date_interval" id="date_interval" v-model="schedule.date_interval_id">
                    <option v-for="date_interval in this.$store.state.date_intervals" :key='date_interval.id' >{{date_interval.id}}</option>
                </select>
            </div>
        <!--Boton de agregar intervalos-->
    <div>
        <label>Añadir intervalos</label>
     <!--Botones de intervalos-->
         <b-btn :pressed="false" variant="btn btn-success" v-b-toggle.collapse2 class="m-1">Fecha</b-btn>
         <b-btn :pressed="false" variant="btn btn-success" v-b-toggle="'collapse3'" class="m-1">Hora</b-btn>

     <!-- element to collapse -->
     <br>
        <b-collapse  id="collapse2">
            <b-card>
               <div class="row">
                   <div class="col"></div>
                   <div class="col-md-2" sm="10.5">
                       <label>Fecha inicial</label>
                       <input class="date" type="date" id="start" name="birthdate"
                            value="2018-07-22"
                            min="2018-07-11" max="2021-07-11" 
                            />
                    </div>
                    <div class="col-md-2" sm="10.5">
                        <label>Fecha final</label>
                        <input class="date" type="date" id="start" name="birthdate"
                            value="2018-07-22"
                            min="2018-07-11" max="2021-07-11" 
                            />
                    </div>
                    <div class="col"></div>
                 </div>
                 
                 <div class="row">
                     <div class="col"></div>
                     <div class="col"></div>
                     <button type="button" class="btn btn-warning">Añadir</button>
                     <div class="col"></div>
                     <div class="col"></div>
                 </div>
            </b-card>
        </b-collapse>

     <b-collapse id="collapse3">
         <b-card>
            <div class="row">
            <div class="col"></div>
             <div class="col-md-2">
                <label>Tiempo Inicial</label>
               

    <b-row class="my-1" v-for="type in types" :key="type">
      <b-col sm="10.5"><b-form-input :id="`type-${type}`" :type="type"></b-form-input></b-col>
    </b-row>

             </div>
             <div class="col-md-2 ">
                <label class="">Tiempo Final</label>
            
        <b-row class="my-1" v-for="type in types" :key="type">
             <b-col sm="10.5"><b-form-input :id="`type-${type}`" :type="type"></b-form-input></b-col>
        </b-row>
                
             </div>
             <div class="col"></div>
            </div>
            <br>
            <!-- botón -->
                 <div class="row">
                     <div class="col"></div>
                     <div class="col"></div>
                     <button type="button" class="btn btn-warning">Añadir</button>
                     <div class="col"></div>
                     <div class="col"></div>
                 </div>
        </b-card>
    </b-collapse>
    </div>
    <!--Termina la form-->
    </form>
    <!--Boton Agregar-->
        <br/>
        <center>
            <button type="submit" class="btn btn-danger" @click.stop.prevent="scheduleFunction()">
                <div v-if="schedule.id == undefined">Crea Horario</div>
                <div v-else>Actualiza Horario</div>
            </button>
        </center>
    </div>   
</template>

<script>
import axios from "axios";

export default {
  //props is the parameter it receives
  props: ["idSchedule", "idHour_interval", "idTour_interval"],
  data: function() {
    return {
      schedule: {},
      types: ['time']
    };
  },
  methods: {
    scheduleFunction() {
      if (this.schedule.id != undefined) {
        this.editSchedule();
      } else {
        this.createSchedule();
      }
    },
    async createSchedule() {
      //alert(JSON.stringify(this.schedule))
      await axios({
        method: "post",
        url: "http://principal-arena-219118.appspot.com/api/schedule",
        headers: {
          "Content-Type": "application/json"
        },
        data: {
          date_interval_id: this.schedule.date_interval_id,
          hour_interval_id: this.schedule.hour_interval_id
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
    async editSchedule() {
      await axios({
        method: "put",
        url:
          "http://principal-arena-219118.appspot.com/api/schedule/" + this.idSchedule,
        headers: {
          "Content-Type": "application/json"
        },
        data: {
          date_interval_id: this.schedule.date_interval_id,
          hour_interval_id: this.schedule.hour_interval_id
        }
      })
        .then(
          function(response) {
            this.$router.push({ name: "itinerario" });
            //alert("http://principal-arena-219118.appspot.com/api/schedule/" + this.idSchedule)
            console.log("response");
            console.log(response);
          }.bind(this)
        )
        .catch(function(error) {
          console.log("error");
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
            console.log(this.schedule);
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
    console.log("start crea horario");
    if (this.idSchedule != undefined) {
      console.log("idSchedule is defined");
      this.getSchedule(this.idSchedule);
    }
    if (this.idHour_interval != undefined) {
      console.log("idHour_interval is defined");
      this.getHour_intervals();
    }
    if (this.idDate_interval != undefined) {
      console.log("idDate_interval is defined");
      this.getDate_intervals();
    }
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


