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
        <nuxt-link :to="{ name: 'boletos-detalleagregar'}" replace>
        <button type="button" class="btn btn-info text-right">Agregar</button>
        </nuxt-link> 
      </div>
    </div>
    <!--Tabla-->
    <table class="table mt-3">
      <thead class="bg-success">
        <tr>
          <th scope="col">ID de usuario</th>
          <th scope="col">Nombre del cliente</th>
          <th scope="col">Apellido del cliente</th>
          <th scope="col">Email</th>
          <th scope="col">Subtotal</th>
          <th scope="col">Total</th>
          <th scope="col">Detalles</th>
          <th scope="col">Borrar</th>
        </tr>
      </thead>
        <tbody>
          <tr v-for="purchase in this.$store.state.purchases" :key='purchase.id' >
            <th>{{ purchase.user_id }}</th>
            <th v-for="user in $store.state.users" :key="user.id" v-if="purchase.user_id == user.id">{{ user.name }}</th>
            <td v-for="user in $store.state.users" :key="user.id" v-if="purchase.user_id == user.id">{{ user.last_name }}</td>
            <td v-for="user in $store.state.users" :key="user.id" v-if="purchase.user_id == user.id">{{ user.email }}</td>
            <td>{{ purchase.subtotal }}</td>
            <td>{{ purchase.total }}</td>
            <td><button class="btn btn-info" type="button" @click="editPurchaseAction(purchase.id)"><img src="@/static/pencil.png"></button></td>
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
    async getPurchase(id) {
      await axios({
        method: "get",
        url: "https://adsoft-01.appspot.com/api/purchase/" + this.idPurchase,
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(
          function(response) {
            this.purchase = response.data;
            console.log(this.purchase);
          }.bind(this)
        )
        .catch(function(error) {
          console.log(error);
        });
    },
    async deletePurchase(idPurchase) {
      console.log("Delete purchase");
      await axios({
        method: "delete",
        url: "https://adsoft-01.appspot.com/api/purchase/" + id,
        data: {
          idPurchase: id
        }
      })
        .then(
          function(response) {
            console.log("response");
            console.log(response);
          }.bind(this)
        )
        .catch(function(error) {
          console.log("error");
          console.log(error);
        });
    },
    editPurchaseAction(idPurchase) {
      //send to create view
      this.$router.push({ name: "boletos-detallesagregar", params: { idPurchase: id } });
    },
    deletePurchaseAction(idPurchase) {
      this.deletePurchase(id);
    }
  },
  created: function() {
    this.getPurchase(idPurchase);
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


