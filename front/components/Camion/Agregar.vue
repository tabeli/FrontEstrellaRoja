<template>
    <div class="container">
    <!--Empieza la form-->
        <form>
        <!--Tour-->
            <div class="form-group ">
              <center>
                <label for="tourSelect" class="letrabonita">Visualiza el ID del tour deseado</label>
              </center>
              
              <select class="form-control sombra">
                <option v-for="tour in this.$store.state.tours" :key='tour.id' >{{tour.name}} -->  ID:{{tour.id}}</option>
              </select>
              <br>
              <center>
                 <label for="option">No lo encuentras ? Puedes crear uno nuevo</label>
                 <nuxt-link :to="{ name: 'rutas-agregar' }" replace>
                <button type="button" class="btn btn-info text-right shadow">Agregar</button>
                <br>
                </nuxt-link> 
              </center>
            </div>
            <div class="form-group">
              <center>
                <label for="tour" class="letrabonita">Escoge el ID del Tour</label>
              </center>
                <select class="form-control sombra" name="tour_id" id="tour_id" v-model="bus.tour_id">
                    <option v-for="tour in this.$store.state.tours" :key='tour.id' >{{tour.id}}</option>
                </select>
            </div>
        <!-- Mural -->
            <div class="form-group ">
              <center>
                <label for="muralSelect" class="letrabonita" >Visualiza el ID del mural deseado</label>
              </center>
              
              <select class="form-control sombra">
                <option v-for="mural in this.$store.state.murals" :key='mural.id' >{{mural.title}} -->  ID:{{mural.id}}</option>
              </select>
              <br>
              <center>
                <label for="option">No lo encuentras ? Puedes crear uno nuevo</label>
                <nuxt-link :to="{ name: 'mural-agregar' }" replace>
                <button type="button" class="btn btn-info text-right shadow">Agregar</button>
                <br>
                </nuxt-link> 
              </center>
            </div>
            <div class="form-group">
              <center>
                <label for="mural" class="letrabonita">Escoge el ID del Mural</label>
              </center>
                
                <select class="form-control sombra" id="mural" v-model="bus.mural_id">
                    <option v-for="mural in this.$store.state.murals"  :key='mural.id' >{{mural.id}}</option>
                </select>
            </div>
        <!--Capacidad-->
            <div class="form-group">
              <center>
                <label for="capacidad" class="letrabonita">Capacidad de pasajeros</label>
              </center>
                
                <input type="text" class="form-control sombra" id="capacity" placeholder="Cantidad" v-model="bus.capacity">
            </div>
        <!-- Status -->
            <div class="form-group">
              <center>
                <label for="status" class="letrabonita">Status</label>
              </center>
                
                <select class="form-control sombra" id="status" v-model="bus.status">
                    <option v-if="bus.status == in_service" value="in_service" selected>En servicio</option>
                    <option v-else value="in_service">En servicio</option>
                    <option v-if="bus.status == out_of_service" value="out_of_service" selected>Fuera de servicio</option>
                    <option v-else value="out_of_service">Fuera de servicio</option>
                </select>
            </div>
        </form>

        <center>
            <button type="submit" class="btn btn-success shadow" @click.stop.prevent="busFunction()">
                <div v-if="bus.id == undefined">Crea Camión</div>
                <div v-else>Actualiza Camión</div>
            </button>
          </center>
          <br>
    <!--Termina la form-->
    </div>   
</template>

<script>
import axios from "axios";

export default {
  //props is the parameter it receives
  props: ["idBus", "idMural", "idTour"],
  data: function() {
    return {
      bus: {},
      in_service: "in_service",
      out_of_service: "out_of_service"
    };
  },
  methods: {
    //funcion de bus
    busFunction() {
      if (this.bus.id != undefined) {
        this.editBus();
      } else {
        this.createBus();
      }
    },
    //crear autobus
    async createBus() {
      //alert(JSON.stringify(this.bus))
      await axios({
        method: "post",
        url: "https://adsoft-01.appspot.com/api/bus",
        headers: {
          "Content-Type": "application/json"
        },
        data: {
          tour_id: this.bus.tour_id,
          mural_id: this.bus.mural_id,
          capacity: this.bus.capacity,
          sold_tickets: 0,
          status: this.bus.status
        }
      })
        .then(
          function(response) {
            //alert(JSON.stringify(response))
            this.$router.push({ name: "camiones" });
          }.bind(this)
        )
        .catch(function(error) {
          /*alert(JSON.stringify(error))*/
          console.log(error);
        });
    },
    //editar autobus
    async editBus() {
      await axios({
        method: "put",
        url: "https://adsoft-01.appspot.com/api/bus/" + this.idBus,
        headers: {
          "Content-Type": "application/json"
        },
        data: {
          tour_id: this.bus.tour_id,
          mural_id: this.bus.mural_id,
          capacity: this.bus.capacity,
          sold_tickets: 0,
          status: this.bus.status
        }
      })
        .then(
          function(response) {
            this.$router.push({ name: "camiones" });
            /*alert(
              "https://adsoft-01.appspot.com/api/bus/" + this.idBus
        );*/
            console.log("response");
            console.log(response);
          }.bind(this)
        )
        .catch(function(error) {
          console.log("error");
          console.log(error);
        });
    },
    //obtener autobus
    async getBus(id) {
      await axios({
        method: "get",
        url: "https://adsoft-01.appspot.com/api/bus/" + id,
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(
          function(response) {
            this.bus = response.data;
            console.log(this.bus);
          }.bind(this)
        )
        .catch(function(error) {
          console.log(error);
        });
    },
    //obtener murales
    async getMurals() {
      await axios({
        method: "get",
        url: "https://adsoft-01.appspot.com/api/mural"
      })
        .then(
          function(response) {
            console.log(response);
            this.$store.commit({
              type: "storeMurals",
              murals: response.data
            });
          }.bind(this)
        )
        .catch(function(error) {
          console.log(error);
        });
    },
    //obtener tours
    async getTours() {
      await axios({
        method: "get",
        url: "https://adsoft-01.appspot.com/api/tour"
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
    console.log("start crea bus");
    if (this.idBus != undefined) {
      console.log("idBus is defined");
      this.getBus(this.idBus);
    }
    if (this.idMural != undefined) {
      console.log("idMural is not defined");
      this.getMurals();
    }
    if (this.idTour != undefined) {
      console.log("idTour is not defined");
      this.getTours();
    }
    this.getTours();
    this.getMurals();
  }
};
</script>

<style>
.sombra {
  box-shadow: 0 2px 6px rgba(39, 39, 39, 0.13), 0 2px 6px rgba(39, 39, 39, 0.13);
}
.letrabonita {
  font-size: 22px;
  font: bold;
}
</style>
