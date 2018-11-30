<!--Componente de detalle de boleto-->
<template>
  <div class="container">
    <br>
    <div class="mt-5">
    <div class="row">
    <!--Tabla-->
    <table class="table mt-3">
      <thead class="bg-success sombra">
        <tr>
          <th scope="col">ID de usuario</th>
          <th scope="col">Nombre del comprador</th>
          <th scope="col">Apellido del comprador</th>
          <th scope="col">Email</th>
          <th scope="col">Subtotal</th>
          <th scope="col">Total</th>
          <th scope="col">Borrar</th>
        </tr>
      </thead>
        <tbody class="sombra">
          <tr v-for="purchase in this.$store.state.purchases" :key='purchase.id' v-if="purchase.id == thid.idPurchase">
            <th>{{ purchase.user_id }}</th>
            <th v-for="user in $store.state.users" :key="user.id" v-if="purchase.user_id == user.id">{{ user.name }}</th>
            <td v-for="user in $store.state.users" :key="user.id" v-if="purchase.user_id == user.id">{{ user.last_name }}</td>
            <td v-for="user in $store.state.users" :key="user.id" v-if="purchase.user_id == user.id">{{ user.email }}</td>
            <td>{{ purchase.subtotal }}</td>
            <td>{{ purchase.total }}</td>
          </tr>
        </tbody>
    </table>
  </div> 
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
.sombra {
  box-shadow: 0 2px 6px rgba(39, 39, 39, 0.13), 0 2px 6px rgba(39, 39, 39, 0.13);
}
</style>


