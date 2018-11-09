<template>
    <div class="container">
      <br>
      <div>
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
        <nuxt-link :to="{ name: 'boletos-tipoboletoeditar' }" replace>
        <button type="button" class="btn btn-info text-right">Agregar</button>
        </nuxt-link> 
      </div>
    </div>
    <!--Tabla-->
    <table class="table mt-3">
      <thead class="bg-success">
        <tr>
          <th scope="col">Nombre</th>
          <th scope="col">Editar</th>
          <th scope="col">Borrar</th>
        </tr>
      </thead>
        <tbody>
          <tr v-for="ticket_type in this.$store.state.ticket_types" :key='ticket_type.id'>
            <th>{{ ticket_type.name }}</th>
            <td><button class="btn btn-info" type="button" @click="editTicket_typeAction(ticket_type.id)"><img src="@/static/pencil.png"></button></td>
            <td><button class="btn btn-info" type="button" @click="deleteTicket_typeAction(ticket_type.id)"><img src="@/static/basurero.png"></button></td>
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
    async getTicket_types() {
      await axios({
        method: "get",
        url: "http://principal-arena-219118.appspot.com/api/ticket_type"
      })
        .then(
          function(response) {
            console.log("response");
            console.log(response);
            this.$store.commit({
              type: "storeTicket_types",
              ticket_types: response.data
            });
          }.bind(this)
        )
        .catch(function(error) {
          console.log("error");
          console.log(error);
        });
    },
    async deleteTicket_type(id) {
      console.log("Delete ticket type");
      await axios({
        method: "delete",
        url: "http://principal-arena-219118.appspot.com/api/ticket_type/" + id,
        data: {
          id: id
        }
      })
        .then(
          function(response) {
            console.log(response);
            this.getTicket_types();
          }.bind(this)
        )
        .catch(function(error) {
          console.log("error");
          console.log(error);
        });
    },
    editTicket_typeAction(id) {
      //send to create view
      this.$router.push({ name: "", params: { idTicket_type: id } });
    },
    deleteTicket_typeAction(id) {
      this.deleteTicket_type(id);
    }
  },
  created: function() {
    this.getTicket_types();
  }
};
</script>
  
  <style>
</style>