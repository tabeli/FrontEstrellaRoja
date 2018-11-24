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
    <!--Agregar-->
      <div class = "derecha">
        <nuxt-link :to="{ name: 'lugares-tipolugaragregar' }" replace>
        <button type="button" class="btn btn-success text-right sombra">Agregar</button>
        </nuxt-link> 
      </div>
    </div>
    <!--Tabla-->
    <table class="table mt-3 col-11">
      <thead class="bg-success text-center">
        <tr class="sombra">
          <th scope="col">Nombre</th>
          <th scope="col">Editar</th>
          <th scope="col">Borrar</th>
        </tr>
      </thead>
        <tbody class="text-center sombra">
          <tr v-for="place_type in this.$store.state.place_types" :key='place_type.id'>
            <th>{{ place_type.name }}</th>
            <td><button class="btn btn-outline-info" type="button" @click="editPlace_typeAction(place_type.id)"><img src="@/static/pencil.png"></button></td>
            <td><button class="btn btn-outline-danger" type="button" @click="deletePlace_typeAction(place_type.id)"><img src="@/static/basurero.png"></button></td>
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
    async deletePlace_type(id) {
      console.log("Delete place type");
      await axios({
        method: "delete",
        url: "http://principal-arena-219118.appspot.com/api/place_type/" + id,
        data: {
          id: id
        }
      })
        .then(
          function(response) {
            console.log(response);
            this.getPlace_types();
          }.bind(this)
        )
        .catch(function(error) {
          console.log(error);
        });
    },
    editPlace_typeAction(id) {
      //send to create view
      this.$router.push({ name: "lugares-tipolugaragregar", params: { idPlace_type: id } });
    },
    deletePlace_typeAction(id) {
      this.deletePlace_type(id);
    }
  },
  created: function() {
    this.getPlace_types();
  }
};
</script>
  
  <style>
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
.bg-success {
  color: #ffffff;
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
  -webkit-transition: 0.5s;
  transition: 0.5s;
}

.sombra {
  box-shadow: 0 2px 6px rgba(39, 39, 39, 0.13), 0 2px 6px rgba(39, 39, 39, 0.13);
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}


/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>