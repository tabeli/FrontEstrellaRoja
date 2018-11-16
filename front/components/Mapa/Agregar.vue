<template>
    <div class="container">
    <!--Empieza la form-->
        <form>
        <!--Tour-->
            <div class="form-group ">
              <center>
                <label for="tour" class="letrabonita" >Visualiza el ID del Tour deseado</label>
              </center>
              <select class="form-control">
                <option v-for="tour in this.$store.state.tours" :key='tour.id' >Nombre: {{tour.name}}-->  ID:{{tour.id}}</option>
              </select>
            </div>
            <div class="form-group">
              <center>
                <label for="tour" class="letrabonita">Escoge el ID del Tour deseado</label>
              </center>
                <select class="form-control" id="tour" v-model="tour_place.tour_id">
                    <option v-for="tour in this.$store.state.tours"  :key='tour.id' >{{tour.id}}</option>
                </select>
            </div>
        <!--Place-->
            <div class="form-group ">
              <center>
                <label for="place" class="letrabonita">Visualiza el ID del Lugar deseado</label>
              </center>
              
              <select class="form-control">
                <option v-for="place in this.$store.state.places" :key='place.id' >Nombre: {{place.name}}  -->  ID:{{place.id}}</option>
              </select>
            </div>
            <div class="form-group">
              <center>
                <label for="place" class="letrabonita">Escoge el ID del Lugar deseado</label>
              </center>
                <select class="form-control" name="place" id="place" v-model="tour_place.place_id">
                    <option v-for="place in this.$store.state.places" :key='place.id' >{{place.id}}</option>
                </select>
            </div>
    <!--Termina la form-->
    </form>
    <center>
      <div class="letrabonita">
      </div>
    </center>
    <!--Boton Agregar-->
        <br/>
        <center>
            <button type="submit" class="btn btn-danger" @click.stop.prevent="tour_placeFunction()">
                <div v-if="tour_place.id == undefined">Crea Vínculo</div>
                <div v-else>Actualiza Vínculo</div>
            </button>
        </center>
    </div>   
</template>

<script>
import axios from "axios";

export default {
  //props is the parameter it receives
  props: ["idTour_place", "idTour", "idPlace"],
  data: function() {
    return {
      tour_place: {}
    };
  },
  methods: {
    tour_placeFunction() {
      if (this.tour_place.id != undefined) {
        this.editTour_place();
      } else {
        this.createTour_place();
      }
    },
    async createTour_place() {
      //alert(JSON.stringify(this.tour_place))
      await axios({
        method: "post",
        url: "http://principal-arena-219118.appspot.com/api/tour_place",
        headers: {
          "Content-Type": "application/json"
        },
        data: {
          tour_id: this.tour_place.tour_id,
          place_id: this.tour_place.place_id
        }
      })
        .then(
          function(response) {
            //alert(JSON.stringify(response))
            this.$router.push({ name: "mapa-ruta" });
          }.bind(this)
        )
        .catch(function(error) {
          /*alert(JSON.stringify(error))*/
          console.log(error);
        });
    },
    async editTour_place() {
      await axios({
        method: "put",
        url:
          "http://principal-arena-219118.appspot.com/api/tour_place/" +
          this.idTour_place,
        headers: {
          "Content-Type": "application/json"
        },
        data: {
          tour_id: this.tour_place.tour_id,
          place_id: this.tour_place.place_id
        }
      })
        .then(
          function(response) {
            this.$router.push({ name: "mapa-ruta" });
            //alert("http://principal-arena-219118.appspot.com/api/tour_place/" + this.idTour_place)
            console.log("response");
            console.log(response);
          }.bind(this)
        )
        .catch(function(error) {
          console.log("error");
          console.log(error);
        });
    },
    async getTour_place(id) {
      await axios({
        method: "get",
        url: "http://principal-arena-219118.appspot.com/api/tour_place/" + id,
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(
          function(response) {
            this.tour_place = response.data;
            console.log(this.tour_place);
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
    async getPlaces() {
      await axios({
        method: "get",
        url: "http://principal-arena-219118.appspot.com/api/place"
      })
        .then(
          function(response) {
            console.log(response);
            this.$store.commit({
              type: "storePlaces",
              places: response.data
            });
          }.bind(this)
        )
        .catch(function(error) {
          console.log(error);
        });
    }
  },

  created: function() {
    console.log("start crea tour place");
    if (this.idTour_place != undefined) {
      console.log("idTour_place is defined");
      this.getTour_place(this.idTour_place);
    }
    this.getTours();
    this.getPlaces();
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


