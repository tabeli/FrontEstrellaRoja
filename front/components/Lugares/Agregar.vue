<template>
    <div class="container mt-5">
    <!--Empieza la form-->
        <form>
        <!-- Tipo de lugar -->
            <div class="form-group ">
              <center>
                <label for="place_type" class="letrabonita" >Visualiza el ID del tipo de Lugar deseado</label>
              </center>
              <select class="form-control sombra">
                <option v-for="place_type in this.$store.state.place_types" :key='place_type.id' >{{place_type.name}} -->  ID:{{place_type.id}}</option>
              </select>
              <br>
              <center>
                <label for="option">No lo encuentras ? Puedes crear uno nuevo</label>
                <nuxt-link :to="{ name: 'lugares-tipolugaragregar' }" replace>
                <button type="button" class="btn btn-info text-right shadow">Agregar</button>
                <br>
                </nuxt-link> 
              </center>
            </div>
            <div class="form-group">
              <center>
                <label for="place_type" class="letrabonita">Escoge el ID del tipo de Lugar</label>
              </center>
                
                <select class="form-control sombra" id="place_type" v-model="place.place_type_id">
                    <option v-for="place_type in this.$store.state.place_types"  :key='place_type.id' >{{place_type.id}}</option>
                </select>
            </div>
        <!-- Narrativa -->
            <div class="form-group ">
              <center>
                <label for="narrative_id" class="letrabonita" >Visualiza el ID de la narrativa deseada</label>
              </center>
              <select class="form-control sombra">
                <option v-for="narrative in this.$store.state.narratives" :key='narrative.id' >{{narrative.audio_path}} -->  ID:{{narrative.id}}</option>
              </select>
              <br>
              <center>
                <label for="option">No lo encuentras ? Puedes crear una nueva</label>
                <!-- Falta el link para las narrativas -->
                <nuxt-link :to="{ name: 'narrativa-agregar' }" replace>
                <button type="button" class="btn btn-info text-right shadow">Agregar</button>
                <br>
                </nuxt-link> 
              </center>
            </div>
            <div class="form-group">
              <center>
                <label for="narrative" class="letrabonita">Escoge el ID de la narrativa</label>
              </center>
                
                <select class="form-control sombra" id="mural" v-model="place.narrative_id">
                    <option v-for="narrative in this.$store.state.narratives"  :key='narrative.id' >{{narrative.id}}</option>
                </select>
            </div>
        <!--Nombre-->
            <div class="form-group">
                <center>
                    <label for="name" class="letrabonita">Nombre</label>
                </center>
                
                <input type="text" class="form-control sombra" id="name" v-model="place.name">
            </div>
        <!--Longitud-->
            <div class="form-group">
                <center>
                    <label for="longitude" class="letrabonita">Longitud</label>
                </center>
                
                <input type="text" class="form-control sombra" id="longitude" v-model="place.longitude">
            </div>
        <!--Latitud-->
            <div class="form-group">
                <center>
                    <label for="latitude" class="letrabonita">Latitud</label>
                </center>
                
                <input type="text" class="form-control sombra" id="latitude" v-model="place.latitude">
            </div>
        
        <!--Descripcion-->
            <div class="form-group">
                <center>
                    <label for="description" class="letrabonita">Descripción</label>
                </center>
                
                <input type="text" class="form-control sombra" id="description" v-model="place.description">
            </div>
        </form>
    <!--Termina la form-->

    <!--Boton Agregar-->
        <center>
            <button type="submit" class="btn btn-success shadow" @click.stop.prevent="placeFunction()">
                <div v-if="place.id == undefined">Crea Lugar</div>
                <div v-else>Actualiza Lugar</div>
            </button>
        </center>
        <br>
    </div>   
</template>

<script>
import axios from "axios";

export default {
  //props is the parameter it receives
  props: ["idPlace", "idPlace_type", "idNarrative", "idPlace_image", "idImage"],
  data: function() {
    return {
      place: {}
    };
  },
  methods: {
    placeFunction() {
      if (this.place.id != undefined) {
        this.editPlace();
      } else {
        this.createPlace();
      }
    },
    async createPlace() {
      //alert(JSON.stringify(this.place))
      await axios({
        method: "post",
        url: "http://principal-arena-219118.appspot.com/api/place",
        headers: {
          "Content-Type": "application/json"
        },
        data: {
          place_type_id: this.place.place_type_id,
          narrative_id: this.place.narrative_id,
          name: this.place.name,
          longitude: this.place.longitude,
          latitude: this.place.latitude,
          description: this.place.description
        }
      })
        .then(
          function(response) {
            //alert(JSON.stringify(response))
            this.$router.push({ name: "lugares" });
          }.bind(this)
        )
        .catch(function(error) {
          /*alert(JSON.stringify(error))*/
          console.log(error);
        });
    },
    async editPlace() {
      await axios({
        method: "put",
        url:
          "http://principal-arena-219118.appspot.com/api/place/" + this.idPlace,
        headers: {
          "Content-Type": "application/json"
        },
        data: {
          place_type_id: this.place.place_type_id,
          narrative_id: this.place.narrative_id,
          name: this.place.name,
          longitude: this.place.longitude,
          latitude: this.place.latitude,
          description: this.place.description
        }
      })
        .then(
          function(response) {
            this.$router.push({ name: "lugares" });
            //alert("http://principal-arena-219118.appspot.com/api/place/" + this.idPlace)
            console.log("response");
            console.log(response);
          }.bind(this)
        )
        .catch(function(error) {
          console.log("error");
          console.log(error);
        });
    },
    async getPlace(id) {
      await axios({
        method: "get",
        url: "http://principal-arena-219118.appspot.com/api/place/" + id,
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(
          function(response) {
            this.place = response.data;
            console.log(this.place);
          }.bind(this)
        )
        .catch(function(error) {
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
    async getPlace_types() {
      await axios({
        method: "get",
        url: "http://principal-arena-219118.appspot.com/api/place_type"
      })
        .then(
          function(response) {
            console.log(response);
            this.$store.commit({
              type: "storePlace_types",
              place_types: response.data
            });
          }.bind(this)
        )
        .catch(function(error) {
          console.log(error);
        });
    },
    async getNarratives() {
      await axios({
        method: "get",
        url: "http://principal-arena-219118.appspot.com/api/narrative"
      })
        .then(
          function(response) {
            console.log(response);
            this.$store.commit({
              type: "storeNarratives",
              narratives: response.data
            });
          }.bind(this)
        )
        .catch(function(error) {
          console.log(error);
        });
    },
    async getPlace_image() {
      await axios({
        method: "get",
        url: "http://principal-arena-219118.appspot.com/api/place_image"
      })
        .then(
          function(response) {
            console.log(response);
            this.$store.commit({
              type: "storePlace_images",
              place_images: response.data
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
    console.log("start crea lugar");
    if (this.idPlace != undefined) {
      console.log("idPlace is defined");
      this.getPlace(this.idPlace);
    }
    if (this.idNarrative != undefined) {
      console.log("idNarrative is not defined");
      this.getNarratives();
    }
    if (this.idPlace_type != undefined) {
      console.log("idPlace_type is not defined");
      this.getPlace_types();
    }
    this.getNarratives();
    this.getPlace_types();
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