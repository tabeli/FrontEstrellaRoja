<template>
    <div class="container">
    <!--Empieza la form-->
        <form>
        <!--Nombre-->
            <div class="form-group">
                <center>
                    <label for="name" class="letrabonita">Nombre de la parada</label>
                </center>
                
                <input type="text" class="form-control" id="name" placeholder="" v-model="stop.name">
            </div>
        <!--Longitud-->
            <div class="form-group">
                <center>
                    <label for="longitude" class="letrabonita">Longitud</label>
                </center>
                
                <input type="text" class="form-control" id="longitude" placeholder="" v-model="stop.longitude">
            </div>
        <!--Latitud-->
            <div class="form-group">
                <center>
                    <label for="latitude" class="letrabonita">Latitud</label>
                </center>
                
                <input type="text" class="form-control" id="latitude" placeholder="" v-model="stop.latitude">
            </div>
        <!--Descripcion-->
            <div class="form-group">
                <center>
                    <label for="description" class="letrabonita">Descripción</label>
                </center>
                
                <input type="text" class="form-control" id="description" placeholder="" v-model="stop.description">
            </div>
        </form>
    <!--Termina la form-->

    <!--Boton Agregar-->
        <center>
            <button type="submit" class="btn btn-danger" @click.stop.prevent="stopFunction()">
                <div v-if="stop.id == undefined">Crea Parada</div>
                <div v-else>Actualiza Parada</div>
            </button>
          </center>
    </div>   
</template>

<script>
import axios from "axios";

export default {
  //props is the parameter it receives
  props: ["idStop"],
  data: function() {
    return {
      stop: {}
    };
  },
  methods: {
    stopFunction() {
      if (this.stop.id != undefined) {
        this.editStop();
      } else {
        this.createStop();
      }
    },
    async createStop() {
      //alert(JSON.stringify(this.stop))
      await axios({
        method: "post",
        url: "http://principal-arena-219118.appspot.com/api/stop",
        headers: {
          "Content-Type": "application/json"
        },
        data: {
          name: this.stop.name,
          longitude: this.stop.longitude,
          latitude: this.stop.latitude,
          description: this.stop.description
        }
      })
        .then(
          function(response) {
            //alert(JSON.stringify(response))
            this.$router.push({ name: "paradas" });
          }.bind(this)
        )
        .catch(function(error) {
          /*alert(JSON.stringify(error))*/
          console.log(error);
        });
    },
    async editStop() {
      await axios({
        method: "put",
        url:
          "http://principal-arena-219118.appspot.com/api/stop/" + this.idStop,
        headers: {
          "Content-Type": "application/json"
        },
        data: {
          name: this.stop.name,
          longitude: this.stop.longitude,
          latitude: this.stop.latitude,
          description: this.stop.description
        }
      })
        .then(
          function(response) {
            this.$router.push({ name: "boletos" });
            //alert("http://principal-arena-219118.appspot.com/api/stop/" + this.idStop)
            console.log("response");
            console.log(response);
          }.bind(this)
        )
        .catch(function(error) {
          console.log("error");
          console.log(error);
        });
    },
    async getStop(id) {
      await axios({
        method: "get",
        url: "http://principal-arena-219118.appspot.com/api/stop/" + id,
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(
          function(response) {
            this.stop = response.stop;
            console.log(this.bus);
          }.bind(this)
        )
        .catch(function(error) {
          console.log(error);
        });
    }
  },

  created: function() {
    console.log("start crea paradas");
    if (this.idStop != undefined) {
      console.log("idStop is not defined");
    }
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