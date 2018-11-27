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
      <div class = "col text-right">
        <nuxt-link :to="{ name: 'mural-agregar' }" replace>
        <button type="button" class="btn btn-success text-right shadow">Agregar</button>
        </nuxt-link> 
      </div>
    </div>
    <!--Tabla-->
    <table class="table mt-3">
      <thead class="bg-success">
        <tr class="sombra">
          <th scope="col">Titulo</th>
          <th scope="col">Nombre del autor</th>
          <th scope="col">Apellido del autor</th>
          <th scope="col">Descripción</th>
          <th scope="col">Imágen</th>
          <th scope="col">Editar</th>
          <th scope="col">Borrar</th>
        </tr>
      </thead>
        <tbody class="sombra">
          <tr v-for="mural in this.$store.state.murals" :key='mural.id'>
            <th>{{ mural.title }}</th>
            <td>{{ mural.author_name }}</td>
            <td>{{ mural.author_last_name }}</td>
            <td>{{ mural.description }}</td>
            <td>{{ mural.image_path }}</td>
            <td><button class="btn btn-outline-info" type="button" @click="editMuralAction(mural.id)"><img src="@/static/pencil.png"></button></td>
            <td><button class="btn btn-outline-danger" type="button" @click="deleteMuralAction(mural.id)"><img src="@/static/basurero.png"></button></td>
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
    async getMurals() {
      await axios({
        method: "get",
        url: "https://adsoft-01.appspot.com/api/mural"
      })
        .then(
          function(response) {
            console.log("response");
            console.log(response);
            this.$store.commit({
              type: "storeMurals",
              murals: response.data
            });
          }.bind(this)
        )
        .catch(function(error) {
          console.log("error");
          console.log(error);
        });
    },
    async deleteMural(id) {
      console.log("Delete mural");
      await axios({
        method: "delete",
        url: "https://adsoft-01.appspot.com/api/mural/" + id,
        data: {
          id: id
        }
      })
        .then(
          function(response) {
            console.log("response");
            console.log(response);
            this.getMurals();
          }.bind(this)
        )
        .catch(function(error) {
          console.log("error");
          console.log(error);
        });
    },
    editMuralAction(id) {
      //send to create view
      this.$router.push({ name: "mural-agregar", params: { idMural: id } });
    },
    deleteMuralAction(id) {
      this.deleteMural(id);
    }
  },
  created: function() {
    this.getMurals();
  }
};
</script>

<style>
.container {
  margin-left: 160px; /* Same as the width of the sidenav */
  font-size: 15px; /* Increased text to enable scrolling */
  text-align: center;
  align-content: center;
}
.derecha {
  padding-right: 110px;
  margin-left: 160px;
}
.bg-success {
  color: #ffffff;
}
.sombra {
  box-shadow: 0 2px 6px rgba(39, 39, 39, 0.13), 0 2px 6px rgba(39, 39, 39, 0.13);
}
</style>


