<template>
    <div class="container">
      <br>
      <div class="mt-5">
    <div class="row">
    <!--Buscador-->
    <!--<div class="col">
      <form class="form-inline">
        <input class="form-control mr-sm-2 sombra" type="search" placeholder="Ingrese texto a buscar" aria-label="Search">
        <button class="btn btn-light my-2 my-sm-0 sombra" type="submit"><img src="@/static/magnifier.png" width="20" height="20"></button> 
      </form>
    </div>-->
        <!--Tipo de Lugar-->
      <div class = "col text-center ">    
        <nuxt-link :to="{ name: 'lugares-tipolugar'}" replace>     
        <button type="button" class="btn btn-success shadow">Tipo de Lugar</button>
        </nuxt-link> 
      </div>
    <!--Agregar-->
      <div class = "derecha">
        <nuxt-link :to="{ name: 'lugares-agregar'}" replace> 
        <button type="button" class="btn btn-success shadow">Agregar</button>
        </nuxt-link> 
      </div>
    </div>
    <!--Tabla-->
    <table class="table mt-3 col-11">
      <thead class="bg-success text-center">
        <tr class="sombra">
          <th scope="col">Id</th>
          <th scope="col">Nombre</th>
          <th scope="col">Tipo de lugar</th>
          <th scope="col">Descripcion Narrativa</th>
          <th scope="col">Longitud</th>
          <th scope="col">Latitud</th>
          <th scope="col">Descripcion Lugar</th>
          <th scope="col">Editar</th>
          <th scope="col">Borrar</th>
        </tr>
      </thead>
        <tbody class="sombra">
          <tr v-for="place in this.$store.state.places" :key='place.id'>
            <td>{{ place.id }}</td>
            <td>{{ place.name }}</td>
            <th v-for="place_type in $store.state.place_types" :key='place_type.id' v-if="place.place_type_id == place_type.id">{{ place_type.name }}</th>
            <td v-for="narrative in $store.state.narratives" :key='narrative.id' v-if="place.narrative_id == narrative.id">{{ narrative.description }}</td>
            <td>{{ place.longitude }}</td>
            <td>{{ place.latitude }}</td>
            <td>{{ place.description }}</td>
            <td><button class="btn btn-outline-info" type="button" @click="editPlaceAction(place.id)"><img src="@/static/pencil.png"></button></td>
            <td><button class="btn btn-outline-danger" type="button" @click="deletePlaceAction(place.id)"><img src="@/static/basurero.png"></button></td>
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
    async getPlace_types() {
      await axios({
        method: "get",
        url: "http://principal-arena-219118.appspot.com/api/place_type"
      })
        .then(
          function(response) {
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
    async getPlace_images() {
      await axios({
        method: "get",
        url: "http://principal-arena-219118.appspot.com/api/place_image"
      })
        .then(
          function(response) {
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
            this.$store.commit({
              type: "storeImages",
              images: response.data
            });
          }.bind(this)
        )
        .catch(function(error) {
          console.log(error);
        });
    },
    async deletePlace(id) {
      console.log("Delete schedule");
      await axios({
        method: "delete",
        url: "http://principal-arena-219118.appspot.com/api/place/" + id,
        data: {
          id: id
        }
      })
        .then(
          function(response) {
            console.log(response);
            this.getPlaces();
            this.getPlace_types();
            this.getNarratives();
            this.getPlace_images();
            this.getImages();
          }.bind(this)
        )
        .catch(function(error) {
          console.log(error);
        });
    },
    editPlaceAction(id) {
      //send to create view
      this.$router.push({ name: "lugares-agregar", params: { idPlace: id } });
    },
    deletePlaceAction(id) {
      this.deletePlace(id);
    }
  },
  created: function() {
    this.getPlaces();
    this.getPlace_types();
    this.getNarratives();
    this.getPlace_images();
    this.getImages();
  }
};
  </script>
  
  <style>
  .sombra {
  box-shadow: 0 2px 6px rgba(39, 39, 39, 0.13), 0 2px 6px rgba(39, 39, 39, 0.13);
}
  .switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}
.derecha {
  padding-right: 110px;
  margin-left: 160px;
}


/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .5s;
  transition: .5s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #ffcc2f;
}

input:focus + .slider {
  box-shadow: 0 0 1px #ffcc2f;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
  </style>