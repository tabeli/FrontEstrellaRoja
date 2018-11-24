<template>
    <div class="container">
        <br>
        <br>
    <!--Empieza la form-->
        <form>
            <!--Stop-->
            <div class="form-group ">
              <center>
                <label for="stopSelect" class="letrabonita">Visualiza el ID de la Parada deseada</label>
              </center>
              
              <select class="form-control sombra">
                <option v-for="stop in this.$store.state.stops" :key='stop.id' >{{stop.name}} -->  ID:{{stop.id}}</option>
              </select>
              <br>
              <center>
                 <label for="option">No la encuentras ? Puedes crear una nueva</label>
                 <nuxt-link :to="{ name: 'paradas-agregar' }" replace>
                <button type="button" class="btn btn-info text-right shadow">Agregar</button>
                <br>
                </nuxt-link> 
              </center>
            </div>
            <div class="form-group">
              <center>
                <label for="tour" class="letrabonita">Escoge el ID de la Parada</label>
              </center>
                <select class="form-control sombra" name="tour_id" id="stop" v-model="tour_stop.stop_id">
                    <option v-for="stop in this.$store.state.stops" :key='stop.id' >{{stop.id}}</option>
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
                <select class="form-control sombra" name="tour_id" id="tour" v-model="tour_stop.tour_id">
                    <option v-for="tour in this.$store.state.tours" :key='tour.id' >{{tour.id}}</option>
                </select>
            </div>
        </form>
    <!--Termina la form-->

    <!--Boton Agregar-->
       <center>
            <button type="submit" class="btn btn-success shadow" @click.stop.prevent="tour_stopFunction()">
                <div v-if="tour_stop.id == undefined">Crea Vínculo</div>
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
    "idTour_stop",
    "idStop",
    "idTour"
  ],
  data: function() {
    return {
      tour_stop: {}
    };
  },
  methods: {
    tour_stopFunction() {
      if (this.tour_stop.id != undefined) {
        this.editTour_stop();
      } else {
        this.createTour_stop();
      }
    },
    async createTour_stop() {
      //alert(JSON.stringify(this.tour_schedule))
      await axios({
        method: "post",
        url: "http://principal-arena-219118.appspot.com/api/tour_stop",
        headers: {
          "Content-Type": "application/json"
        },
        data: {
          tour_id: this.tour_stop.tour_id,
          stop_id: this.tour_stop.stop_id
        }
      })
        .then(
          function(response) {
            //alert(JSON.stringify(response))
            this.$router.push({ name: "paradas-vinculo" });
          }.bind(this)
        )
        .catch(function(error) {
          /*alert(JSON.stringify(error))*/
          console.log(error);
        });
    },
    async editTour_stop() {
      await axios({
        method: "put",
        url:
          "http://principal-arena-219118.appspot.com/api/tour_stop/" +
          this.idTour_stop,
        headers: {
          "Content-Type": "application/json"
        },
        data: {
          tour_id: this.tour_stop.tour_id,
          stop_id: this.tour_stop.stop_id
        }
      })
        .then(
          function(response) {
            this.$router.push({ name: "paradas-vinculo" });
            //alert("http://principal-arena-219118.appspot.com/api/tour_stop/" + this.idTour_stop)
            console.log("response");
            console.log(response);
          }.bind(this)
        )
        .catch(function(error) {
          console.log("error");
          console.log(error);
        });
    },
    async getTour_stop(id) {
      await axios({
        method: "get",
        url:
          "http://principal-arena-219118.appspot.com/api/tour_stop/" + id,
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(
          function(response) {
            this.tour_stop = response.data;
            console.log(this.tour_stop);
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
    async getStops() {
      await axios({
        method: "get",
        url: "http://principal-arena-219118.appspot.com/api/stop"
      })
        .then(
          function(response) {
            console.log(response);
            this.$store.commit({
              type: "storeStops",
              stops: response.data
            });
          }.bind(this)
        )
        .catch(function(error) {
          console.log(error);
        });
    },
  },

  created: function() {
    console.log("start crea vinculo");
    if (this.idTour_stop != undefined) {
      console.log("idTour_stop is defined");
      this.getTour_stop(this.idTour_stop);
    }
    this.getTours();
    this.getStops();
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


