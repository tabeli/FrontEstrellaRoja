<template>
    <div class="container">
    <!--Empieza la form-->
    <br>
    <br>
        <form>
            <!--Tipo de ticket-->
            <div class="form-group ">
              <center>
                <label for="muralSelect" class="letrabonita" >Visualiza el ID del tipo de Ticket deseado</label>
              </center>
              <select class="form-control">
                <option v-for="ticket_type in this.$store.state.ticket_types" :key='ticket_type.id' >{{ticket_type.name}} -->  ID:{{ticket_type.id}}</option>
              </select>
              <br>
              <center>
                <label for="option">No lo encuentras ? Puedes crear uno nuevo</label>
                <nuxt-link :to="{ name: 'boletos-tipoboletoeditar' }" replace>
                <button type="button" class="btn btn-info text-right">Agregar</button>
                <br>
                </nuxt-link> 
              </center>
            </div>
            <div class="form-group">
              <center>
                <label for="ticket_type" class="letrabonita">Escoge el ID del tipo de Ticket</label>
              </center>
                
                <select class="form-control" id="mural" v-model="price.ticket_type_id">
                    <option v-for="ticket_type in this.$store.state.ticket_types"  :key='ticket_type.id' >{{ticket_type.id}}</option>
                </select>
            </div>
        <!--Tours-->
            <div class="form-group ">
              <center>
                <label for="tourSelect" class="letrabonita">Visualiza el ID del tour deseado</label>
              </center>
              
              <select class="form-control">
                <option v-for="tour in this.$store.state.tours" :key='tour.id' >{{tour.name}} -->  ID:{{tour.id}}</option>
              </select>
              <br>
              <center>
                 <label for="option">No lo encuentras ? Puedes crear uno nuevo</label>
                 <nuxt-link :to="{ name: 'rutas-agregar' }" replace>
                <button type="button" class="btn btn-info text-right">Agregar</button>
                <br>
                </nuxt-link> 
              </center>
            </div>
            <div class="form-group">
              <center>
                <label for="tour" class="letrabonita">Escoge el ID del Tour</label>
              </center>
                <select class="form-control" name="tour_id" id="tour_id" v-model="price.tour_id">
                    <option v-for="tour in this.$store.state.tours" :key='tour.id' >{{tour.id}}</option>
                </select>
            </div>
        
        <!--Precio-->
            <div class="form-group">
                <center>
                    <label for="precios" class="letrabonita">Precio</label>
                </center>
                
                <input type="text" class="form-control" id="amount" v-model="price.amount">
            </div>
        </form>
    <!--Termina la form-->

    <!--Boton Agregar-->
       <center>
            <button type="submit" class="btn btn-danger" @click.stop.prevent="priceFunction()">
                <div v-if="price.id == undefined">Crea Precio</div>
                <div v-else>Actualiza Precio</div>
            </button>
        </center>
    </div>   
</template>

<script>
import axios from "axios";

export default {
  //props is the parameter it receives
  props: ["idPrice", "idTicket_type", "idTour"],
  data: function() {
    return {
      price: {}
    };
  },
  methods: {
    priceFunction() {
      if (this.price.id != undefined) {
        this.editPrice();
      } else {
        this.createPrice();
      }
    },
    async createPrice() {
      //alert(JSON.stringify(this.price))
      await axios({
        method: "post",
        url: "http://principal-arena-219118.appspot.com/api/price",
        headers: {
          "Content-Type": "application/json"
        },
        data: {
          ticket_type_id: this.price.ticket_type_id,
          tour_id: this.price.tour_id,
          amount: this.price.amount
        }
      })
        .then(
          function(response) {
            //alert(JSON.stringify(response))
            this.$router.push({ name: "precio" });
          }.bind(this)
        )
        .catch(function(error) {
          /*alert(JSON.stringify(error))*/
          console.log(error);
        });
    },
    async editPrice() {
      await axios({
        method: "put",
        url:
          "http://principal-arena-219118.appspot.com/api/price/" + this.idPrice,
        headers: {
          "Content-Type": "application/json"
        },
        data: {
          ticket_type_id: this.price.ticket_type_id,
          tour_id: this.price.tour_id,
          amount: this.price.amount
        }
      })
        .then(
          function(response) {
            this.$router.push({ name: "precio" });
            //alert("http://principal-arena-219118.appspot.com/api/price/" + this.idPrice)
            console.log("response");
            console.log(response);
          }.bind(this)
        )
        .catch(function(error) {
          console.log("error");
          console.log(error);
        });
    },
    async getPrice(id) {
      await axios({
        method: "get",
        url: "http://principal-arena-219118.appspot.com/api/price/" + id,
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(
          function(response) {
            this.price = response.data;
            console.log(this.price);
          }.bind(this)
        )
        .catch(function(error) {
          console.log(error);
        });
    },
    async getTicket_types() {
      await axios({
        method: "get",
        url: "http://principal-arena-219118.appspot.com/api/ticket_type"
      })
        .then(
          function(response) {
            console.log(response);
            this.$store.commit({
              type: "storeTicket_types",
              ticket_types: response.data
            });
          }.bind(this)
        )
        .catch(function(error) {
          console.log(error);
        });
    },
    async getTours() {
      await axios({
        method: "get",
        url: "http://principal-arena-219118.appspot.com/api/tour"
      })
        .then(
          function(response) {
            console.log(response);
            this.$store.commit({
              type: "storeTours",
              tours: response.data
            });
          }.bind(this)
        )
        .catch(function(error) {
          console.log(error);
        });
    }
  },

  created: function() {
    console.log("start crea precio");
    if (this.idPrice != undefined) {
      console.log("idPrice is defined");
      this.getPrice(this.idPrice);
    }
    if (this.idTicket_type != undefined) {
      console.log("idTicket_type is defined");
      this.getTicket_types();
    }
    if (this.idTour != undefined) {
      console.log("idTour is defined");
      this.getTours();
    }
    this.getTours();
    this.getTicket_types();
  }
};
</script>

<style>
.container {
  margin-left: 160px;
  margin-right: 0px; /* Same as the width of the sidenav */
  display: inline-block;
  font-size: 20px; /* Increased text to enable scrolling */
  text-align: center;
  align-content: center;
}
.letrabonita {
  font-size: 22px;
  font: bold;
}
</style>


