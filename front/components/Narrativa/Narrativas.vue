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
        <nuxt-link :to="{ name: 'narrativa-agregar' }" replace>
        <button type="button" class="btn btn-success text-right shadow">Agregar</button>
        </nuxt-link> 
      </div>
    </div>
    <!--Tabla-->
    <table class="table mt-3">
      <thead class="bg-success">
        <tr class="sombra">
          <th scope="col">Path del audio</th>
          <th scope="col">Descripción</th>
          <th scope="col">Editar</th>
          <th scope="col">Borrar</th>
        </tr>
      </thead>
        <tbody class="sombra">
          <tr v-for="narrative in this.$store.state.narratives" :key='narrative.id'>
            <th>{{ narrative.audio_path }}</th>
            <td>{{ narrative.description }}</td>
            <td><button class="btn btn-outline-info" type="button" @click="editNarrativeAction(narrative.id)"><img src="@/static/pencil.png"></button></td>
            <td><button class="btn btn-outline-danger" type="button" @click="deleteNarrativeAction(narrative.id)"><img src="@/static/basurero.png"></button></td>
          </tr>
        </tbody>
    </table>
    <br> <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
  </div> 
  </div>
</template>

<script>
import axios from "axios";

export default {
  methods: {
    //obtener narratives
    async getNarratives() {
      await axios({
        method: "get",
        url: "https://adsoft-01.appspot.com/api/narrative"
      })
        .then(
          function(response) {
            console.log("response");
            console.log(response);
            this.$store.commit({
              type: "storeNarratives",
              narratives: response.data
            });
          }.bind(this)
        )
        .catch(function(error) {
          console.log("error");
          console.log(error);
        });
    },
    //borrar narrativa
    async deleteNarrative(id) {
      console.log("Delete narrative");
      await axios({
        method: "delete",
        url: "https://adsoft-01.appspot.com/api/narrative/" + id,
        data: {
          id: id
        }
      })
        .then(
          function(response) {
            console.log("response");
            console.log(response);
            this.getNarratives();
          }.bind(this)
        )
        .catch(function(error) {
          console.log("error");
          console.log(error);
        });
    },
    //editar narrative action
    editNarrativeAction(id) {
      //send to create view
      this.$router.push({
        name: "narrativa-agregar",
        params: { idNarrative: id }
      });
    },
    deleteNarrativeAction(id) {
      this.deleteNarrative(id);
    }
  },
  created: function() {
    this.getNarratives();
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


