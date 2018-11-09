<template>
    <div class="container">
    <!--Empieza la form-->
    <p>{{this.ticket}}</p>
        <form>
        <!-- Purchase -->
            <div class="form-group ">
              <center>
                <label for="purchaseSelect" class="letrabonita">Visualiza el ID de la compra</label>
              </center>
              
              <select class="form-control">
                <option v-for="purchase in this.$store.state.purchases" :key='purchase.id' >ID:{{purchase.id}}</option>
              </select>
              <br>
              <center>
                 <label for="option">No lo encuentras ? Puedes crear una nueva</label>
                 <nuxt-link :to="{ name: '' }" replace>
                <button type="button" class="btn btn-info text-right">Agregar</button>
                <br>
                </nuxt-link> 
              </center>
            </div>
            <div class="form-group">
              <center>
                <label for="purchase" class="letrabonita">Escoge el ID de la Compra</label>
              </center>
                <select class="form-control" name="purchase_id" id="purchase_id" v-model="ticket.purchase_id">
                    <option v-for="purchase in this.$store.state.purchases" :key='purchase.id' >{{purchase.id}}</option>
                </select>
            </div>
        <!-- Precio -->
            <div class="form-group ">
              <center>
                <label for="priceSelect" class="letrabonita" >Visualiza el ID del precio deseado</label>
              </center>
              
              <select class="form-control">
                <option v-for="price in this.$store.state.prices" :key='price.id' >Precio:${{price.amount}} -->  ID:{{price.id}}</option>
              </select>
              <br>
              <center>
                <label for="option">No lo encuentras ? Puedes crear uno nuevo</label>
                <nuxt-link :to="{ name: 'precio-agregar' }" replace>
                <button type="button" class="btn btn-info text-right">Agregar</button>
                <br>
                </nuxt-link> 
              </center>
            </div>
            <div class="form-group">
              <center>
                <label for="price" class="letrabonita">Escoge el ID del Precio</label>
              </center>
                
                <select class="form-control" id="pruce" v-model="ticket.price_id">
                    <option v-for="price in this.$store.state.prices"  :key='price.id' >{{price.id}}</option>
                </select>
            </div>
        <!--Nombre-->
            <div class="form-group">
              <center>
                <label for="name" class="letrabonita">Nombre del Cliente</label>
              </center>
                
                <input type="text" class="form-control" id="client_name" placeholder="" v-model="ticket.client_name">
            </div>
        <!--Apellido-->
            <div class="form-group">
              <center>
                <label for="last_name" class="letrabonita">Apellido del Cliente</label>
              </center>
                
                <input type="text" class="form-control" id="client_last_name" placeholder="" v-model="ticket.client_last_name">
            </div>
        <!--Edad-->
            <div class="form-group">
              <center>
                <label for="age" class="letrabonita">Edad del Cliente</label>
              </center>
                
                <input type="text" class="form-control" id="client_age" placeholder="" v-model="ticket.client_age">
            </div>
        <!--Fecha tour-->
            <div class="form-group">
              <center>
                <label for="date" class="letrabonita">Fecha del Tour</label>
              </center>
                
                <div>
                  <center>
                    <input class="date" type="date" id="tour_date" name="tour_date" value="2018-01-01" min="2018-11-01" v-model="ticket.tour_date" />
                  </center>
                  
                </div>
            </div>
        <!--QR-->
            <div class="form-group">
              <center>
                <label for="qr_code" class="letrabonita">Código QR</label>
              </center>
                
                <input type="text" class="form-control" id="qr_code" placeholder="" v-model="ticket.qr_code">
            </div>
        <!--Total-->
            <div class="form-group">
              <center>
                <label for="total" class="letrabonita">Cantidad Total</label>
              </center>
                
                <input type="text" class="form-control" id="total" placeholder="" v-model="ticket.total">
            </div>
        </form>



        <center>
            <button type="submit" class="btn btn-danger" @click.stop.prevent="ticketFunction()">
                <div v-if="ticket.id == undefined">Crea Ticket
                </div>
                <div v-else>Actualiza Ticket</div>
            </button>
          </center>
    <!--Termina la form-->
    </div>   
</template>

<script>
import axios from "axios";

export default {
  //props is the parameter it receives
  props: ["idTicket", "idPurchase", "idPrice"],
  data: function() {
    return {
      ticket: {}
    };
  },
  methods: {
    ticketFunction() {
      if (this.ticket.id != undefined) {
        this.editTicket();
      } else {
        this.createTicket();
      }
    },
    async createTicket() {
      //alert(JSON.stringify(this.ticket))
      await axios({
        method: "post",
        url: "http://principal-arena-219118.appspot.com/api/ticket",
        headers: {
          "Content-Type": "application/json"
        },
        data: {
          purchase_id: this.ticket.purchase_id,
          price_id: this.ticket.price_id,
          client_name: this.ticket.client_name,
          client_last_name: this.ticket.client_last_name,
          client_age: this.ticket.client_age,
          tour_date: this.ticket.tour_date,
          qr_code: this.ticket.qr_code,
          total: this.ticket.total
        }
      })
        .then(
          function(response) {
            //alert(JSON.stringify(response))
            this.$router.push({ name: "boletos" });
          }.bind(this)
        )
        .catch(function(error) {
          /*alert(JSON.stringify(error))*/
          console.log(error);
        });
    },
    async editTicket() {
      await axios({
        method: "put",
        url:
          "http://principal-arena-219118.appspot.com/api/ticket/" +
          this.idTicket,
        headers: {
          "Content-Type": "application/json"
        },
        data: {
          purchase_id: this.ticket.purchase_id,
          price_id: this.ticket.price_id,
          client_name: this.ticket.client_name,
          client_last_name: this.ticket.client_last_name,
          client_age: this.ticket.client_age,
          tour_date: this.ticket.tour_date,
          qr_code: this.ticket.qr_code,
          total: this.ticket.total
        }
      })
        .then(
          function(response) {
            this.$router.push({ name: "boletos" });
            //alert("http://principal-arena-219118.appspot.com/api/ticket/" + this.idTicket)
            console.log("response");
            console.log(response);
          }.bind(this)
        )
        .catch(function(error) {
          console.log("error");
          console.log(error);
        });
    },
    async getTicket(id) {
      await axios({
        method: "get",
        url: "http://principal-arena-219118.appspot.com/api/ticket/" + id,
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(
          function(response) {
            this.ticket = response.data;
            console.log(this.ticket);
          }.bind(this)
        )
        .catch(function(error) {
          console.log(error);
        });
    },
    async getPurchases() {
      await axios({
        method: "get",
        url: "http://principal-arena-219118.appspot.com/api/purchase"
      })
        .then(
          function(response) {
            console.log(response);
            this.$store.commit({
              type: "storePurchases",
              purchases: response.data
            });
          }.bind(this)
        )
        .catch(function(error) {
          console.log(error);
        });
    },
    async getPrices() {
      await axios({
        method: "get",
        url: "http://principal-arena-219118.appspot.com/api/price"
      })
        .then(
          function(response) {
            console.log(response);
            this.$store.commit({
              type: "storePrices",
              prices: response.data
            });
          }.bind(this)
        )
        .catch(function(error) {
          console.log(error);
        });
    }
  },

  created: function() {
    console.log("start crea ticket");
    if (this.idTicket != undefined) {
      console.log("idTicket is defined");
      this.getTicket(this.idTicket);
    }
    if (this.idPurchase != undefined) {
      console.log("idPurchase is defined");
      this.getPurchases();
    }
    if (this.idPrice != undefined) {
      console.log("idPrice is defined");
      this.getPrices();
    }
    this.getPurchases();
    this.getPrices();
  }
};
</script>

<style>
.letrabonita {
  font-size: 22px;
  font: bold;
}
</style>
