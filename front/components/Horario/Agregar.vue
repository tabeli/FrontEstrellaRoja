<template>
    <div class="container">
    <!--Empieza la form-->
        <form>
        <!--hora inicial-->
            <div class="form-group col-md-12">
              <center>
                <label for="start_time" class="letrabonita">Horario de inicio del primer tour</label>
              </center>
              
              <input type="text" class="form-control" id="start_time" placeholder="00:00:00" v-model="hour_interval.start_time">
            </div>
        <!-- hora final -->
            <div class="form-group col-md-12">
              <center>
                <label for="end_time" class="letrabonita">Horario de inicio del último tour</label>
              </center>
              
              <input type="text" class="form-control" id="end_time" placeholder="00:00:00" v-model="hour_interval.end_time">
            </div>
        <!-- frecuencia-->
            <div class="form-group col-md-12">
              <center>
                <label for="frequency" class="letrabonita">Frecuencia de viajes (cada cuantos minutos sale un camión)</label>
              </center>
              
              <input type="text" class="form-control" id="frequency" placeholder="00:00:00" v-model="hour_interval.frequency">
            </div>
        <!--Descripcion-->
        </form>
    <!--Termina la form-->

    <!--Boton Agregar-->
        <center>
            <button type="submit" class="btn btn-danger" @click.stop.prevent="hour_intervalFunction()">
                <div v-if="hour_interval.id == undefined">Crea Intervalo de Horarios</div>
                <div v-else>Actualiza Intervalo de Horarios</div>
            </button>
        </center>
    </div>   
</template>

<script>
import axios from "axios";

export default {
  //props is the parameter it receives
  props: ["idHour_interval"],
  data: function() {
    return {
      hour_interval: {}
    };
  },
  methods: {
    hour_intervalFunction() {
      if (this.hour_interval.id != undefined) {
        this.editHour_interval();
      } else {
        this.createHour_interval();
      }
    },
    async createHour_interval() {
      //alert(JSON.stringify(this.hour_interval))
      await axios({
        method: "post",
        url: "http://principal-arena-219118.appspot.com/api/hour_interval",
        headers: {
          "Content-Type": "application/json"
        },
        data: {
          start_time: this.hour_interval.start_time,
          end_time: this.hour_interval.end_time,
          frequency: this.hour_interval.frequency
        }
      })
        .then(
          function(response) {
            //alert(JSON.stringify(response))
            this.$router.push({ name: "horario" });
          }.bind(this)
        )
        .catch(function(error) {
          /*alert(JSON.stringify(error))*/
          console.log(error);
        });
    },
    async editHour_interval() {
      await axios({
        method: "put",
        url:
          "http://principal-arena-219118.appspot.com/api/hour_interval/" +
          this.idHour_interval,
        headers: {
          "Content-Type": "application/json"
        },
        data: {
          start_time: this.hour_interval.start_time,
          end_time: this.hour_interval.end_time,
          frequency: this.hour_interval.frequency
        }
      })
        .then(
          function(response) {
            this.$router.push({ name: "horario" });
            //alert("http://principal-arena-219118.appspot.com/api/horario/" + this.idHour_interval)
            console.log("response");
            console.log(response);
          }.bind(this)
        )
        .catch(function(error) {
          console.log("error");
          console.log(error);
        });
    },
    async getHour_interval(id) {
      await axios({
        method: "get",
        url:
          "http://principal-arena-219118.appspot.com/api/hour_interval/" + id,
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(
          function(response) {
            this.hour_interval = response.data;
            console.log(this.hour_interval);
          }.bind(this)
        )
        .catch(function(error) {
          console.log(error);
        });
    }
  },

  created: function() {
    console.log("start crea intervalo de horario");
    if (this.idHour_interval != undefined) {
      console.log("idHour_interval is defined");
      this.getHour_interval(this.idHour_interval);
    }
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


