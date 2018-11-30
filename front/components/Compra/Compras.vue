<template>
  <div class="container">
    <br>
    <div class="mt-5">
    <div class="row">
    <!--Buscador-->
    <!-- <div class="col">
      <form class="form-inline">
       <input class="form-control mr-sm-2" type="search" placeholder="Ingrese texto a buscar" aria-label="Search">
        <button class="btn btn-outline-danger my-2 my-sm-0" type="submit"><img src="@/static/magnifier.png" width="20" height="20"></button> 
      </form>
    </div> -->
    <!--Tipo de boletos-->
      <div class = "col text-center">
        <nuxt-link :to="{ name: 'boletos-tipoboleto'}" replace>     
        <button type="button" class="btn btn-success sombra">Tipo de boleto</button>
        </nuxt-link> 
      </div>
    <!--Agregar-->
      <div class = "col text-right">
        <nuxt-link :to="{ name: 'boletos-agregar'}" replace>
        <button type="button" class="btn btn-success text-right shadow">Agregar</button>
        </nuxt-link> 
      </div>
    </div>
    <!--Tabla-->
    <table class="table mt-3">
      <thead class="bg-success">
        <tr class="sombra">
          <th scope="col">ID</th>
          <th scope="col">Nombre del cliente</th>
          <th scope="col">Género</th>
          <th scope="col">Fecha del tour</th>
          <th scope="col">Total</th>
          <th scope="col">Detalles</th>
          <th scope="col">Editar</th>
          <th scope="col">Borrar</th>
        </tr>
      </thead>
        <tbody class="sombra">
          <tr v-for="ticket in this.$store.state.tickets" :key='ticket.id'>
            <th>{{ ticket.id }}</th>
            <th>{{ ticket.client_name }}</th>
            <td>{{ ticket.client_genre }}</td>
            <td>{{ ticket.tour_date }}</td>
            <td>{{ ticket.total }}</td>
             <td><button class="btn btn-outline-info" type="button" @click="details(ticket.purchase_id)"><img src="@/static/file.png"></button></td>
            <td><button class="btn btn-outline-info" type="button" @click="editTicketAction(ticket.id)"><img src="@/static/pencil.png"></button></td>
            <td><button class="btn btn-outline-danger" type="button" @click="deleteTicketAction(ticket.id)"><img src="@/static/basurero.png"></button></td>
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
    async getTickets() {
      await axios({
        method: "get",
        url: "https://adsoft-01.appspot.com/api/ticket"
      })
        .then(
          function(response) {
            console.log("response");
            console.log(response);
            this.$store.commit({
              type: "storeTickets",
              tickets: response.data
            });
          }.bind(this)
        )
        .catch(function(error) {
          console.log("error");
          console.log(error);
        });
    },
    async getPurchases() {
      await axios({
        method: "get",
        url: "https://adsoft-01.appspot.com/api/purchase"
      })
        .then(
          function(response) {
            console.log("response");
            console.log(response);
            this.$store.commit({
              type: "storePurchases",
              purchases: response.data
            });
          }.bind(this)
        )
        .catch(function(error) {
          console.log("error");
          console.log(error);
        });
    },
    async getUsers() {
      await axios({
        method: "get",
        url: "https://adsoft-01.appspot.com/api/user"
      })
        .then(
          function(response) {
            console.log("response");
            console.log(response);
            this.$store.commit({
              type: "storeUsers",
              users: response.data
            });
          }.bind(this)
        )
        .catch(function(error) {
          console.log("error");
          console.log(error);
        });
    },
    async deleteTicket(id) {
      console.log("Delete ticket");
      await axios({
        method: "delete",
        url: "https://adsoft-01.appspot.com/api/ticket/" + id,
        data: {
          id: id
        }
      })
        .then(
          function(response) {
            console.log("response");
            console.log(response);
            this.getTickets();
          }.bind(this)
        )
        .catch(function(error) {
          console.log("error");
          console.log(error);
        });
    },

    editTicketAction(id) {
      //send to create view
      this.$router.push({ name: "boletos-agregar", params: { idTicket: id } });
    },
    deleteTicketAction(id) {
      this.deleteTicket(id);
    }
  },
  created: function() {
    this.getTickets();
    this.getPurchases();
    this.getUsers();
  }
};
</script>

<style>
.modal-lg {
  max-width: 900px;
}
.sombra {
  box-shadow: 0 2px 6px rgba(39, 39, 39, 0.13), 0 2px 6px rgba(39, 39, 39, 0.13);
}
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


