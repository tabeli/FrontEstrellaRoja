<template>
    <div class="container">
      
    <!--Empieza la form-->
        <form>
          <br>
        <!--Place-->
            <div class="form-group ">
              <center>
                <label for="place" class="letrabonita" >Visualiza el ID del Lugar deseado</label>
              </center>
              <select class="form-control sombra">
                <option v-for="place in this.$store.state.places" :key='place.id' v-if="place.place_type_id != 20 ">Nombre: {{place.name}}-->  ID:{{place.id}}</option>
              </select>
            </div>
            <div class="form-group">
              <center>
                <label for="place" class="letrabonita">Escoge el ID del Lugar deseado</label>
              </center>
                <input type="text" class="form-control sombra" id="place" v-model="place_image.place_id">
            </div>
        <!--Image-->
            <div class="form-group ">
              <center>
                <label for="image" class="letrabonita">Visualiza el ID de la Imagen deseada</label>
              </center>
              
              <select class="form-control sombra">
                <option v-for="image in this.$store.state.images" :key='image.id' >Nombre: {{image.description}}  -->  ID:{{image.id}}</option>
              </select>
            </div>
            <div class="form-group">
              <center>
                <label for="image" class="letrabonita">Escribe el ID de la Imagen deseada</label>
              </center>
                <input type="text" class="form-control sombra" id="image" v-model="place_image.image_id">
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
        url: "http://principal-arena-219118.appspot.com/api/place_image",
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
          "http://principal-arena-219118.appspot.com/api/place_image/" +
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
            //alert("http://principal-arena-219118.appspot.com/api/place_image/" + this.idPlace_image)
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
        url: "http://principal-arena-219118.appspot.com/api/place_image/" + id,
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
    },
    async getImages() {
      await axios({
        method: "get",
        url: "http://principal-arena-219118.appspot.com/api/image"
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


