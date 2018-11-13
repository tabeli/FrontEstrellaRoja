<template>
  <div class="container">
    <br>
    <div class="mt-5">
    <div class="row">
    <!--Buscador-->
    <div class="col">
      <form class="form-inline">
        <input class="form-control mr-sm-2" type="search" placeholder="Ingrese texto a buscar" aria-label="Search">
        <button class="btn btn-outline-danger my-2 my-sm-0" type="submit"><img src="@/static/magnifier.png" width="20" height="20"></button> 
      </form>
    </div>
    <!--Agregar-->
      <div class = "col text-right">
        <nuxt-link :to="{ name: 'narrativa-agregar' }" replace>
        <button type="button" class="btn btn-info text-right">Agregar</button>
        </nuxt-link> 
      </div>
    </div>
    <!--Tabla-->
    <table class="table mt-3">
      <thead class="bg-success">
        <tr>
          <th scope="col">Path del audio</th>
          <th scope="col">Descripción</th>
          <th scope="col">Editar</th>
          <th scope="col">Borrar</th>
        </tr>
      </thead>
        <tbody>
          <tr v-for="narrative in this.$store.state.narratives" :key='narrative.id'>
            <th>{{ narrative.audio_path }}</th>
            <td>{{ narrative.description }}</td>
            <td><button class="btn btn-info" type="button" @click="editNarrativeAction(narrative.id)"><img src="@/static/pencil.png"></button></td>
            <td><button class="btn btn-info" type="button" @click="deleteNarrativeAction(narrative.id)"><img src="@/static/basurero.png"></button></td>
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
    async getNarratives() {
      await axios({
        method: "get",
        url: "http://principal-arena-219118.appspot.com/api/narrative"
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
    async deleteNarrative(id) {
      console.log("Delete narrative");
      await axios({
        method: "delete",
        url: "http://principal-arena-219118.appspot.com/api/narrative/" + id,
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
</style>


