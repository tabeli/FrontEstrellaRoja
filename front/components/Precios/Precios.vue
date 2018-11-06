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
        <nuxt-link :to="{ name: 'precio-agregar' }" replace>
        <button type="button" class="btn btn-info text-right">Agregar</button>
        </nuxt-link> 
      </div>
    </div>
    <!--Tabla-->
    <table class="table mt-3">
      <thead class="bg-success">
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Ruta</th>
          <th scope="col">Tipo de ticket</th>
          <th scope="col">Precio</th>
          <th scope="col">Editar</th>
          <th scope="col">Borrar</th>
        </tr>
      </thead>
        <tbody>
          <tr v-for="price in this.$store.state.prices" :key='price.id'>
            <th>{{ price.id }}</th>
            <th>{{ price.tour_id }}</th>
            <td>{{ price.ticket_type_id }}</td>
            <td>{{ price.amount }}</td>
            <td><button class="btn btn-info" type="button" @click="editPriceAction(price.id)"><img src="@/static/pencil.png"></button></td>
            <td><button class="btn btn-info" type="button" @click="deletePriceAction(price.id)"><img src="@/static/basurero.png"></button></td>
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
    async getPrices() {
      await axios({
        method: "get",
        url: "http://principal-arena-219118.appspot.com/api/price"
      })
        .then(
          function(response) {
            console.log("response");
            console.log(response);
            this.$store.commit({
              type: "storePrices",
              prices: response.data
            });
          }.bind(this)
        )
        .catch(function(error) {
          console.log("error");
          console.log(error);
        });
    },
    async deletePrice(id) {
      console.log("Delete price");
      await axios({
        method: "delete",
        url: "http://principal-arena-219118.appspot.com/api/price/" + id,
        data: {
          id: id
        }
      })
        .then(
          function(response) {
            console.log("response");
            console.log(response);
            this.getPrices();
          }.bind(this)
        )
        .catch(function(error) {
          console.log("error");
          console.log(error);
        });
    },
    editPriceAction(id) {
      //send to create view
      this.$router.push({ name: "", params: { idPrice: id } });
    },
    deletePriceAction(id) {
      this.deletePrice(id);
    }
  },
  created: function() {
    this.getPrices();
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
.derecha{
  padding-right: 110px;
  margin-left:  160px;
}
.bg-success {
  color:#FFFFFF
}
</style>


