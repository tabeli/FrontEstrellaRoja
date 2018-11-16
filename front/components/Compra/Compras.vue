<template>

    <div  class="container">
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
    </div>
    <!--Tabla-->
    <table class="table mt-3">
      <thead class="bg-success">
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Nombre</th>
          <th scope="col">Apellido</th>
          <th scope="col">Email</th>
          <th scope="col">Subtotal</th>
          <th scope="col">Total</th>
          <th scope="col">Borrar</th>
        </tr>
      </thead>
        <tbody>
          <tr v-for="purchase in this.$store.state.purchases" :key='purchase.id'>
            <td>{{ purchase.id }}</td>
            <td v-for="user in $store.state.users" :key='user.id' v-if="purchase.user_id == user.id">{{ user.name }}</td>
            <td v-for="user in $store.state.users" :key='user.id' v-if="purchase.user_id == user.id">{{ user.last_name }}</td>
            <td v-for="user in $store.state.users" :key='user.id' v-if="purchase.user_id == user.id">{{ user.email }}</td>
            <td>{{ purchase.sub_total }}</td>
            <td>{{ purchase.total}}</td>
            <td><button class="btn btn-info" type="button" @click="deletePurchaseAction(purchase.id)"><img src="@/static/basurero.png"></button></td>
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
    getID(idP){
        this.getTickets();
        var array = this.tickets;
        console.log("this.tickets:" ,this.tickets);
        var returnable = [];
        console.log(array);
        array.forEach(function(ticket){
            if(ticket.purchase_id == idP){
                returnable.push(ticket.id);
                console.log(ticket.id);
            }
        });
        return returnable;
    },
    async getPurchases() {
      await axios({
        method: "get",
        url: "http://principal-arena-219118.appspot.com/api/purchase"
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
        url: "http://principal-arena-219118.appspot.com/api/user"
      })
        .then(
          function(response) {
            console.log(response);
            this.$store.commit({
              type: "storeUsers",
              users: response.data
            });
          }.bind(this)
        )
        .catch(function(error) {
          console.log(error);
        });
    },
    async getTickets() {
      await axios({
        method: "get",
        url: "http://principal-arena-219118.appspot.com/api/ticket"
      })
        .then(
          function(response) {
            console.log(response);
            this.$store.commit({
              type: "storeTickets",
              tickets: response.data
            });
          }.bind(this)
        )
        .catch(function(error) {
          console.log(error);
        });

    },
    async deletePurchase(id) {
      console.log("Delete purchase and all tickets associated");
      listOfIDOfTickets = this.getID(id);
      listOfIDOfTickets.forEach(function(idT){
          axios({
            method: "delete",
            url: "http://principal-arena-219118.appspot.com/api/purchase/" + idT,
            data: {
            idT: id
            }
          })
          .then(
            function(response) {
            console.log("response");
            console.log(response);
            this.getUsers();
            this.getPurchases();
            }.bind(this)
          )
          .catch(function(error) {
            console.log("error");
            console.log(error);
          });
      });
    },
    async deleteTicket(id) {
      console.log("Delete ticket");
      await axios({
        method: "delete",
        url: "http://principal-arena-219118.appspot.com/api/ticket/" + id,
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
    deletePurchaseAction(id) {
      this.deletePurchase(id);
    }
  },
  created: function() {
    this.getPurchases();
    this.getUsers();
    this.getTickets();
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