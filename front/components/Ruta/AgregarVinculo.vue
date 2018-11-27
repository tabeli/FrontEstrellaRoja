<template>
    <div class="container">
      
    <!--Empieza la form-->
        <form>
          <br>
        <!--Tour-->
            <div class="form-group ">
              <center>
                <label for="tour" class="letrabonita" >Visualiza el ID del Tour deseado</label>
              </center>
              <select class="form-control sombra">
                <option v-for="tour in this.$store.state.tours" :key='tour.id' >Nombre: {{tour.name}} -->  ID:{{tour.id}}</option>
              </select>
            </div>
            <div class="form-group">
              <center>
                <label for="tour" class="letrabonita">Escoge el ID del Tour deseado</label>
              </center>
                <input type="text" class="form-control sombra" id="tour" v-model="tour_schedule.tour_id">
            </div>
        <!--Schedule-->
            <div class="form-group ">
              <center>
                <label for="schedule" class="letrabonita">Visualiza el ID del Itinerario</label>
              </center>
              
              <select class="form-control sombra">
                  <div v-for="schedule in this.$store.state.schedules" :key='schedule.id' v-if="tour_schedule.schedule_id == schedule.id">
                      <div v-for="date_interval in $store.state.date_intervals" :key="date_interval.id" v-if="schedule.date_interval_id == date_interval.id">
                            <div v-for="hour_interval in $store.state.hour_intervals" :key="hour_interval.id" v-if="schedule.hour_interval_id == hour_interval.id">
                                <option>Del {{date_interval.start_date}} al {{date_interval.end_date}} de {{hour_interval.start_time}} a {{hour_interval.end_time}} ---> ID: {{schedule.id}}</option>
                            </div>
                      </div>
                  </div>
              </select>
            </div>
            <div class="form-group">
              <center>
                <label for="schedule" class="letrabonita">Escribe el ID del Itinerario</label>
              </center>
                <input type="text" class="form-control sombra" id="schedule" v-model="tour_schedule.schedule_id">
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
            <button type="submit" class="btn btn-success shadow" @click.stop.prevent="place_imageFunction()">
                <div v-if="place_image.id == undefined">Crea Vínculo</div>
                <div v-else>Actualiza Vínculo</div>
            </button>
        </center>
        <br><br> <br><br> <br>
    </div>  
    
</template>

<script>
import axios from "axios";

export default {
  //props is the parameter it receives
  props: ["idPlace_image", "idPlace", "idImage"],
  data: function() {
    return {
      place_image: {}
    };
  },
  methods: {
    place_imageFunction() {
      if (this.place_image.id != undefined) {
        this.editPlace_image();
      } else {
        this.createPlace_image();
      }
    },
    async createPlace_image() {
      //alert(JSON.stringify(this.place_image))
      await axios({
        method: "post",
        url: "https://adsoft-01.appspot.com/api/place_image",
        headers: {
          "Content-Type": "application/json"
        },
        data: {
          place_id: this.place_image.place_id,
          image_id: this.place_image.image_id
        }
      })
        .then(
          function(response) {
            //alert(JSON.stringify(response))
            this.$router.push({ name: "imagen-vinculo" });
          }.bind(this)
        )
        .catch(function(error) {
          /*alert(JSON.stringify(error))*/
          console.log(error);
        });
    },
    async editPlace_image() {
      await axios({
        method: "put",
        url:
          "https://adsoft-01.appspot.com/api/place_image/" +
          this.idPlace_image,
        headers: {
          "Content-Type": "application/json"
        },
        data: {
          place_id: this.place_image.place_id,
          image_id: this.place_image.image_id
        }
      })
        .then(
          function(response) {
            this.$router.push({ name: "imagen-vinculo" });
            //alert("https://adsoft-01.appspot.com/api/place_image/" + this.idPlace_image)
            console.log("response");
            console.log(response);
          }.bind(this)
        )
        .catch(function(error) {
          console.log("error");
          console.log(error);
        });
    },
    async getPlace_image(id) {
      await axios({
        method: "get",
        url: "https://adsoft-01.appspot.com/api/place_image/" + id,
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(
          function(response) {
            this.place_image = response.data;
            console.log(this.place_image);
          }.bind(this)
        )
        .catch(function(error) {
          console.log(error);
        });
    },
    async getPlaces() {
      await axios({
        method: "get",
        url: "https://adsoft-01.appspot.com/api/place"
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
    },
    async getImages() {
      await axios({
        method: "get",
        url: "https://adsoft-01.appspot.com/api/image"
      })
        .then(
          function(response) {
            console.log(response);
            this.$store.commit({
              type: "storeImages",
              images: response.data
            });
          }.bind(this)
        )
        .catch(function(error) {
          console.log(error);
        });
    }
  },

  created: function() {
    console.log("start crea place image");
    if (this.idPlace_image != undefined) {
      console.log("idPlace_image is defined");
      this.getPlace_image(this.idPlace_image);
    }
    this.getPlaces();
    this.getImages();
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
  .sombra {
  box-shadow: 0 2px 6px rgba(39, 39, 39, 0.13), 0 2px 6px rgba(39, 39, 39, 0.13);
}
</style>


