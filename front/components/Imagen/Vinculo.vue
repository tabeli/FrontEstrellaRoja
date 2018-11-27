<template>
    <div class="container">
      <br>
      <div>
    <div class="row">
    <!--Buscador-->
    <div class="col">
      <form class="form-inline">
        <input class="form-control mr-sm-2 sombra" type="search" placeholder="Ingrese texto a buscar" aria-label="Search">
        <button class="btn btn-light my-2 my-sm-0 sombra" type="submit"><img src="@/static/magnifier.png" width="20" height="20"></button> 
      </form>
    </div>
    <!--Agregar-->
      <div class = "col text-right">
        <nuxt-link :to="{ name: 'imagen-agregarvinculo' }" replace>
        <button type="button" class="btn btn-success text-right shadow">Agregar</button>
        </nuxt-link> 
      </div>
    </div>
    <!--Tabla-->
    <table class="table mt-3">
      <thead class="bg-success">
        <tr class="sombra">
          <th scope="col">ID del Lugar</th>
          <th scope="col">Nombre del Lugar</th>
          <th scope="col">ID de la Imagen</th>
          <th scope="col">Descripción de la Imagen</th>
          <th scope="col">Editar</th>
          <th scope="col">Borrar</th>
        </tr>
      </thead>
        <tbody class="sombra text-align">
          <tr  v-for="place_image in this.$store.state.place_images" :key='place_image.id' >
            <td v-for="place in $store.state.places" :key="place.id" v-if="place_image.place_id == place.id">{{ place.id }}</td>
            <td v-for="place in $store.state.places" :key="place.id" v-if="place_image.place_id == place.id">{{ place.name }}</td>
            <td v-for="image in $store.state.images" :key="image.id" v-if="place_image.image_id == image.id">{{ image.id }}</td>
            <td v-for="image in $store.state.images" :key="image.id" v-if="place_image.image_id == image.id">{{ image.description }}</td>
            <td><button class="btn btn-outline-info" type="button" @click="editPlace_imageAction(place_image.id)"><img src="@/static/pencil.png"></button></td>
            <td><button class="btn btn-outline-danger" type="button" @click="deletePlace_imageAction(place_image.id)"><img src="@/static/basurero.png"></button></td>
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
    async getPlace_images() {
      await axios({
        method: "get",
        url: "https://adsoft-01.appspot.com/api/place_image"
      })
        .then(
          function(response) {
            console.log("response");
            console.log(response);
            this.$store.commit({
              type: "storePlace_images",
              place_images: response.data
            });
          }.bind(this)
        )
        .catch(function(error) {
          console.log("error");
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
            console.log("response");
            console.log(response);
            this.$store.commit({
              type: "storePlaces",
              places: response.data
            });
          }.bind(this)
        )
        .catch(function(error) {
          console.log("error");
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
            console.log("response");
            console.log(response);
            this.$store.commit({
              type: "storeImages",
              images: response.data
            });
          }.bind(this)
        )
        .catch(function(error) {
          console.log("error");
          console.log(error);
        });
    },
    async deletePlace_image(id) {
      console.log("Delete place image");
      await axios({
        method: "delete",
        url:
          "https://adsoft-01.appspot.com/api/place_image/" + id,
        data: {
          id: id
        }
      })
        .then(
          function(response) {
            console.log(response);
            this.getPlace_images();
          }.bind(this)
        )
        .catch(function(error) {
          console.log("error");
          console.log(error);
        });
    },
    editPlace_imageAction(id) {
      //send to create view
      this.$router.push({
        name: "imagen-agregarvinculo",
        params: { idPlace_image: id }
      });
    },
    deletePlace_imageAction(id) {
      this.deletePlace_image(id);
    }
  },
  created: function() {
    this.getPlace_images();
    this.getPlaces();
    this.getImages();
  }
};
</script>
  
  <style>
  .bg-success {
  color: #ffffff;
}
  .sombra {
  box-shadow: 0 2px 6px rgba(39, 39, 39, 0.13), 0 2px 6px rgba(39, 39, 39, 0.13);
}
</style>